import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Login({actor}) {

    const [ name, setName ] = useState('');
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const pushTo = useNavigate();

    const handleSubmit = () => {
        console.log("Clicked!")
        if (username && password) {
            console.log(username, password)
            pushTo(`/${name}`);
            
        }
    }

    useEffect(() => {
        if (actor) {
            setName(() => "Student");
        } else {
            setName(() => "Teacher");

        }
    }, [])
  return (
    <div className='flex justify-center items-center w-screen h-screen'>
        <div className='w-1/2'>
        <h1 className='mb-2 text-2xl font-semibold'>Log in as {name}</h1>
        <div className='w-1/2'>
            <input className='m-1 w-full border-black border rounded-md p-1' value={username} onChange={e => setUsername(e.target.value)}  type="text" placeholder='username' />
            <br />
            <input className='m-1 mb-2 w-full border-black border rounded-md p-1' value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password' />
            <br />
            <Button className='btn font-semibold bg-blue-500 text-white' onClick={handleSubmit}>Log in</Button>
        </div>
        </div>
    </div>
  )
}

export default Login