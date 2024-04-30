import React from 'react'
import data from "./utiles/student.js"
import { Button } from './components/ui/button.jsx'
import Form from "../src/component/Form.jsx"

function Student() {


    
  return (
    <div className='w-screen bg-slate-200 h-screen'>
        <div className='w-full flex justify-center items-center h-20'>
            <h1 className='font-bold text-2xl'>Student Information</h1>
        </div>
        <div className='p-2 ml-2 bg-slate-200'>
            <Form />
        </div>
    </div>
  )
}

export default Student