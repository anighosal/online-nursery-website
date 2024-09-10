import { Button, Modal } from "antd";
import React from "react";

interface DeleteProductModalProps {
  visible: boolean;
  productName?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const DeleteProductModal: React.FC<DeleteProductModalProps> = ({
  visible,
  productName,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      title="Confirm Delete"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="delete" type="primary" onClick={onConfirm}>
          Delete
        </Button>,
      ]}
    >
      <p>Are you sure you want to delete {productName}?</p>
    </Modal>
  );
};

export default DeleteProductModal;
