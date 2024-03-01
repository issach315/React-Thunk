// Action types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Action creators
export const fetchDataRequest = () => {
    return {
        type: FETCH_DATA_REQUEST
    };
};

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    };
};

export const fetchDataFailure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    };
};

// Async action creator with Thunk
export const fetchData = () => {

    return async (dispatch) => {
        dispatch(fetchDataRequest()); // Dispatch action to indicate request started
        try {
            // Simulate fetching data from an API
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            dispatch(fetchDataSuccess(data)); // Dispatch action with fetched data
        } catch (error) {
            dispatch(fetchDataFailure(error.message)); // Dispatch action if an error occurs
        }
    };
};
