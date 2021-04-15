import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecordsAction } from "../store/actions/recordsAction";
import Avatar from "react-avatar";
import Dashbar from "./Dashbar";
import { MdAdd } from "react-icons/md";
import { addToCart } from "../store/actions/cartAction";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecordsAction());
  }, []);

  const recordsData = useSelector((state) => {
    return state.recordsFromReducer.records;
  });

  // const handleAddRecord = (record) => {
  //   dispatch(addToCart(record));
  // };

  return (
    <>
      <Dashbar />

      <div className='container'>
        <h1 className='is-size-2'>Dashboard</h1>
        <h3>Here you can find all our records</h3>
        <div className='columns is-multiline mt-4 '>
          {/* Map through the records and display them */}
          {recordsData.map((record, i) => (
            <div key={i} className='card column is-one-fifth m-2'>
              <img
                src={record.cover}
                alt={record.title}
                className='card-image'
              />
              <div className='card-content columns '>
                <div className='column is-half'>
                  <p className='content is-size-4'>{record.artist}</p>
                  <p className='content is-size-5 '>{record.title}</p>
                  <p className='content'>{record.year.slice(0, 4)}</p>
                </div>
              </div>
              <div className='is-flex is-centered'>
                <p className='content has-text-info'>Price: {record.price} €</p>
                <button
                  className='button is-light '
                  onClick={() => dispatch(addToCart(record))}>
                  <MdAdd />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
