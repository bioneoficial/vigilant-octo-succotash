export const Denounce: React.FC = () => {
  return (
    <section className="p-4">
      <div className="mx-auto">
        <div className="my-5 flex items-center">
          <h2 className="text-2xl font-bold">Denúncias</h2>
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
          <tbody className="text-gray-600 text-sm font-light"></tbody>
        </table>
      </div>
    </section>
  );
};
