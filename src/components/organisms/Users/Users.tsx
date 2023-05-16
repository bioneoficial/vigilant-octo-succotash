import { UserItem } from "@/components/molecules/UserItem";
import { user } from "@/types/types";
import { HEAD_TABLE_USERS, PrivacyItemStatus, UserRole } from "@/utils/enums";
import Image from "next/image";
import { useEffect, useState } from "react";

const initialUsers: user[] = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  nome: `Usuário ${i}`,
  email: `usuario${i}@exemplo.com`,
  imagem: "https://via.placeholder.com/150",
  status: i % 2 === 0 ? PrivacyItemStatus.Ativo : PrivacyItemStatus.Inativo,
  tipo: Object.values(UserRole)[
    Math.floor(Math.random() * Object.values(UserRole).length)
  ],
  createdAt: new Date(),
}));

export default function Users(): JSX.Element {
  const [searchTermName, setSearchTermName] = useState<string>("");
  const [searchTermEmail, setSearchTermEmail] = useState<string>("");
  const [users, setUsers] = useState<user[]>(initialUsers);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const results = initialUsers.filter(
      (user) =>
        user.nome.toLowerCase().includes(searchTermName.toLowerCase()) &&
        user.email.toLowerCase().includes(searchTermEmail.toLowerCase())
    );

    setUsers(results);
  }, [searchTermName, searchTermEmail]);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentUsers = users.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handleClickNext = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handleClickPrev = (): void => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

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
                      className="font-bold pr-8"
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
      <button onClick={handleClickPrev}>Previous</button>
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}
