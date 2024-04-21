import Card from "../Components/BlogCard/Card";
import blogData from "../Data";

function CCComp() {
  return (
    <>
      {blogData
        .filter((data) => data.tag === "CC")
        .map((data) => (
          <Card key={data.id} {...data} />
        ))}
    </>
  );
}

export default CCComp;
