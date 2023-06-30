import { DenounceItem } from "@/components/molecules/DenounceItem";
import { Pagination } from "@/components/molecules/Pagination";
import { DenounceMock } from "@/utils/const";
import { HEAD_TABLE_DENOUNCE } from "@/utils/enums";
import { useMemo, useState } from "react";

export const Denounce: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 10;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const currentDenounces = useMemo(() => {
    return DenounceMock.slice(firstItemIndex, lastItemIndex);
  }, [DenounceMock, firstItemIndex, lastItemIndex]);
  const totalPages = Math.ceil(DenounceMock.length / itemsPerPage);

  const handleClickPage = (pageNumber: number | string): void => {
    if (typeof pageNumber === "number") {
      setCurrentPage(pageNumber);
    } else if (pageNumber === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (pageNumber === "next" && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
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
            {currentDenounces.map((denounce) => (
              <DenounceItem {...denounce} key={denounce.id} />
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
    </section>
  );
};
