import { NextPage } from "next";
import Image from "next/image";

import { Button } from "@/components";

const HomePage: NextPage = () => {
  const ImproveCards = [
    {
      id: 1,
      title: "Task Management",
      description:
        "Task management involves organizing and planning tasks faster and efficiently. It is crucial for any kind of project or business operation to prioritize, assign, resolve and track tasks effectively.",
    },
    {
      id: 2,
      title: "Team Collaboration",
      description:
        "Team collaboration is the cornerstone of success in modern workplaces. It encompasses communication, coordination, and cooperation among team members to achieve common goals.",
    },
    {
      id: 3,
      title: "Project Planning",
      description:
        "Project planning is crucial in project management. It involves defining goals, outlining tasks, estimating resources, setting timelines, and creating a roadmap to guide the project.",
    },
  ];

  return (
    <>
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
          <Button>Learn More</Button>
        </div>
        <div className="col-span-6">
          <Image src="/img/hero.svg" alt="stats" width={700} height={700} />
        </div>
      </section>
      <section className="container mt-56 grid grid-cols-12 gap-x-12">
        <div className="col-span-8">
          <h2 className="text-5xl font-bold max-w-screen-sm">
            See how Micronet can help you improve your systems & productivity.
          </h2>
        </div>
        <div className="col-span-12 grid grid-cols-12 gap-x-12 mt-32">
          {ImproveCards.map((card) => (
            <div
              key={card.id}
              className="bg-blue shadow-sm p-10 col-span-4 rounded-md flex flex-col items-center"
            >
              <h3 className="text-white text-4xl font-bold mb-12">
                {card.title}
              </h3>
              <p className="text-white mb-12 text-center">{card.description}</p>
              <Button extraStyles="bg-white text-blue">Learn More</Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;
