import { useUpdateProductMutation } from "@/redux/api/baseApi";
import { updateProduct } from "@/redux/features/productsSlice";
import { useAppDispatch } from "@/redux/hook";
import { IProduct } from "@/types/types";
import { Button, Form, Input, Modal, message } from "antd";
import React from "react";

interface UpdateProductModalProps {
  visible: boolean;
  product: IProduct | null;
  onClose: () => void;
}

const UpdateProductModal: React.FC<UpdateProductModalProps> = ({
  visible,
  product,
  onClose,
}) => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();

  const [updateProductMutation, { isLoading }] = useUpdateProductMutation();

  const onFinish = async (values: Partial<IProduct>) => {
    try {
      if (product) {
        const updatedProduct = await updateProductMutation({
          id: product._id,
          ...values,
        }).unwrap();

        dispatch(updateProduct(updatedProduct));
        message.success("Product updated successfully!");
        form.resetFields();
        onClose();
      }
    } catch (error) {
      message.error("Failed to update product");
    }
  };

  return (
    <Modal
      title="Update Product"
      visible={visible}
      onCancel={() => {
        form.resetFields();
        onClose();
      }}
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
          Update
        </Button>,
      ]}
      afterClose={() => form.resetFields()}
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          category: product?.category,
          price: product?.price,
          quantity: product?.quantity,
        }}
      >
        <Form.Item
          name="category"
          label="Category"
          rules={[{ required: true, message: "Please enter category" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter price" }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item
          name="quantity"
          label="Quantity"
          rules={[{ required: true, message: "Please enter quantity" }]}
        >
          <Input type="number" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateProductModal;
