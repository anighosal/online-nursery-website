// import { filterProducts } from "@/redux/actions/productActions";
// import { RootState } from "@/redux/store";
// import React from "react";
// import { useDispatch, useSelector } from "react-redux";

// const Filter: React.FC = () => {
//   const dispatch = useDispatch();
//   const categories = useSelector((state: RootState) => {
//     const uniqueCategories = new Set(
//       state.products.products.map((product) => product.category)
//     );
//     return Array.from(uniqueCategories);
//   });

//   const handleFilter = (category: string) => {
//     dispatch(filterProducts(category));
//   };

//   return (
//     <div>
//       <button onClick={() => handleFilter("")}>All</button>
//       {categories.map((category) => (
//         <button key={category} onClick={() => handleFilter(category)}>
//           {category}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default Filter;
