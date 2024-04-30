import React, { useEffect, useState } from 'react'
import { useFirebase } from './firebase/FirebaseContext'
import StudentCard from './component/StudentCard';

function Teacher() {
  const firebase = useFirebase();
  const [show, setShow] = useState(false);
  const [ students, setStudents ] = useState([]);
  useEffect( () => {
   firebase.getStudentInfo().then((e) => {
    setStudents(() => e)
   })
  
  }, []);


  return (
    <div className='w-screen bg-slate-200 h-screen'>
        <div className="w-full flex justify-center mb-2 items-center h-20">
            <h1 className='font-bold text-2xl'>Student Data</h1>
        </div>


        {
          students.map((form, i) => (
            (!show ?
              <>
              <div className='flex justify-between items-center w-full bg-slate-500 p-2 m-1'  key={i+1}>
              <h1>{form.Name}</h1>
              
              <h1 className='' onClick={() => setShow(true)}>More</h1>
              </div>
              </>
                :
                <>
                {show && <StudentCard form={form} />}
                </>
            )
          ))
        }
      
    </div>
  )
}

export default Teacher