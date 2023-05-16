import { UserItem } from "@/components/molecules/UserItem";
import { user } from "@/types/types";
import { HEAD_TABLE_USERS, PrivacyItemStatus, UserRole } from "@/utils/enums";
import Image from "next/image";
import { useEffect, useState } from "react";

const initialUsers: user[] = Array.from({ length: 901 }, (_, i) => ({
  id: i,
  nome: `Usuário ${i}`,
  email: `usuario${i}@exemplo.com`,
  imagem: "https://media.licdn.com/dms/image/D4D03AQH3XhCLMfcx0w/profile-displayphoto-shrink_400_400/0/1668354197751?e=1689206400&v=beta&t=9jTu05zEYjo6WcK6NtCuCo0tI-deZtdHPS6mUENAduo",
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
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentUsers = users.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const pageNumbers = [];
  const maxPagesToShow = 5;
  const firstPage = 1;
  const lastPage = totalPages;

  if (totalPages <= maxPagesToShow) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    const middlePage = Math.floor(maxPagesToShow / 2);
    const leftEllipsisPage = Math.max(currentPage - middlePage, firstPage + 1);
    const rightEllipsisPage = Math.min(currentPage + middlePage, lastPage - 1);

    pageNumbers.push(firstPage);
    if (leftEllipsisPage > 2) {
      pageNumbers.push("...");
    }
    for (let i = leftEllipsisPage; i <= rightEllipsisPage; i++) {
      pageNumbers.push(i);
    }
    if (rightEllipsisPage < totalPages - 1) {
      pageNumbers.push("...");
    }
    pageNumbers.push(lastPage);
  }

  const handleClickPage = (pageNumber: number | string): void => {
    if (typeof pageNumber === "number") {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    const results = initialUsers.filter(
      (user) =>
        user.nome.toLowerCase().includes(searchTermName.toLowerCase()) &&
        user.email.toLowerCase().includes(searchTermEmail.toLowerCase())
    );

    setUsers(results);
    setCurrentPage(firstPage);
  }, [searchTermName, searchTermEmail]);




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
        {pageNumbers.map((pageNumber, index) => {
          if (pageNumber === "...") {
            return (
              <span key={index} className="mx-1">
                {pageNumber}
              </span>
            );
          } else {
            return (
              <button
                key={index}
                className={`mx-1 px-2 py-1 rounded-full ${
                  currentPage === pageNumber ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={(): void => handleClickPage(pageNumber)}
              >
                {pageNumber}
              </button>
            );
          }
        })}
      </div>
    </div>
  );
}
