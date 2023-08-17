import {FC, ReactNode} from "react";
import {HiOutlineMinus, HiOutlinePlus} from "react-icons/hi";
import cls from './AccodionLayout.module.css';

interface AccordionLayoutProps {
    title: string;
    children: ReactNode;
    index: number;
    activeIndex: number;
    setActiveIndex: (index: number) => void
}

const AccordionLayout: FC<AccordionLayoutProps> = (props) => {
    const { title, children, index, activeIndex, setActiveIndex } = props;

    const handleSetIndex = (index: number) => {
        if(activeIndex !== index) {
            setActiveIndex(index)
        } else {
            setActiveIndex(0);
        }
    };

    return (
        <>
            <div
                onClick={() => handleSetIndex(index)}
                className={cls.accordion__wrapper}
            >
                <div className={cls.accordion__header}>
                    <div className={cls.accordion__title}>{title}</div>
                </div>
                <div className={cls.accordion__buttons}>
                    {
                        (activeIndex === index)
                            ? <HiOutlineMinus className={cls.accordion__btn} />
                            : <HiOutlinePlus className={cls.accordion__btn} />
                    }
                </div>
            </div>

            {(activeIndex === index) && (
                <div className={cls.accordion__description}>
                    {children}
                </div>
            )}
        </>
    );
};

export default AccordionLayout;