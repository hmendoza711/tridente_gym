import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "PILATES",
    price: 7000,
    icon: (
      <FaCameraRetro className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "Lunes - 10:00am - 12:00pm",
      "Miercoles - 10:00am - 12:00pm",
      "Viernes - 10:00am - 12:00pm"
    ],
    aosDelay: "0",
  },
  {
    name: "SPINNIG",
    price: 5500,
    icon: (
      <GiNotebook className="text-5xl text-primary group-hover:text-black duration-300" />
    ),
    link: "#",
    description: [
      "Lunes - 10:00am - 12:00pm",
      "Miercoles - 10:00am - 12:00pm",
      "Viernes - 10:00am - 12:00pm"
    ],
    aosDelay: "500",
  },
  {
    name: "GIMNASIO",
    price: 11000,
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "Lunes - 10:00am - 12:00pm",
      "Miercoles - 10:00am - 12:00pm",
      "Viernes - 10:00am - 12:00pm"
    ],
    aosDelay: "1000",
  },
  {
    name: "FUNCIONAL",
    price: 6000,
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "Lunes - 10:00am - 12:00pm",
      "Miercoles - 10:00am - 12:00pm",
      "Viernes - 10:00am - 12:00pm"
    ],
    aosDelay: "1000",
  },
  {
    name: "BACHATA",
    price: 4500,
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "Lunes - 10:00am - 12:00pm",
      "Viernes - 10:00am - 12:00pm"
    ],
    aosDelay: "1000",
  },
  {
    name: "FUNCIONAL",
    price: 6000,
    icon: (
      <SlNote className="text-5xl text-primary group-hover:text-black duration-500" />
    ),
    link: "#",
    description: [
      "Lunes - 10:00am - 12:00pm",
      "Miercoles - 10:00am - 12:00pm",
      "Viernes - 10:00am - 12:00pm"
    ],
    aosDelay: "1000",
  },
];
const Activity = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black kpy-14 sm:min-h-[600px] sm:grid sm:place-items-center p-6">
        <div className="container">
          <div className="pb-12">
            <h1
              data-aos="fade-up"s
              className="text-3xl font-bold text-center sm:text-4xl">
              <span className="text-primary">NUESTRAS CLASES PERSONALIZADAS</span>
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center space-y-3 sm:space-y-6 p-4 sm:py-16 bg-gray-200 dark:bg-dark  hover:bg-primary/20 dark:hover:bg-primary/50 duration-300 text-black dark:text-white rounded-lg group "
              >
                <h1 className="text-3xl font-bold">{skill.name}</h1>
                <h1 className="text-center text-4xl font-semibold text-primary">
                  ${skill.price}
                </h1>

                {skill.description.map((desc) => (
                  <p>{desc}</p>
                ))}

                <a
                  href={skill.link}
                  className="primary-btn mt-4 group-hover:scale-105  duration-200"
                >
                  ANOTARSE
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Activity;