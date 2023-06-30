import { SelosItemProps, Stamps } from "@/types/types";

const SelosItem: React.FC<SelosItemProps> = ({ Selos }) => {
  return (
    <>
      {Selos.map((selo: Stamps) => (
        <tr key={selo.id}>
          <td>{selo.order}</td>
          <td>{selo.name}</td>
          <td>{selo.series_count}</td>

          <td className={` ${selo.active ? "text-green-600" : "text-red-600"}`}>
            {selo.active ? "Ativo" : "Inativo"}
          </td>
          {/* <td>{selo.order_by_serie}</td> POR VISUALIZACAO OU POR CRIACAO */}
        </tr>
      ))}
    </>
  );
};

export default SelosItem;
