import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Login from './views/Login'
import SignUp from './views/SignUp'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
