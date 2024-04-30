import React from 'react'
import HomePage from './HomePage'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom'
import Student from './Student'
import Teacher from './Teacher'
import { FirebaseProvider } from './firebase/FirebaseContext'

function App() {
  return (
    <FirebaseProvider>
      <Router>
        <Routes>
          <Route path='/' index element={ <HomePage />}/>
          <Route path='/Student' element={ <Student />}/>
          <Route path='/Teacher' element={ <Teacher />}/>
        </Routes>
      </Router>
    </FirebaseProvider>

  )
}

export default App