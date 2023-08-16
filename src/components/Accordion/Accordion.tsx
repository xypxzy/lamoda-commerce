import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'
import {FC, ReactNode, useState} from "react";

interface AccordionLayoutProps {
    title: string;
    children: ReactNode;
    index: number;
    activeIndex: number;
    setActiveIndex: (index: number) => void
}
const AccordionLayout: FC<AccordionLayoutProps> = ({ title, children, index, activeIndex, setActiveIndex }) => {
        const handleSetIndex = (index: number) => (activeIndex !== index) && setActiveIndex(index);

        return (
            <>
                <div onClick={() => {
                    handleSetIndex(index)
                    if(activeIndex == index) {
                        handleSetIndex(0)
                    }
                }} className='flex w-1/2 justify-between p-2 mt-2 rounded text-black'>
                    <div className='flex'>
                        <div className='text-black font-bold'>{title}</div>
                    </div>
                    <div className="flex items-center justify-center">
                        {
                            (activeIndex === index)
                                ? <BsFillArrowDownCircleFill className='w-8 h-8' />
                                : <BsFillArrowUpCircleFill className='w-8 h-8' />
                        }
                    </div>
                </div>

                {(activeIndex === index) && (
                    <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
                        {children}
                    </div>
                )}
            </>
        );
    };


const Accordion = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className='flex flex-col justify-center items-center'>
            <AccordionLayout
                title="Accordion 1"
                index={1}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 1 Content
            </AccordionLayout>

            <AccordionLayout
                title="Accordion 2"
                index={2}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            >
                This is Accordion 2 Content
            </AccordionLayout>
        </div>
    );
};

export default Accordion;