"use client"
import React,{useState,useEffect} from "react";
import PageHeader from "../../components/PageHead/page";
import Footer from '../../components/footer/page';
import axios from "axios";
import Loader from "../../components/Loader/page"
import SubjectTable from "../../components/SubjectTable/SubjectTable"
export default function page({params}) {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [adminAccess, setadminAccess] = useState(false);
   const fetchData = async () => {
    const response = await axios.get(`/api/CourseDetails?subject=${params.programName}`);
    if(response.status === 200){
      const admin = localStorage.getItem("access");
      setadminAccess(admin === "admin" ? true : false)
      setFetchedData(response.data);
      console.log(response.data)
      setIsLoading(false)
      return response.data
    }else if(response.status === 404){
      console.log("Error occured")
    }
   }
   useEffect(async() => {
      await fetchData();
   }, [])
   
 

  return (
    <div>
      <PageHeader tab={"Programs"} nestedTab={params.programName} />
      {isLoading ? (
        <Loader/>
      ):(
      <div className="content p-2">
      <SubjectTable isAdmin={adminAccess}  subject={fetchedData.courseName} data={fetchedData}/> 
      </div>
      ) }
    <Footer/>
    </div>
  );
}
