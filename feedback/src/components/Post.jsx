import { useParams } from "react-router-dom";

function Post() {
  let params = useParams();
  return (
    <div style={{ color: "red" }}>
      <p>Post id:{params.id}</p>
    </div>
  );
}

export default Post;
