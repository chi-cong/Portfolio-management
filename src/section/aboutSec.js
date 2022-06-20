import getData from "../data/getData";
import Title from "./title";
import { useState } from "react";
import AboutSub from "./subSection/aboutSub";

const AboutSec = () => {
  const [sub, setSub] = useState("information");
  const aboutData = getData().about;
  const subs = ["information", "skills", "timeline"];

  return (
    <div className='w-full flex flex-col justify-center items-center h-full gap-5'>
      <Title secTitle={"about"} />
      <div className='w-full flex justify-center items-center gap-3'>
        {subs.map((btnName) => {
          return (
            <button
              className='text-lg sm:text-xl border border-slate-900 rounded-md p-2 capitalize'
              {...(sub === btnName && {
                className:
                  "text-lg sm:text-xl border border-slate-900 bg-slate-900 text-cyan-500 rounded-md p-2 capitalize",
              })}
              onClick={(e) => {
                setSub(btnName);
              }}
            >
              {btnName}
            </button>
          );
        })}
      </div>
      <AboutSub sub={sub} aboutData={aboutData} />
    </div>
  );
};
export default AboutSec;
