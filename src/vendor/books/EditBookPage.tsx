import { useParams } from "react-router-dom";

const EditBookPage = () => {
  const { id } = useParams();
  return (
    <>
      <p>EditPage, id - {id}</p>
    </>
  );
};

export default EditBookPage;