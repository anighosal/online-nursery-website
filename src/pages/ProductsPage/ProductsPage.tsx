import React, { useEffect, useState } from "react";

import ProductSearch from "@/components/ProductSearch/ProductSearch";
import {
  useFetchCategoriesQuery,
  useFetchProductsQuery,
} from "@/redux/api/baseApi";
import { IProduct } from "@/types/types";
import ProductFilter from "./ProductFilter";
import ProductPagination from "./ProductPagination";
import ProductTable from "./ProductTable";

const ProductsPage: React.FC = () => {
  const {
    data: products = [],
    error: productsError,
    isLoading: productsLoading,
  } = useFetchProductsQuery();
  const {
    data: categories = [],
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useFetchCategoriesQuery();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const itemsPerPage = 10;

  useEffect(() => {
    if (!productsLoading && products.length > 0) {
      setFilteredProducts(products);
    }
  }, [products, productsLoading]);

  useEffect(() => {
    let filtered: IProduct[] = products;

    // Apply search term filter
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply category filter
    if (selectedCategory && selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEdit = (product: IProduct) => {
    // Handle edit action here, possibly open a modal with a form to edit the product
    console.log("Edit product:", product);
  };

  const handleDelete = (productId: string) => {
    // Handle delete action here, possibly dispatch an action to delete the product
    console.log("Delete product with ID:", productId);
  };

  const displayedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (productsLoading || categoriesLoading) return <div>Loading...</div>;
  if (productsError || categoriesError)
    return <div>Error loading products or categories.</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <ProductSearch onSearch={handleSearch} />
      <ProductFilter
        categories={["All", ...categories.map((category) => category.name)]}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategorySelect}
      />
      <ProductTable
        products={displayedProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <ProductPagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductsPage;
