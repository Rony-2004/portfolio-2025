import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

const SingleProject = ({ image, link, name }) => {
  return (
    <div className="relative group overflow-hidden rounded-xl border border-white shadow-lg">
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Project Name (top left on hover) */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition duration-500">
        {name}
      </div>

      {/* Hover Overlay with Logo-style View Button */}
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan hover:bg-orange text-white p-4 rounded-full text-2xl transition-all"
        >
          <BsFillArrowUpRightCircleFill />
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
