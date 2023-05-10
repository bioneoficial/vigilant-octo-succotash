import { useRouter } from "next/router";

type PrivacyItem = {
  id: number;
  name: string;
  status: string;
  type: string;
  version: number;
  date: string;
};

const PrivacyItems: PrivacyItem[] = [
  {
    id: 2,
    name: "Termos de Uso",
    status: "Ativo",
    type: "Termos de uso",
    version: 2,
    date: "23/08/2022",
  },
  {
    id: 1,
    name: "Política de privacidade e Cookies",
    status: "Ativo",
    type: "Política de privacidade",
    version: 1,
    date: "12/08/2022",
  },
];

export const Privacy: React.FC = () => {
  const router = useRouter();

  const handleEdit = (id: number): void => {
    router.push(`/dashboard/privacy/${id}`);
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleDelete = (id: number): void => {
    // Implement deletion logic
  };

  return (
    <section className="p-4">
      <div className="mx-auto">
        <div className="my-5 flex items-center">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold">Políticas e termos</h2>
          </div>
          <div>
            <button
              onClick={(): Promise<boolean> =>
                router.push("/dashboard/privacy/create")
              }
              className="ml-5 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              <i className="lni lni-plus mr-1"></i>Nova
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
                  <td className="py-3 px-6 text-left">{item.status}</td>
                  <td className="py-3 px-6 text-left">{item.type}</td>
                  <td className="py-3 px-6 text-center">{item.version}</td>
                  <td className="py-3 px-6 text-center">{item.date}</td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center">
                      <button
                        onClick={(): void => handleEdit(item.id)}
                        className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                      >
                        <i className="lni lni-pencil"></i>
                      </button>
                      <button
                        onClick={(): void => handleDelete(item.id)}
                        className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                      >
                        <i className="lni lni-trash-can"></i>
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
