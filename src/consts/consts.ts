interface  ImagesProps {
    id: number;
    image: string;
    product: number;
}

export interface ProductProps {
    name: string,
    serial_number: string
    description: string,
    price: number,
    id: number,
    images: ImagesProps[];
    categories: string[];
}

export interface CategoriesProps {
    name: string,
    id: number,
}