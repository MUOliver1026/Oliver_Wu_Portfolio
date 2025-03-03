import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "TidyTeddy",
    description:
      "Led the redevelopment of TidyTeddy's website using React, Vite, and Tailwind CSS, resulting in 20% faster load times and 25% increase in quote requests. Implemented modern UI components and responsive design.",
    image: "/tidyteddy.png",
    // github: "https://github.com/MUOliver1026",
    link: "https://www.tidyteddy.com.au/",
  },
  {
    name: "Tutor Trackr",
    description:
      "Tutor Trackr, a tutor management platform for connecting students and tutors. Utilized Next.js, TypeScript, Tailwind CSS, GraphQL, and Apollo Server.",
    image: "/tutor-management.png",
    github: "https://github.com/MUOliver1026/tutor_management_platform",
    // link: "https://google.com/",
  },
  {
    name: "Global Pay",
    description: "A payment platform for global businesses. Developed and deployed during internship, built using Next.js, JavaScript, Tailwind CSS, and REST API.",
    image: "/global-pay.png",
    // github: "https://github.com/MUOliver1026",
    link: "https://www.global-pay.com.au/",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    {project.link ? (
                        <Link href={project.link}>
                            <Image
                                src={project.image}
                                alt=""
                                width={1000}
                                height={1000}
                                className="rounded-xl shadow-xl hover:opacity-70"
                            />
                        </Link>
                    ) : (
                        <Image
                            src={project.image}
                            alt=""
                            width={1000}
                            height={1000}
                            className="rounded-xl shadow-xl"
                        />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      {project.github &&
                        <Link href={project.github} target="_blank">
                          <BsGithub
                            size={30}
                            className="hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                      </Link>}
                      {project.link &&
                          <Link href={project.link} target="_blank">
                            <BsArrowUpRightSquare
                                size={30}
                                className="hover:-translate-y-1 transition-transform cursor-pointer"
                            />
                          </Link>}
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection