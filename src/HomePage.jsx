import React, { useEffect, useState } from 'react'
import Login from './component/Login';
import { Button } from './components/ui/button';

function HomePage() {
    const [ isStudent, setIsStudent ] = useState(null);
    const [ isTeacher, setIsTeacher ] = useState(null);
    const [ result, setResult ] = useState(false);

    

    const handleChecker = (data) => {
        if (data) {
            setIsStudent(() => true);
            setIsTeacher(() => false);
        } else {
            setIsTeacher(() => true);
            setIsStudent(() => false);
        }
        setResult(() => true);
    }


  return (
    <div className='flex bg-[url("./assets/background.jpg")] object-cover bg-top justify-center bg-slate-200 items-center h-screen w-screen'>

        {
            !result &&
            <div className='flex gap-2'>
                <Button onClick={() => handleChecker(true)}>Student</Button>
                <Button onClick={() => handleChecker(false)}>Teacher</Button>
            </div>
        }



        {
            isStudent && <> 
                <Login actor={true} />
             </>
        }
        {
            isTeacher && <> 
                <Login actor={false} />
             </>
        }
         

    </div>
  )
}

export default HomePage