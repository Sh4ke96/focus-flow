import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="flex items-center justify-between px-56 py-10 bg-white shadow-lg mt-28">
      <Image
        src="/img/logo.svg"
        alt="focusflow logo"
        width={125}
        height={125}
        quality={100}
      />
    </footer>
  );
};

export default Footer;
