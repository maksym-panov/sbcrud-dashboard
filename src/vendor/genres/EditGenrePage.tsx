import { useParams } from "react-router-dom";

const EditGenrePage = () => {
  const { id } = useParams();
  return (
    <>
      <p>EditGenrePage, id - {id}</p> 
    </>
  );
};

export default EditGenrePage;