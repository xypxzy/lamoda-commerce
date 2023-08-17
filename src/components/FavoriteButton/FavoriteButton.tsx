import {FC} from "react";


interface FavoriteButtonProps {
    active: boolean;
    setActive: (active: boolean) => void;
    DefaultImage: JSX.Element;
    ActiveImage: JSX.Element;
    className?: string;
}

const FavoriteButton: FC<FavoriteButtonProps> = (props) => {
    const {
        active,
        setActive,
        ActiveImage,
        DefaultImage,
        className = ''
    } = props;

    return (
        <div className={`absolute ${className}`}>
            <button
                className={`rounded-full w-12 h-12 text-2xl p-0 border-0 inline-flex items-center justify-center  ${active ? 'text-red-500' : 'text-gray-800'}`}
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