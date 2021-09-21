// import axios from 'axios'

// export const fetchSchools = (searchParam) => dispatch => {

//     dispatch({ type: start })
  
//     axios.get(`https://api.schooldigger.com/v1.2/schools?st=CA&zip=${searchParam}&appID=20b17e1b&appKey=16a4cbfd56c81912a829fed9abb8bd56`)
//       .then(response => dispatch({
//         payload: response.data.results,
//         type: success
//       }))
//       .catch(error => dispatch({
//         payload: error.message,
//         type:   fail
//       }))
//   }