import CartButton from "@/components/CartButton/CartButton";
import { RootState } from "@/redux/store";
import {
  HeartOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
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
          onSubmit={handleSearch}
          className="hidden md:flex items-center w-full max-w-md mx-4"
        >
          <input
            type="text"
            placeholder="Search products..."
            className="border border-gray-300 rounded-l px-4 py-2 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-r"
          >
            <SearchOutlined />
          </button>
        </form>

        <div className="flex items-center space-x-4">
          <Link to="/admin">
            <p>Admin</p>
          </Link>
          <Link to="/login">
            <UserAddOutlined className="text-gray-700 hover:text-green-600 cursor-pointer" />
          </Link>
          <Link to="/wishlist">
            <HeartOutlined className="text-red-500 hover:text-green-600 cursor-pointer" />
          </Link>
          <div className="flex items-center">
            <CartButton cartItems={cartItems} />{" "}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
