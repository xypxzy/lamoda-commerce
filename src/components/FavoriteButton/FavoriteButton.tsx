import {FC} from "react";


interface FavoriteButtonProps {
    active: boolean;
    setActive: (active: boolean) => void;
    DefaultImage: JSX.Element;
    ActiveImage: JSX.Element;
    color?: 'red' | 'green';
    className?: string;
    onClick?: () => void;
}

const FavoriteButton: FC<FavoriteButtonProps> = (props) => {
    const {
        active,
        setActive,
        ActiveImage,
        DefaultImage,
        color = 'red',
        className = '',
        onClick
    } = props;

    return (
        <div className={`absolute ${className}  hover:bg-gray-200`} onClick={onClick}>
            <button
                className={`rounded-full w-8 h-8 text-lg p-0 border-0 inline-flex items-center justify-center ${active ? `text-${color}-500` : ''}`}
                onClick={() => setActive(!active)}
            >
                {active ?
                    ActiveImage
                    :
                    DefaultImage
                }
            </button>
        </div>
    );
};

export default FavoriteButton;
