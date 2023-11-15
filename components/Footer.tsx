import { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="flex justify-between items-center mx-12 py-10 mt-28">
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
