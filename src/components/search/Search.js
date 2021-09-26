import React, { useState } from "react";

// const mapStateToProps = (state) => {
//     return {
//     search: state.searchReducer.searchData
//     }
// }

function Search(props) {

     // const {onChange} = props;
    //  const [schools, setSchools] = useState([])
     // const {onSearch} = schools;



     
//   state for search bar - capture input from user match it to api data
     const [searchParam, setSearchParam] = useState(' ')
 
//  to capture button input
     const handleInput = (e) => {
         setSearchParam(e.target.value);
     };

    //  const  handleSubmit =(e) => {
    //     e.preventDefault();
    //     console.log(searchParam)
    //  }


 
   
     
 
 
//  api function call to retrieve school data from api based on zip-code returns data to SchoolData state
     const schoolSearch = (searchParam) =>{
         console.log(searchParam)
        // console.log(`https://api.schooldigger.com/v1.2/schools?st=CA&zip=${searchParam}&appID=20b17e1b&appKey=16a4cbfd56c81912a829fed9abb8bd56`)
         fetch(`https://api.schooldigger.com/v1.2/schools?st=CA&zip=${searchParam}&appID=20b17e1b&appKey=16a4cbfd56c81912a829fed9abb8bd56`)
             .then(response => response.json())
             .then(school => props.setSchoolData(school.schoolList.slice(5)))
            //  console.log(schoolList)
 
     }
     
//   render input which is located in the Navar component
     return (
         <div className = " container search-school">
                 {/* <img src="" alt="" /> */}
             <div className="search">
              <input   onChange={handleInput} value={searchParam} id="search"  className='input' type="text"  placeholder="Enter Zipcode" />
              <button onClick={() => schoolSearch(searchParam)}><i class="fa fa-search"></i></button>
              </div>
             {/* { schools ? schools.map((item) => {
                 return (
                     <DisplayList key={item.schoolid} skool={item}  />
                 )
             }): null}  */}
            
 
             
                
                   
         </div>
     )
 }

export default Search
