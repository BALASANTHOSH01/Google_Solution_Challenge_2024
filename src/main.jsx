import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './Components/Auth/SignUp/SignUp.jsx'
import LogIn from './Components/Auth/LogIn/LogIn.jsx'
import Home from './Pages/Home/Home.jsx'
import UserProfile from './Components/UserProfile/UserProfile.jsx'
import About from './Components/About/About.jsx'
import CropPage from './Pages/CropPage/CropPage.jsx'


const router = createBrowserRouter([
  {
    path: '/AuthSignUp',
    element: <SignUp />
  },
  {
    path: "/AuthLogIn",
    element: <LogIn />
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/userprofile",
        element: <UserProfile />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/croppage/:cropid",
        element: <CropPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)
