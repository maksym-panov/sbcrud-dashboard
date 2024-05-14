import { useParams } from "react-router-dom";

const OrderPage = () => {
  const { id } = useParams();
  return (
    <>
      <p>OrderPage, id - {id}</p>
    </>
  );
};

export default OrderPage;