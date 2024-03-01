import { combineReducers } from 'redux';
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actions';

// Initial state for data
const initialDataState = {
    loading: false,
    data: null,
    error: null
};

// Data reducer
const dataReducer = (state = initialDataState, action) => {
    switch (action.type) {
        
        case FETCH_DATA_REQUEST:
            return { ...state, 
                    loading: true 
                };

        case FETCH_DATA_SUCCESS:
            return { ...state,
                    loading: false, 
                    data: action.payload,
                    error: null 
                };

        case FETCH_DATA_FAILURE:
            return { ...state, 
                    loading: false, 
                    error: action.payload 
                };

        default:
            return state;
    }
};

// Combine reducers
const rootReducer = combineReducers({
    data: dataReducer
});

export default rootReducer;
