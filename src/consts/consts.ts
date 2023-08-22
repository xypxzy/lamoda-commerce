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
    categories: string;
}

///user interface props

export interface UserProps {
    name: string,
    email: string,
    password: string,
    comfirmPasssword: string;
}

export interface AuthProps {
    email: string,
    password: string;
}

