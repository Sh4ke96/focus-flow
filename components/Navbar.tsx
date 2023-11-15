import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components";

const Navbar: FC = () => {
  return (
    <nav className="flex justify-between items-center p-10 bg-white shadow-sm">
      <Link href="/">
        <Image
          src="/img/logo.svg"
          alt="focusflow logo"
          width={120}
          height={120}
          quality={100}
        />
      </Link>
      <ul className="flex items-center gap-x-12 font-medium">
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
          <Link href="/">Pricing</Link>
        </li>
        <li>
          <Link href="/">Team</Link>
        </li>
        <li>
          <Link href="/">Career</Link>
        </li>
        <li>
          <Link href="/">Blog</Link>
        </li>
      </ul>
      <div className="flex gap-x-10">
        <Link href="/">
          <Button>Sign Up</Button>
        </Link>
        <Link href="/">
          <Button>Sign In</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
