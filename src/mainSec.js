import HomeSec from "./section/homeSec";
import AboutSec from "./section/aboutSec";
import PortfolioSec from "./section/portfSec";
import BlogSec from "./section/blogSec";
import ContactSec from "./section/contactSec";

const MainSec = ({ currSec }) => {
  return (
    <div className=' flex justify-center items-center flex-col h-full lg:w-10/12 flex-grow my-5'>
      {currSec === "Home" && <HomeSec />}
      {currSec === "About" && <AboutSec />}
      {currSec === "Portfolio" && <PortfolioSec />}
      {currSec === "Blogs" && <BlogSec />}
      {currSec === "Contact" && <ContactSec />}
    </div>
  );
};

export default MainSec;
