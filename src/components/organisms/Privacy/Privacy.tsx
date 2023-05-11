import { PrivacyItems } from "@/utils/const";
import { PrivacyItemStatus } from "@/utils/enums";
import Image from "next/image";
import { useRouter } from "next/router";

export const Privacy: React.FC = () => {
  const router = useRouter();

  const handleEdit = (id: number): void => {
    router.push(`/dashboard/privacy/${id}`);
  };

  const handleDelete = (id: number): void => {
    console.log("id", id);
  };

  return (
    <section className="p-4">
      <div className="mx-auto">
        <div className="my-5 flex items-center">
          <h2 className="text-2xl font-bold">Políticas e termos</h2>
          <div>
            <button
              onClick={(): Promise<boolean> =>
                router.push("/dashboard/privacy/create")
              }
              className="flex items-center ml-5 py-2 px-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]"
            >
              <Image src="/images/plus.svg" width={19} height={19} alt="plus" />
              Nova
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Tipo</th>
                <th className="py-3 px-6 text-center">Versão</th>
                <th className="py-3 px-6 text-center">Data</th>
                <th className="py-3 px-6 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {PrivacyItems.map((item) => (
                <tr
                  className="border-b border-gray-200 hover:bg-gray-100"
                  key={item.id + item.name}
                >
                  <td className="py-3 px-6 text-left">{item.name}</td>
                  <td
                    className={`py-3 px-6 text-left font-normal ${
                      item.status === PrivacyItemStatus.Ativo
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {item.status}
                  </td>
                  <td className="py-3 px-6 text-left">{item.type}</td>
                  <td className="py-3 px-6 text-center">{item.version}</td>
                  <td className="py-3 px-6 text-center">{item.date}</td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <button
                        onClick={(): void => handleEdit(item.id)}
                        className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <Image
                          src="/images/pencil.svg"
                          width={19}
                          height={19}
                          alt="plus"
                        />
                      </button>
                      <button
                        onClick={(): void => handleDelete(item.id)}
                        className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                      >
                        <Image
                          src="/images/trash.svg"
                          width={19}
                          height={19}
                          alt="plus"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
