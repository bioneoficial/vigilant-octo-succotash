import { PaginationProps } from "@/types/types";
import { useMemo } from "react";

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pageNumbers = useMemo(() => {
    const numbers = [];
    const maxPagesToShow = 5;
    const firstPage = 1;
    const lastPage = totalPages;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        numbers.push(i);
      }
    } else {
      const middlePage = Math.floor(maxPagesToShow / 2);
      const leftEllipsisPage = Math.max(
        currentPage - middlePage,
        firstPage + 1
      );
      const rightEllipsisPage = Math.min(
        currentPage + middlePage,
        lastPage - 1
      );

      numbers.push(firstPage);
      if (leftEllipsisPage > 2) {
        numbers.push("...");
      }
      for (let i = leftEllipsisPage; i <= rightEllipsisPage; i++) {
        numbers.push(i);
      }
      if (rightEllipsisPage < totalPages - 1) {
        numbers.push("...");
      }
      numbers.push(lastPage);
    }

    return numbers;
  }, [currentPage, totalPages]);

  return (
    <div className="flex justify-center items-center mt-4">
      {currentPage > 1 && (
        <button
          className="mx-1 px-2 py-1 rounded-full bg-gray-200"
          onClick={(): void => onPageChange("prev")}
        >
          Prev
        </button>
      )}
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
                currentPage === pageNumber
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
              onClick={(): void => onPageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        }
      })}
      {currentPage < totalPages && (
        <button
          className="mx-1 px-2 py-1 rounded-full bg-gray-200"
          onClick={(): void => onPageChange("next")}
        >
          Next
        </button>
      )}
    </div>
  );
};
