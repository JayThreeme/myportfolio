import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologiesInfo } from "../constants/technologiesInfo";

const Technologies = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologiesInfo.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

const WrappedTech = SectionWrapper(Technologies, "projects");
export default WrappedTech;
