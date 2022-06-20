import Item from "../item";
import AddingBtn from "../addBtn";

const AboutSub = ({ sub, aboutData }) => {
  let order = 0;
  return (
    <>
      {sub === "information" && (
        <Item
          order={1}
          id={"ai-01"}
          noDelete={true}
          currData={aboutData[sub]}
          tab={sub}
          about={true}
        />
      )}
      {sub === "skills" &&
        aboutData[sub].map((subItem) => {
          order++;
          return (
            <Item
              order={order}
              id={subItem.id}
              currData={aboutData[sub]}
              tab={sub}
              about={true}
            />
          );
        })}
      {sub === "timeline" &&
        aboutData[sub].map((subItem) => {
          order++;
          return (
            <Item
              order={order}
              id={subItem.id}
              currData={aboutData[sub]}
              tab={sub}
              about={true}
            />
          );
        })}
      {sub !== "information" && (
        <AddingBtn currData={aboutData[sub]} tab={sub} about={true} />
      )}
    </>
  );
};
export default AboutSub;
