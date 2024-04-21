import blogData from "../Data";
import Card from "../Components/BlogCard/Card";

function DSComp() {
  return (
    <>
      {blogData
        .filter((data) => data.tag === "DS")
        .map((data) => (
          <Card key={data.id} {...data} />
        ))}
    </>
  );
}

export default DSComp;
