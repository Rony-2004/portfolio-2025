import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiCircle, PiHexagonThin } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center "
    >
      <img
        src="../../public/images/HexaPic.png"
        alt="MU AHMED"
        className="max-h-auto w-auto"
      />

      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiCircle className=" md:h-[90%] sm:h-[120%] min-h-[400px] w-auto text-cyan blur-md animate-[spin_10s_linear_infinite] " />
      </div>
    </motion.div>
  );
};

export default HeroPic;
