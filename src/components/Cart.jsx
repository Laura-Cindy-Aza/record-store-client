import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../store/actions/cartAction";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.getItem("cartItems");
    // const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  }, []);

  const cartItems = useSelector((state) => state.cartReducer.cartItems);

  const renderCartItems = cartItems.map((record, index) => (
    <Container className='d-flex align-items-center flex-wrap'>
      <Card
        key={index}
        className='record-card d-flex align-items-center flex-nowrap'
        style={{
          minHeight: "15rem",
          width: "15rem",
        }}>
        <Card.Img
          style={{
            width: "3rem",
            margin: "0 auto",
            paddingTop: "1rem",
          }}
          variant='top'
          src={record.image_url}
        />
        <Card.Body>
          <Card.Title>{record.name}</Card.Title>

          <span
            style={{
              margin: "0 auto",
              fontSize: "30px",
              fontWeight: "600",
              textAlign: "center",
            }}>
            {record.price + "€"}
            {"/u. "}
          </span>
        </Card.Body>
        <div style={{ marginBottom: "1rem" }}>
          <div
            style={{
              margin: "0 auto",
            }}>
            <Button
              onClick={() => dispatch(increaseQuantity(record.id))}
              variant='light'>
              +
            </Button>
            <span>{record.quantity}X </span>
            <Button
              onClick={() => dispatch(decreaseQuantity(record.id))}
              variant='light'>
              -
            </Button>
          </div>
          <Button
            onClick={() => dispatch(removeFromCart(record.id))}
            variant='primary'>
            Remove from Cart
          </Button>
        </div>
      </Card>
    </Container>
  ));
  const totalPrice = cartItems
    .map((record) => parseFloat(record.price) * parseFloat(record.quantity))
    .reduce((acc, num) => acc + num, 0);
  return (
    <>
      <Container
        className='d-flex  justify-content-center bg-transparent flex-wrap'
        style={{ minHeight: "100vh" }}>
        <div className='w-100 cart-card' style={{ maxWidth: "900px" }}>
          <Link
            to='/recordlist'
            type='button'
            className='close'
            aria-label='Close'>
            <span aria-hidden='true'>&times;</span>
          </Link>
          <h1 style={{ marginTop: "1rem" }}>Your Shoping Cart</h1>
          <div>{renderCartItems} </div>
          <hr />
          <h3 style={{ textAlign: "center" }}>TOTAL</h3>
          <hr />
          <div className=' d-flex align-items-center flex-column m-4'>
            <h4 style={{ margin: "0 auto" }}>
              <strong>
                {totalPrice > 0 ? totalPrice : null}
                {"€"}
              </strong>
            </h4>
            <div>
              <Button className='m-3' variant='primary'>
                Check out!
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;