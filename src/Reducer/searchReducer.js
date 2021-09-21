// import {start, success, fail} from './actions'


// const initialState = {
//     searchData: [],
//     error: "",
//     isFetching: false
//  }


// function searchReducer(state = initialState, action) {
//     switch(action.type) {
//         case start:
// 			return { ...state, isFetching: true };

// 		case success:
// 			return { ...state, searchData: action.payload, isFetching: false };

// 		case fail:
// 			return { ...state, error: action.payload, isFetching: false };

// 		default:
// 			return state;
//     }
// }

// export  default searchReducer;