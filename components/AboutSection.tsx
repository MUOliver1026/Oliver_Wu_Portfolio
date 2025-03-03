import React from "react"
import Image from "next/image"

const skills = [
  { skill: "React.js" },
  { skill: "React Native" },
  { skill: "Next.js" },
  { skill: "TypeScript" },
  { skill: "JavaScript" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "GraphQL" },
  { skill: "Prisma" },
  { skill: "Drizzle ORM" },
  { skill: "PostgreSQL" },
  { skill: "MongoDB" },
  { skill: "MySQL" },
  { skill: "Tailwind CSS" },
  { skill: "MUI" },
  { skill: "Redux" },
  { skill: "Docker" },
  { skill: "CI/CD" },
  { skill: "AWS" },
  { skill: "GCP" },
  { skill: "Azure" },
  { skill: "Python" },
  { skill: "Git" }
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Oliver and I am a{" "}
              <span className="font-bold">{"results-driven"}</span>,
              <span className="font-bold">{" passionate"}</span>, and
              <span className="font-bold">{" innovative"}</span> Full Stack Engineer
              based in Melbourne, Australia.
            </p>
            <br />
            <p>
              I graduated from the University of New South Wales (UNSW) in 2023
              with a Master of Information Technology (Artificial Intelligence) and have been
              building scalable web applications with React, Next.js, and TypeScript ever since.
            </p>
            <br />
            <p>
              My expertise includes building scalable architectures, optimizing system performance,
              and integrating secure authentication and payment solutions. I'm experienced
              in DevOps, cloud deployment (AWS, GCP, Azure), and Agile methodologies with a
              proven track record of enhancing system efficiency and improving user engagement.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                continually innovate and optimize
              </span>{" "}
              and that&#39;s what I strive to do. I have a passion for
              technology and a desire to create solutions that make a real impact.
              I'm excited to collaborate on challenging projects and am
              always open to new opportunities. 🚀
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/hero-image.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:top-4 md:left-8 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection