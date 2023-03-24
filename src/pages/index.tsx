import Head from "next/head";
import ProductsGrid from "@/components/ProductsGrid";
import styles from "@/styles/Home.module.scss";
import Pagination from "@/components/Pagination";
import { Product, ProductResponse } from "@/models";
import { InferGetStaticPropsType } from "next";
import { useEffect, useMemo, useState } from "react";

const PAGE_SIZE = 6;

export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => console.log(currentPage), [currentPage]);

  const slicedProducts: Product[] = useMemo(() => {
    if (!products) return [];
    return products.slice(
      (currentPage - 1) * PAGE_SIZE,
      currentPage * PAGE_SIZE
    );
  }, [products, currentPage]);

  const totalPages = useMemo(
    () => Math.ceil(products.length / PAGE_SIZE),
    [products]
  );

  const handlePageChange = (page: number) => {
    console.log(page);
    setCurrentPage(page);
  };

  return (
    <>
      <Head>
        <title>Next task project</title>
        <meta name="description" content="Next task project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles["home-wrapper"]}>
          <ProductsGrid products={slicedProducts} />
          <Pagination
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const productsRes: ProductResponse = await response.json();

  return {
    props: {
      products: productsRes.products,
    },
  };
};
