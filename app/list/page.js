"use client";
import Card from "@/components/card";
import { useEffect, useState } from "react";

const List = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-2xl font-bold">Fetch Dummy Products Data</h1>

      <div className=" grid grid-cols-4 gap-3 py-5">
        {products.length > 0 &&
          products.map((item) => (
            <Card
              thumbnail={item.thumbnail}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
      </div>
    </div>
  );
};

export default List;
