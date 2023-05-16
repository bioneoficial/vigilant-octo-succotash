import { HEAD_TABLE_USERS } from "@/utils/enums";
import Image from "next/image";

export default function Users(): JSX.Element {
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
                    />
                  </th>
                );
              } else {
                return (
                  <th key={header} className="">
                    {header}
                  </th>
                );
              }
            })}
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
}
