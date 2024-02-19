import { FC } from "react";

export const Header: FC = function Header() {
    const handlePress = () => {
        console.log("Click");
    };


    return (
    <header className={"bg-blue-600 h-20"}>
        <button onClick={handlePress}>
            {"Test кнопка"}</button>
    </header>
    );
};
