import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="" text="" />
        <p className="font-bold text-6xl text-lightBrown">______</p>
        <ExperienceInfo number="" text="" />
      </div>
      <p className="text-center">
        
      </p>
      <ExperienceInfo number="CODING" text="" />
    </div>
  );
};

export default ExperienceTopLeft;
