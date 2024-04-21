import Card from "../Components/BlogCard/Card";
import blogData from "../Data";

function CSComp() {
  return (
    <>
      {blogData
        .filter((data) => data.tag === "CS")
        .map((data) => (
          <Card key={data.id} {...data} />
        ))}
    </>
  );
}

export default CSComp;
