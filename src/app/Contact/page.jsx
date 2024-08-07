"use client";
import axios from "axios";
import React, { useState,useEffect } from "react";

export default function Conact() {
  const [data, setData] = useState([]);
  const [formattedData, setFormattedData] = useState([])
  async function getData() {
    await axios.get("/api/Test").then((res)=>{setData(res.data[0]);console.log(res.data[0])})
  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
  <div className="container">
    
  </div>
  );
}
