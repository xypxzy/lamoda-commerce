interface ImagesProps {
  id: number;
  image: string;
  product: number;
}

export interface ProductProps {
    name?: string,
    serial_number?: string
    way_to_use?: string,
    description?: string,
    price?: number,
    id?: number,
    images?: ImagesProps[];
    categories?: string[];
    compounds?: string[]; 
}

export interface CategoriesProps {
    name: string,
    id: number,
}

export interface Compound {
    id: string,
    name: string
}

export interface SortType {
  name: "rel" | "desc" | "asc";
}

