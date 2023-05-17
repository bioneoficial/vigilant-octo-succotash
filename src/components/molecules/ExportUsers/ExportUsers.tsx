import { SelectField } from "@/components/atoms/SelectField";

export const ExportUsers = (): JSX.Element => {
  const handleExportUsers = (): void => {
    // logic for exporting users goes here
  };

  return (
    <div className="flex items-center justify-end">
      <div className="border border-gray-950 bg-gray-200  ">
        <h3>Exportação de usuários do sistema</h3>

        <SelectField
          label="Filtro de usuários"
          options={[
            { value: "author", text: "Autores" },
            { value: "users", text: "Usuários" },
            { value: "subscribers", text: "Assinantes" },
            { value: "all", text: "Todos" },
          ]}
          name="ExportUsers"
          className={[
            " mt-1 flex flex-col w-full py-2 px-3  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
          ]}
        />

        <button
          onClick={handleExportUsers}
          id="export-users-btn"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Exportar Usuários
        </button>
      </div>
    </div>
  );
};
