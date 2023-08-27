import React, {useState} from "react";
import cls from './Accordion.module.css'
import AccordionLayout from "../AccordionLayout/AccordionLayout.tsx";
import {ProductProps} from "../../consts/consts.ts";

interface Description{
    product: ProductProps,
}

const Accordion: React.FC<Description> = ({product, }) => {
    
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