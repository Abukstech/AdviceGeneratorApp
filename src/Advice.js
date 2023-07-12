import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "./Advice.css";


const Advice = () => {

  const [advice,setAdvice] = useState("");


  const fetchAdvice =  () => {
    const url =   ("https://api.adviceslip.com/advice");
    axios.get(url).then((response) =>{
      setAdvice(response.data.slip)
    })



  }

  const generateAdvice = () => {

    fetchAdvice();
  }
  
  useEffect(function(){
    fetchAdvice();
  },[])



  return (
    <div className='advice-generator'>
        <h6  className='advice-generatator-title'>ADVICE # {advice.id}</h6> 
        <p className='advice-generator_advice'><blockquote>"{advice.advice}"</blockquote></p>
        <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg" className='advice-generator_divider'><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" onClick={generateAdvice} className='advice-generator_button'><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
  </div>
  )
}

export default Advice