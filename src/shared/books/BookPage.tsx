import { useParams } from "react-router-dom";

const BookPage = () => {
  const { id } = useParams();
  return (
    <>
      <p>BookPage, id - {id}</p>
    </>
  );
};

export default BookPage;