export type Product = {
  id: number;
  title: string;
  brandSrc: string;
  color: string;
  imageAlt: string;
  imageSrc: string;
  seasonTypes: string[];
  soldOut: boolean;
  unitPrice: number;
  views: number;
};

export type RawDataProduct = {
  data: Product[];
};
