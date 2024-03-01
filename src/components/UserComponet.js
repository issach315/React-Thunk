import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions'; // Import async action creator

function App() {
    const data = useSelector(state => state.data);
    const dispatch = useDispatch();

    const handleFetchData = () => {
        dispatch(fetchData()); // Dispatch async action to fetch data
    };

    return (
        <div>
            {data.loading ? (
                <p>Loading...</p>
            ) : ""}

            {data.error ? (
                <p>Error: {data.error}</p>
            ) : data.data ? (
                <div>
                    <h1>Data</h1>
                    {
                        data.data.map(userItem => {
                            return <p key={userItem.id}>{userItem.name}</p>
                        })
                    }
                </div>
            ) : (
                <button onClick={handleFetchData}>Fetch Data</button>
            )}
        </div>
    );
}

export default App;
