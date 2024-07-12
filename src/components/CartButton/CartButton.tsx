import { ICartItem } from "@/types/types"; // Adjust the path as necessary
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

interface CartButtonProps {
  cartItems: ICartItem[];
}

const CartButton: React.FC<CartButtonProps> = ({ cartItems }) => {
  return (
    <Link to="/cart" className="relative">
      <ShoppingCartOutlined
        style={{
          fontSize: "24px",
          color: "#fff",
          backgroundColor: "#047e29",
          borderRadius: "50%",
          padding: "8px",
        }}
      />
      {cartItems.length > 0 && (
        <span className="absolute -top-1 -right-1 bg-green-600 text-white rounded-full px-1 text-xs">
          {cartItems.length}
        </span>
      )}
    </Link>
  );
};

export default CartButton;
