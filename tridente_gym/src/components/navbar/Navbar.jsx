import Logo from "../../../public/logo.png";

export const Navlinks = [
  {
    id: 1,
    name: "CONTACTO",
    link: "/#services",
  },
  {
    id: 2,
    name: "CLASES",
    link: "/#about",
  },
  {
    id: 3,
    name: "LOGIN",
    link: "/#join",
  },
];
const Navbar = () => {

  return (
    <div className="w-full dark:text-primary h-24 flex justify-between items-center">
      <div className="container">
        <div className="flex justify-between items-center">
          <div>
            <img
              src={Logo}
              alt="logo gym"
              className="w-16 sm:w-24 absolute top-0 left-110"/>
            <div style={{ marginLeft: '110px' }}>
              <h1 className="text-2xl font-bold">TRIDENTE GYM</h1>
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  <a
                    href={link}
                    className="inline-block text-lg font-semibold  hover:text-primary duration-300">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;