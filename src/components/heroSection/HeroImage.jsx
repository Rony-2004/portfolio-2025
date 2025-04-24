import { PiHexagonThin } from "react-icons/pi";

const HeroImage = () => {
  const spinnerClass =
    "absolute inset-0 -z-10 flex justify-center items-center animate-[spin_20s_linear_infinite] rotate-0";

  const hexagonProps =
    "w-auto min-h-[700px] md:h-[110%] sm:h-[130%] opacity-70";

  return (
    <div className="relative self-end h-full w-full items-center justify-center">
      <div className="h-full w-full">
        <img
          src="../../public/images/me.png"
          alt="Mowazzem Uddin Ahmed"
          className="w-auto h-auto md:max-w-[620px] sm:max-w-[420px] absolute bottom-0 z-10 left-1/2 -translate-x-1/2"
        />

        {/* Orange Spinner */}
        <div className={spinnerClass}>
          <PiHexagonThin
            className={`${hexagonProps} text-orange`}
          />
        </div>
        <div className={spinnerClass}>
          <PiHexagonThin
            className={`${hexagonProps} text-orange blur-lg`}
          />
        </div>

        {/* Cyan Spinner */}
        <div className={spinnerClass}>
          <PiHexagonThin
            className={`${hexagonProps} text-cyan`}
          />
        </div>
        <div className={spinnerClass}>
          <PiHexagonThin
            className={`${hexagonProps} text-cyan blur-lg`}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
