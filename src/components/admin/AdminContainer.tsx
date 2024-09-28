import {
  useDeleteProductMutation,
  useGetProductsQuery,
} from "@/redux/api/baseApi";
import { setProducts } from "@/redux/features/productsSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { IProduct } from "@/types/types";
import { EditOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Pagination as AntPagination, Table, message } from "antd";
import { Trash2Icon } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddProductModal from "./AddProductModal";
import DeleteProductModal from "./DeleteProductModal";
import UpdateProductModal from "./UpdateProductModal";

const AdminContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory] = useState("");
  const products = useAppSelector((state) => state.products.products);

  const {
    data: productsData,
    isLoading,
    isError,
  } = useGetProductsQuery({
    page: currentPage,
    limit: 10,
    sort: "price",
    order: "desc",
    category: selectedCategory,
  });

  const [deleteProduct] = useDeleteProductMutation();
  useEffect(() => {
    if (productsData) {
      dispatch(setProducts(productsData.products));
    }
  }, [productsData, dispatch]);

  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  console.log(selectedProduct);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products</div>;

  const handleDelete = (record: IProduct) => {
    setSelectedProduct(record);
    setIsDeleteModalVisible(true);
  };

  const handleConfirmDelete = async () => {
    if (!selectedProduct?._id) {
      message.error("No product selected for deletion.");
      return;
    }
    console.log("Deleting product with ID:", selectedProduct._id);
    try {
      await deleteProduct(selectedProduct._id).unwrap();
      message.success("Product deleted successfully!");

      setIsDeleteModalVisible(false);
      setSelectedProduct(null);
    } catch (error) {
      message.error("Failed to delete product.");
    }
  };

  const handleAdd = () => {
    setIsAddModalVisible(true);
  };

  const handleUpdate = (record: IProduct) => {
    setSelectedProduct(record);
    setIsUpdateModalVisible(true);
  };

  const handleAddModalClose = () => {
    setIsAddModalVisible(false);
  };

  const handleUpdateModalClose = () => {
    setIsUpdateModalVisible(false);
    setSelectedProduct(null);
  };

  const handleDeleteModalClose = () => {
    setIsDeleteModalVisible(false);
    setSelectedProduct(null);
  };

  const columns = [
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text: string) => (
        <img src={text} alt="Product" style={{ width: "50px" }} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_text: any, record: IProduct) => (
        <div className="flex gap-2">
          <button onClick={() => handleUpdate(record)}>
            <EditOutlined
              style={{
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#047e29",
                borderRadius: "50%",
                padding: "8px",
              }}
            />
          </button>
          <button onClick={() => handleDelete(record)}>
            <Trash2Icon
              style={{
                fontSize: "20px",
                color: "#fff",
                backgroundColor: "#FF0000",
                borderRadius: "50%",
                padding: "8px",
              }}
            />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <button className="mb-5" onClick={handleAdd}>
        <PlusCircleOutlined
          style={{
            fontSize: "24px",
            color: "#fff",
            backgroundColor: "#047e29",
            padding: "8px",
          }}
        />
      </button>
      <Table columns={columns} dataSource={products} rowKey="id" />

      <AddProductModal
        visible={isAddModalVisible}
        onClose={handleAddModalClose}
      />

      <UpdateProductModal
        visible={isUpdateModalVisible}
        product={selectedProduct}
        onClose={handleUpdateModalClose}
      />

      <DeleteProductModal
        visible={isDeleteModalVisible}
        productName={selectedProduct?.title}
        onConfirm={handleConfirmDelete}
        onCancel={handleDeleteModalClose}
      />

      {productsData && (
        <AntPagination
          current={currentPage}
          total={productsData.totalProducts}
          pageSize={10}
          onChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default AdminContainer;
