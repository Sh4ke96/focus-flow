import { NextPage } from "next";
import Image from "next/image";

import { Button } from "@/components";

const HomePage: NextPage = () => {
  return (
    <section className="container mt-28 grid grid-cols-12 gap-x-12">
      <div className="col-span-6 flex flex-col justify-center">
        <h1 className="text-[5rem] font-bold mb-8">
          Manage work{" "}
          <span className="text-6xl text-white bg-blue block p-6 w-fit rounded-md">
            Efficiently.
          </span>
        </h1>
        <p className="mb-8 text-4xl font-medium">
          Plan, Track and Organise your work.
        </p>
        <p className="mb-8 max-w-xl">
          An Intranet platform to Manage projects, organise work and focus on
          what’s important.
        </p>
        <Button type="button">Learn More</Button>
      </div>
      <div className="col-span-6">
        <Image src="/img/hero.svg" alt="stats" width={700} height={700} />
      </div>
    </section>
  );
};

export default HomePage;
