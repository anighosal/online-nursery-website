// src/components/admin/AddProductButton.tsx
import { Button } from "antd";
import React from "react";

interface AddProductButtonProps {
  onClick: () => void;
}

const AddProductButton: React.FC<AddProductButtonProps> = ({ onClick }) => {
  return (
    <Button type="primary" onClick={onClick}>
      Add Product
    </Button>
  );
};

export default AddProductButton;
