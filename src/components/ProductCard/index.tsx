import React from "react";
import styles from "./ProductCard.module.scss";
import clsx from "clsx";
import { Product } from "@/models";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const { thumbnail, brand, stock, title } = product;

  //just for render badge
  const badge =
    stock > 100 ? { type: "top", label: "Top" } : { type: "new", label: "New" };

  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-card__image"]}>
        <img src={thumbnail} alt="" />
        <div className={styles["product-card__badge-container"]}>
          <div
            className={clsx(styles["product-card__badge"], {
              [styles["product-card__badge-top"]]: badge.type === "top",
              [styles["product-card__badge-new"]]: badge.type === "new",
            })}
          >
            {badge.label}
          </div>
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
