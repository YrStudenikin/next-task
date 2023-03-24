import React from "react";
import styles from "./ProductsGrid.module.scss";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/models";

type Props = {
  products: Product[];
};

const ProductsGrid: React.FC<Props> = ({ products }) => {
  return (
    <div className={styles["products-grid"]}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
