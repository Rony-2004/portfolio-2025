import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  const handleDownload = () => {
    // Trigger the download of the CV file
    const link = document.createElement('a');
    link.href = '/images/cv.pdf'; // Adjust the file name to your actual CV file
    link.download = 'My_CV.pdf'; // Set the default filename for the downloaded CV
    link.click();
  };

  return (
    <button
      onClick={handleDownload}
      className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-darkCyan to-orange transition-all duration-500 hover:scale-110 hover:border-orange cursor-pointer hover:shadow-cyanShadow"
    >
      My CV
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;
