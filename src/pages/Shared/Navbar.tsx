import CartButton from "@/components/CartButton/CartButton";
import { RootState } from "@/redux/store";
import { ICartItem } from "@/types/types";
import { SearchOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

interface NavbarProps {
  cartItems: ICartItem[];
}

const Navbar: React.FC<NavbarProps> = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [Search, setSearch] = useState("");

  const Navigate = useNavigate();

  const HandleSearch = (e: any) => {
    e.preventDefault();
    Navigate(`/products?search=${Search}`);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white text-black shadow-md py-4 md:flex md:justify-between md:items-center">
      <div className="flex justify-between items-center container max-w-7xl">
        <Link to="/">
          <h1 className="text-xl font-bold">
            <span className="gradient-text">Nature's Nest</span>
          </h1>
        </Link>
        <form
          onSubmit={HandleSearch}
          className="hidden md:flex items-center w-full max-w-md mx-4"
        >
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-l px-4 py-2 w-full"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-r"
          >
            <SearchOutlined />
          </button>
        </form>

        <div className="flex items-center space-x-4">
          <Link to="/admin">Dashboard</Link>
          <Link to="/all-products">All Products</Link>

          <div className="flex items-center">
            <CartButton cartItems={cartItems} />{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
