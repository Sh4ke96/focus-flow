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
      <section className="container grid grid-cols-12 mt-28 gap-x-12">
        <div className="flex flex-col justify-center col-span-6">
          <h1 className="text-[5rem] font-bold mb-8">
            Manage work{" "}
            <span className="block p-6 text-6xl text-white rounded-md bg-blue w-fit">
              Efficiently.
            </span>
          </h1>
          <p className="mb-8 text-4xl font-medium">
            Plan, Track and Organise your work.
          </p>
          <p className="max-w-xl mb-8">
            An Intranet platform to Manage projects, organise work and focus on
            what’s important.
          </p>
          <Button className="text-white bg-blue">Learn More</Button>
        </div>
        <div className="col-span-6">
          <Image src="/img/hero.svg" alt="stats" width={700} height={700} />
        </div>
      </section>
      <section className="container grid grid-cols-12 mt-56 gap-x-12">
        <div className="col-span-8">
          <h2 className="max-w-screen-sm text-5xl font-bold">
            See how Micronet can help you improve your systems & productivity.
          </h2>
        </div>
        <div className="grid grid-cols-12 col-span-12 mt-32 gap-x-12">
          {ImproveCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center col-span-4 p-10 rounded-md shadow-lg bg-blue"
            >
              <h3 className="mb-12 text-4xl font-bold text-white">
                {card.title}
              </h3>
              <p className="mb-12 text-center text-white">{card.description}</p>
              <Button className="bg-white text-blue">Learn More</Button>
            </div>
          ))}
        </div>
      </section>
      <section className="container grid grid-cols-12 mt-56 gap-x-12">
        <div className="col-span-6">
          <Image
            src="/img/subscribe.svg"
            alt="subscribe email"
            width={700}
            height={700}
          />
        </div>
        <div className="flex flex-col justify-center col-span-6">
          <h2 className="max-w-screen-sm mb-8 text-5xl font-bold">
            Get the Micronet Advantage. Our stats speak for temselves.
          </h2>
          <p className="mb-16">
            It is a long established fact that a reader will be distracted. It
            is a long established fact that a reader will be distracted.
          </p>
          <div className="flex gap-x-12">
            <div className="text-center">
              <p className="mb-4 font-bold">Intense research</p>
              <p>
                Intense research refers to thorough and focused investigations
                conducted to gather data or insights.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-md bg-blue">
              <p className="mb-2 text-3xl font-bold text-white">99</p>
              <p className="text-center text-white">Active Projects</p>
            </div>
            <div className="text-center">
              <p className="mb-4 font-bold">Audience segmentation</p>
              <p>
                Audience segmentation involves categorizing a larger audience
                into smaller groups based on specific traits or behaviors.
              </p>
            </div>
          </div>
          <div className="relative mt-16">
            <input
              className="w-full px-4 py-6 border-2 rounded-md border-blue"
              type="email"
              placeholder="Enter email to subscribe"
            />
            <Button
              type="submit"
              className="absolute text-white -translate-y-1/2 bg-blue right-8 top-1/2"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
