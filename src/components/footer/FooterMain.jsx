import { Link } from "react-scroll";

const FooterMain = () => {
  const footerLinks = [
    {
      
    },
    {
      
    },
    {
      
    },
    {
      
    },
  ];
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-2xl text-lightGrey ">MOWAZZEM UDDIN AHMED</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1400px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © BUILD WITH ❤️ by  MU AHMED .
      </p>
    </div>
  );
};

export default FooterMain;
