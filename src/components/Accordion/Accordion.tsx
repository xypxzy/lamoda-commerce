import {useState} from "react";
import cls from './Accordion.module.css'
import AccordionLayout from "../AccordionLayout/AccordionLayout.tsx";
import React from "react";
import { ProductProps } from "../../consts/consts.ts";
import { useAppSelector } from "../../store/hooks.ts";
import { useParams } from "react-router-dom";

interface Discription{
    product: ProductProps,}

const Accordion: React.FC<Discription> = ({product, }) => {    
    
    const [activeIndex, setActiveIndex] = useState(0);
    //accordion
    return (
        <div className={cls.accordion}>
            <AccordionLayout
                title="Описание"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                {product?.description}
            </AccordionLayout>
            <AccordionLayout
                title="Способ применение"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                {product?.way_to_use}
            </AccordionLayout>
        </div>
    );
};

export default Accordion;