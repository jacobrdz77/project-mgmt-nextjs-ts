import React from "react";

type HeaderProps = {
  title: string;
  buttonHandler: () => void;
};

const Header: React.FC<HeaderProps> = ({ title, buttonHandler }) => {
  return (
    <header className="flex justify-between">
      <h1 className="text-3xl">{title}</h1>
      <button
        className="bg-button text-white text-[14px] py-2 px-2 rounded-[5px]"
        type="button"
        onClick={buttonHandler}
      >
        + Add Project
      </button>
    </header>
  );
};

export default Header;
