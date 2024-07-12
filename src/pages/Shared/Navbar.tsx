import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { RootState } from "@/redux/store";
import {
  HeartOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchTerm);
    // Implement search functionality here
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 md:flex md:justify-between md:items-center">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-xl font-bold">
          <span className="gradient-text">Nature's Nest</span>
        </h1>
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
          <Link to="/login">
            <UserAddOutlined className="text-gray-700 hover:text-green-600 cursor-pointer" />
          </Link>
          <Link to="/wishlist">
            <HeartOutlined className="text-red-500 hover:text-green-600 cursor-pointer" />
          </Link>
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
          <button className="md:hidden" onClick={toggleMenu}>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Menu</MenubarTrigger>
              </MenubarMenu>
            </Menubar>
          </button>
        </div>
      </div>
      <NavigationMenu className={`md:flex ${menuOpen ? "block" : "hidden"}`}>
        <NavigationMenuList className="flex gap-x-8 items-center">
          <form
            onSubmit={handleSearch}
            className="md:hidden flex items-center w-full"
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
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default Navbar;
