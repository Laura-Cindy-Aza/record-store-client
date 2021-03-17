import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRecordsAction } from '../store/actions/recordsAction';

function Dashboard() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRecordsAction())
    }, []);

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard
