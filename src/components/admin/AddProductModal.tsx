import { useAddProductMutation } from "@/redux/api/baseApi";
import { addProduct } from "@/redux/features/productsSlice";
import { useAppDispatch } from "@/redux/hook";
import { IProduct } from "@/types/types";
import { Button, Form, Input, message, Modal } from "antd";
import React from "react";

interface AddProductModalProps {
  visible: boolean;
  onClose: () => void;
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  visible,
  onClose,
}) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [addProductMutation, { isLoading }] = useAddProductMutation();

  const onFinish = async (values: Partial<IProduct>) => {
    try {
      const newProduct = await addProductMutation(values).unwrap();
      dispatch(addProduct(newProduct));
      message.success("Product added successfully!");
      form.resetFields();
      onClose();
    } catch (error) {
      message.error("Failed to add product");
    }
  };

  return (
    <Modal
      title="Add New Product"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button
          key="submit"
          type="primary"
          onClick={() => form.submit()}
          loading={isLoading}
        >
          Add Product
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item name="title" label="Title" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="image" label="Image URL" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="rating" label="Rating" rules={[{ required: true }]}>
          <Input type="number" min={0} max={5} step={0.1} />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProductModal;
