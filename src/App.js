import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import axios from "axios"
import CandidateCard from "./components/CandidateCard";
// import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const[page,setPage]=useState(1)
  const[salary,setSalary]=useState("asc")

  useEffect(()=>{
    getData({
      page,salary
    })
    

  },[page,salary])

  const getData = async ({page,salary})=>{
    axios("https://json-server-mocker-masai.herokuapp.com/candidates",{
      method:"GET",
      params:{
        _page:page,
        _limit:5,
        _sort:"salary",
        _order:salary
        
      }
    }).then(res=>{setData(res.data)
      console.log(res.data)})
  }

  function handleSalary(salary){
    if(salary=="ASC"){
      setSalary("DESC")
    }
    else{
      setSalary("ASC")
    }
   
  }
  

 
  return (
    <div className="App">
      <div>
     
        {
          salary=="ASC" ? <Button id="SORT_BUTTON" title={`Sort by Descending Salary`}  onClick={()=>handleSalary(salary)} />  : <Button id="SORT_BUTTON" title={`Sort by  Ascending Salary`}  onClick={()=>handleSalary(salary)} />}
        <Button title="PREV" id="PREV" disabled={page===1}   onClick={()=>setPage(page-1)}/>
        <Button id="NEXT" title="NEXT" onClick={()=>setPage(page+1)}/>
      </div>
      <div>
      {data.map((item) => 
        <CandidateCard  key={item.id} {...item}/>
      )}
      </div>
    </div>
  );
}