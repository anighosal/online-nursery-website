// src/components/ProductListTable.tsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import { IProduct } from "@/types/types";

import { deleteProduct } from "@/redux/actions/productActions";
import AddProductModal from "./AddProductModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import UpdateProductModal from "./UpdateProductModal";

const ProductListTable: React.FC = () => {
  const dispatch = useDispatch();
  const { filteredProducts } = useSelector(
    (state: RootState) => state.products
  );

  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null);

  const handleUpdateClick = (product: IProduct) => {
    setCurrentProduct(product);
    setShowUpdateModal(true);
  };

  const handleDeleteClick = (productId: number) => {
    setCurrentProduct(
      filteredProducts.find((product: IProduct) => product.id === productId) ||
        null
    );
    setShowDeleteModal(true);
  };

  const handleDeleteConfirm = (productId: number) => {
    dispatch(deleteProduct(productId));
    setShowDeleteModal(false);
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setShowAddModal(true)}
        className="mb-4 p-2 bg-green-500 text-white rounded"
      >
        Add Product
      </button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2">Image</th>
            <th className="py-2">Title</th>
            <th className="py-2">Price</th>
            <th className="py-2">Category</th>
            <th className="py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product: IProduct) => (
            <tr key={product.id}>
              <td className="py-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-16 w-16 object-cover"
                />
              </td>
              <td className="py-2">{product.title}</td>
              <td className="py-2">${product.price.toFixed(2)}</td>
              <td className="py-2">{product.category}</td>
              <td className="py-2">
                <button
                  onClick={() => handleUpdateClick(product)}
                  className="mr-2 p-2 bg-blue-500 text-white rounded"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDeleteClick(product.id)}
                  className="p-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUpdateModal && currentProduct && (
        <UpdateProductModal
          product={currentProduct}
          onClose={() => setShowUpdateModal(false)}
        />
      )}

      {showDeleteModal && currentProduct && (
        <DeleteConfirmationModal
          product={currentProduct}
          onConfirm={() => handleDeleteConfirm(currentProduct.id)}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}

      {showAddModal && (
        <AddProductModal onClose={() => setShowAddModal(false)} />
      )}
    </div>
  );
};

export default ProductListTable;
