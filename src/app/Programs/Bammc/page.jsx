"use client"
import React,{useState,useEffect} from "react";
import PageHeader from "../../components/PageHead/page";
import Footer from '../../components/footer/page';
import axios from "axios";
import SubjectTable from "../../components/SubjectTable/page"
export default function page() {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
   const fetchData = async () => {
    const response = await axios.get("/api/CourseDetails?subject=BBA Honors");
    if(response.status === 200){
      setFetchedData(response.data);
      setIsLoading(false)
      return response.data
    }else{
      console.log("Error occured")
    }
   }
   useEffect(() => {
     fetchData()
   }, [])
   
 

  return (
    <div>
      <PageHeader tab={"Programs"} nestedTab={"B.A.M.M.C"} />
      {isLoading ? (
        <p>LOADING.....</p>
      ):(
      <div className="content p-2">
      <SubjectTable subject={fetchedData.courseName} data={fetchedData}/> 
      </div>
      ) }
    <Footer/>
    </div>
  );
}
