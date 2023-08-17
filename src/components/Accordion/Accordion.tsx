import {useState} from "react";
import AccordionLayout from "../AccodionLayout/AccodionLayout.tsx";
import cls from './Accordion.module.css'
const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={cls.accadion}>
            <AccordionLayout
                title="Описание"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 1 Content
            </AccordionLayout>
            <AccordionLayout
                title="Способ применение"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 2 Content
            </AccordionLayout>
            <AccordionLayout
                title="Состав"
                index={3}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 3 Content
            </AccordionLayout>
        </div>
    );
};

export default Accordion;