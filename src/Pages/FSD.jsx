import blogData from "../Data";
import Card from "../Components/BlogCard/Card";

function FSDcomp() {
  return (
    <>
      {blogData
        .filter((data) => data.tag === "FSD")
        .map((data) => (
          <Card key={data.id} {...data} />
        ))}
    </>
  );
}

export default FSDcomp;
