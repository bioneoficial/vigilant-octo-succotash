import { DenounceItem } from "@/components/molecules/DenounceItem";
import { DenounceMock } from "@/utils/const";
import { HEAD_TABLE_DENOUNCE } from "@/utils/enums";

export const Denounce: React.FC = () => {
  return (
    <section className="p-4 text-center w-fit mx-auto">
      <h2 className="text-2xl font-bold">Denúncias</h2>
      <div className="bg-white shadow-md rounded my-6">
        <table className="min-w-max w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              {Object.values(HEAD_TABLE_DENOUNCE).map((header) => (
                <th key={header} className="py-3 px-6 text-left">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {DenounceMock.map((denounce) => (
              <DenounceItem {...denounce} key={denounce.id} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
