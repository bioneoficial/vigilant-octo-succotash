/* eslint-disable @typescript-eslint/no-unused-vars */
import { addUsers, clearUsers, selectUsers } from "@/Redux/Reducers/userSlice";
import { getAllUsers } from "@/api/usuario";
import { Pagination } from "@/components/molecules/Pagination";
import { UserItem } from "@/components/molecules/UserItem";
import { MyError, getAllUsersResponse, user } from "@/types/types";
import { HEAD_TABLE_USERS, PrivacyItemStatus, UserRole } from "@/utils/enums";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";

export default function Users(): JSX.Element {
  const [searchTermName, setSearchTermName] = useState<string>("");
  const [searchTermEmail, setSearchTermEmail] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const { isLoading, error, data } = useQuery<
    Array<getAllUsersResponse>,
    MyError
  >("getAllUsers", getAllUsers);

  useEffect(() => {
    if (data) {
      console.log(data);
      const transformedData: user[] = data.map((item) => ({
        id: item.id,
        nome: item.nome,
        email: item.email,
        descricao: item.descricao,
        imagem: item.fotoPath,
        status: item.ativo,
        tipo: item.tipo,
      }));
      dispatch(clearUsers());
      dispatch(addUsers(transformedData));
      console.log(transformedData);
    }
  }, [data, dispatch]);

  const filteredUsers = useMemo(() => {
    return users?.filter(
      (user) =>
        user.nome.toLowerCase().includes(searchTermName.toLowerCase()) &&
        user.email.toLowerCase().includes(searchTermEmail.toLowerCase())
    );
  }, [searchTermName, searchTermEmail, users]);

  const itemsPerPage = 10;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentUsers = useMemo(() => {
    return filteredUsers?.slice(firstItemIndex, lastItemIndex);
  }, [filteredUsers, firstItemIndex, lastItemIndex]);
  const totalPages = Math.ceil((currentUsers.length ?? 1) / itemsPerPage);

  const handleClickPage = (pageNumber: number | string): void => {
    if (typeof pageNumber === "number") {
      setCurrentPage(pageNumber);
    } else if (pageNumber === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (pageNumber === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="ml-6 flex flex-col justify-center items-center w-full">
      <h2 className="mt-6 ml-6 mb-4 text-2xl font-semibold">Usuários</h2>

      <table className="table-auto border-collapse text-center">
        <thead className="border-collapse border border-slate-500">
          <tr>
            {Object.values(HEAD_TABLE_USERS).map((header) => {
              if (
                header === HEAD_TABLE_USERS.NOME ||
                header === HEAD_TABLE_USERS.EMAIL
              ) {
                return (
                  <th
                    key={header}
                    className="relative mt-2 rounded-md shadow-sm"
                  >
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Image
                        src="/images/lupa.svg"
                        width={20}
                        height={20}
                        alt={header}
                      />
                    </div>
                    <input
                      type="text"
                      placeholder={header}
                      className="font-bold pr-8 placeholder-black"
                      value={
                        header === HEAD_TABLE_USERS.NOME
                          ? searchTermName
                          : searchTermEmail
                      }
                      onChange={
                        header === HEAD_TABLE_USERS.NOME
                          ? (e): void => setSearchTermName(e.target.value)
                          : (e): void => setSearchTermEmail(e.target.value)
                      }
                    />
                  </th>
                );
              } else {
                return <th key={header}>{header}</th>;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {currentUsers?.map((user) => (
            <UserItem key={user.id} {...user} />
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handleClickPage}
        />
      </div>
    </div>
  );
}
