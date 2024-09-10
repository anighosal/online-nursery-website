import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Adjust import path as per your project structure
import { ICategory } from "@/types/types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface CategoryCardProps {
  category: ICategory;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="relative bg-white border shadow-md overflow-hidden h-full">
      <CardHeader className="p-2">
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="h-80 w-full overflow-hidden rounded-t-lg group">
            <img
              src={category?.image}
              className={`object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105 ${
                isHovered ? "opacity-50" : "opacity-100"
              }`}
              alt={category?.name}
            />
            {isHovered && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Link to={`/categories/${category.name}`}>
                  <Button className="bg-green-100 text-black px-4 py-2 rounded-md hover:bg-green-200 focus:outline-none">
                    View Products ({category?.products?.length})
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      <CardContent className="grid p-4 justify-center">
        <CardTitle className="mt-2 text-xl font-bold">
          {category?.name}
        </CardTitle>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
