export interface Product {
  id: number;
  title: string;
  stock: number;
  brand: string;
  thumbnail: string;
}

export interface ProductResponse {
  products: Product[];
  limit: number;
  skip: number;
  total: number;
}
