import React from "react";

interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ProductPagination: React.FC<ProductPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-1 mx-1 ${
            currentPage === i
              ? "bg-gray-700 text-white"
              : "bg-gray-300 text-gray-700"
          } rounded`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center items-center mt-4">
      {totalPages > 0 && (
        <>
          <button
            className={`px-3 py-1 mx-1 ${
              currentPage === 1
                ? "bg-gray-700 text-white"
                : "bg-gray-300 text-gray-700"
            } rounded`}
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {getPageNumbers()}
          <button
            className={`px-3 py-1 mx-1 ${
              currentPage === totalPages
                ? "bg-gray-700 text-white"
                : "bg-gray-300 text-gray-700"
            } rounded`}
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};

export default ProductPagination;
