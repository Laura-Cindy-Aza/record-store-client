import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecordsAction } from "../store/actions/recordsAction";
import { MdAdd } from "react-icons/md";
import { addToCart } from "../store/actions/cartAction";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecordsAction());
  }, [dispatch]);

  const recordsData = useSelector((state) => {
    return state.records.records;
  });

  // const handleAddRecord = (record) => {
  //   dispatch(addToCart(record));
  // };

  return (
    <>
      <div className='container'>
        <h1 className='title is-2'>Dashboard</h1>
        <h3 className='subtitle is-4'>Here you can find all our records</h3>
        <div className='columns is-multiline mt-4 '>
          {/* Map through the records and display them */}
          {recordsData.map((record, i) => (
            <div key={i} className='card column is-one-fifth  is-mobile m-4'>
              <div className='card-image'>
                <figure className='image'>
                  <img src={record.cover} alt='cover' />
                </figure>
              </div>

              <div className='card-content '>
                <div className='column '>
                  <p className='content title is-4 '>{record.artist} </p>{" "}
                  <span></span>
                  <p className='content subtitle is-5'>{record.title}</p>
                  <p className='content'>{record.year.slice(0, 4)}</p>
                  <p className='content has-text-info price-info'>
                    Price: {record.price} €
                  </p>
                </div>
              </div>

              <button
                className='button  add-button is-primary '
                onClick={() => dispatch(addToCart(record))}>
                <MdAdd />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
