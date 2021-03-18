import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecordsAction } from "../store/actions/recordsAction";

function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecordsAction());
  }, []);

  const recordsData = useSelector((state) => {
    return state.recordsFromReducer.records;
  });

  return (
    <div className='container'>
      <h1 className='is-size-2'>Dashboard</h1>
      <h3>Here you can find all our records</h3>
      <div className='columns is-multiline mt-4 '>
        {/* Map through the records and display them */}
        {recordsData.map((record) => (
          <div className='card column is-one-fifth m-2'>
            <img src={record.cover} alt={record.title} className='card-image' />
            <div className='card-content'>
              <p className='content'>{record.title}</p>
              <p className='content'>{record.artist}</p>
              <p className='content'>{record.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
