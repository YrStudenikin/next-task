import React from "react";
import styles from "./ProductCard.module.scss";
import { Product } from "@/models";
import Badge, { BadgeVariant } from "@/components/Badge";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { thumbnail, brand, stock, title } = product;

  //just for render badge
  const badge: BadgeVariant = stock > 100 ? "top" : "new";

  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-card__image"]}>
        <img src={thumbnail} alt="" />
        <div className={styles["product-card__badge-container"]}>
          <Badge variant={badge} />
        </div>
      </div>
      <div className={styles["product-card__info-list"]}>
        <div className={styles["product-card__info-item"]}>
          <span>Название:</span>
          <span>{title}</span>
        </div>
        <div className={styles["product-card__info-item"]}>
          <span>Производитель:</span>
          <span>{brand}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
