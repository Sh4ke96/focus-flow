import { FC } from "react";

interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
  disabled?: boolean;
  extraStyles?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ type, children, disabled, onClick }) => {
  return (
    <button
      type={type}
      className={`bg-blue px-8 py-4 rounded-md w-fit text-white font-medium`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
