import { usePlaceOrderMutation } from "@/redux/api/baseApi";
import { RootState } from "@/redux/store";
import { IOrder } from "@/types/types";
import { Button, Form, Input, message, Radio } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const CheckoutForm: React.FC = () => {
  const [form] = Form.useForm();
  const [placeOrder, { isLoading }] = usePlaceOrderMutation();
  const cart = useSelector((state: RootState) => state.cart.items);

  const handleSubmit = async (values: any) => {
    try {
      const cartItemsForOrder: IOrder["cartItems"] = cart.map((item) => ({
        _id: item.product,
        title: item.title,
        description: item.description,
        category: item.category,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
        rating: item.rating,
      }));

      const orderData: IOrder = {
        name: values.name,
        phone: values.phone,
        address: values.address,
        paymentMethod: values.paymentMethod,
        cartItems: cartItemsForOrder,
      };
      console.log("Order data being sent:", orderData);

      const response = await placeOrder(orderData).unwrap();
      if (response) {
        message.success("Order placed successfully!");
        form.resetFields();
      }
    } catch (error) {
      message.error("Failed to place order. Please try again.");
      console.error("Error placing order:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-8 w-full max-w-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="space-y-4"
        >
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Name" />
          </Form.Item>

          <Form.Item
            label="Phone"
            name="phone"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
          >
            <Input placeholder="Phone" />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Please enter your address" }]}
          >
            <Input placeholder="Address" />
          </Form.Item>

          <Form.Item label="Payment Method" name="paymentMethod">
            <Radio.Group>
              <Radio value="cod">Cash on Delivery</Radio>
              <Radio value="creditCard">Credit/Debit Card</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading} block>
              Place Order
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutForm;
