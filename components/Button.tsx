import { FC } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
  disabled?: boolean;
  extraStyles?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
  type = "button",
  children,
  disabled,
  onClick,
  extraStyles,
}) => {
  const classNames =
    `bg-blue px-8 py-4 rounded-md w-fit text-white font-medium ${
      extraStyles || ""
    }`.trim();
  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
