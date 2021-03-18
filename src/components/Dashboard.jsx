import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecordsAction } from '../store/actions/recordsAction';

function Dashboard() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecordsAction());
    }, []);

    const recordsData = useSelector((state) => {
        return state.recordsFromReducer.records
    });

    return (
        <div>
            <h1>Dashboard</h1>
            <h3>Here you can find all our records</h3>

            {/* Map through the records and display them */}
            {recordsData.map((record) =>
                <div className="box">
                    <img rc={record.cover} alt={record.title} className="card-image"></img>
                    <p className="content">{record.title}</p>
                    <p className="content">{record.artist}</p>
                    <p className="content">{record.year}</p>
                </div>)}
        </div>
    )
}

export default Dashboard
