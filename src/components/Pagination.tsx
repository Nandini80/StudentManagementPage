import React from "react";

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  hasMore: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  onPageChange,
  hasMore,
}) => {
  return (
    <div className="flex justify-center mt-6 space-x-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition disabled:opacity-50"
      >
        Previous
      </button>
      <span className="px-4 py-2 font-bold text-blue-700">{currentPage}</span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasMore}
        className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
