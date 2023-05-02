import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>list 상세 페이지</h1>
      <h2>{id}</h2>
    </div>
  );
};

export default Detail;
