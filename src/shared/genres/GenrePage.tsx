import { useParams } from "react-router-dom";

const GenrePage = () => {
  const { id } = useParams();
  return (
    <>
      <p>GenrePage, id - {id}</p> 
    </>
  );
};

export default GenrePage;