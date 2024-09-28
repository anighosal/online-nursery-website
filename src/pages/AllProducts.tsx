import ProductCard from "@/components/ProductList/ProductCard";
import Container from "@/components/ui/Container";
import { useGetProductsQuery } from "@/redux/api/baseApi";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useSearchParams } from "react-router-dom";

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const [page, setPage] = useState(1);
  const limit = 10;
  const { data, error, isLoading } = useGetProductsQuery({
    page,
    limit,
    sort: "price",
    order: "desc",
  });

  const handleNextPage = () => {
    if (data && page < data.totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    if ("status" in error) {
      const errorMessage =
        typeof error.data === "string" ? error.data : "Something went wrong.";
      return <div>Error: {errorMessage}</div>;
    }

    if ("message" in error) {
      return <div>Error: {error.message}</div>;
    }

    return <div>An unknown error occurred</div>;
  }
  return (
    <div className="mt-40">
      <Container>
        <h2 className="text-2xl font-bold text-center mb-4">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data?.products.map((product) => (
            <div key={product.id} className="w-full">
              <div className="h-full">
                <ProductCard product={product} />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="mr-2 px-4 py-2 bg-gray-300 rounded flex items-center"
          >
            <FaArrowLeft className="mr-1" />
          </button>
          <span className="mx-2">
            Page {page} of {data?.totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={page === data?.totalPages}
            className="ml-2 px-4 py-2 bg-gray-300 rounded flex items-center"
          >
            <FaArrowRight className="ml-1" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default AllProducts;
