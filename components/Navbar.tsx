import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center mx-12 py-10">
      <Link href="/">
        <Image
          src="/img/logo.svg"
          alt="focusflow logo"
          width={120}
          height={120}
          quality={100}
        />
      </Link>
      <ul className="flex gap-x-12 font-medium">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Application</Link>
        </li>
        <li>
          <Link href="/">Features</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
        <button>Sign Up</button>
        <button>Sign In</button>
      </ul>
    </nav>
  );
};

export default Navbar;
