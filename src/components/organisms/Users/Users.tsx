import { addUsers } from "@/Redux/Reducers/userSlice";
import { Pagination } from "@/components/molecules/Pagination";
import { UserItem } from "@/components/molecules/UserItem";
import { user } from "@/types/types";
import { HEAD_TABLE_USERS, PrivacyItemStatus, UserRole } from "@/utils/enums";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";

const initialUsers: user[] = Array.from({ length: 10000 }, (_, i) => ({
  id: i,
  nome: `Usuário ${i}`,
  email: `usuario${i}@exemplo.com`,
  imagem:
    "https://media.licdn.com/dms/image/D4D03AQH3XhCLMfcx0w/profile-displayphoto-shrink_400_400/0/1668354197751?e=1689206400&v=beta&t=9jTu05zEYjo6WcK6NtCuCo0tI-deZtdHPS6mUENAduo",
  status: i % 2 === 0 ? PrivacyItemStatus.Ativo : PrivacyItemStatus.Inativo,
  tipo: Object.values(UserRole)[
    Math.floor(Math.random() * Object.values(UserRole).length)
  ],
  createdAt: new Date().toISOString(),
}));
export default function Users(): JSX.Element {
  const [searchTermName, setSearchTermName] = useState<string>("");
  const [searchTermEmail, setSearchTermEmail] = useState<string>("");
  const [users, setUsers] = useState<user[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   initialUsers.map((user) => {
  //     dispatch(
  //       addUser({
  //         id: user.id,
  //         nome: user.nome,
  //         email: user.email,
  //         status: user.status,
  //         imagem: user.imagem,
  //         tipo: user.tipo,
  //       })
  //     );
  //   });
  // }, [dispatch]);
  dispatch(addUsers(initialUsers));

  const itemsPerPage = 10;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentUsers = useMemo(() => {
    return users.slice(firstItemIndex, lastItemIndex);
  }, [users, firstItemIndex, lastItemIndex]);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handleClickPage = (pageNumber: number | string): void => {
    if (typeof pageNumber === "number") {
      setCurrentPage(pageNumber);
    } else if (pageNumber === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (pageNumber === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const filteredUsers = useMemo(() => {
    return initialUsers.filter(
      (user) =>
        user.nome.toLowerCase().includes(searchTermName.toLowerCase()) &&
        user.email.toLowerCase().includes(searchTermEmail.toLowerCase())
    );
  }, [searchTermName, searchTermEmail]);

  useEffect(() => {
    setUsers(filteredUsers);
    setCurrentPage(1); // reset page number when filtering
  }, [filteredUsers]);

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
          {currentUsers.map((user) => (
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
