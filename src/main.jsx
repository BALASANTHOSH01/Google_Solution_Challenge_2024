import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignUp from './Components/Auth/SignUp/SignUp.jsx'
import LogIn from './Components/Auth/LogIn/LogIn.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Components/About/About.jsx'
import CropPage from './Pages/CropPage/CropPage.jsx'
import EventPage from './Pages/EventPage/EventPage.jsx'
import MentorPage from './Pages/MentorPage/MentorPage.jsx'
import MentorProfile from './Pages/MentorPage/MentorProfile/MentorProfile.jsx'
import Chatbot from './Pages/Chatbot/Chatbot.jsx'


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
        element: <MentorPage />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/croppage/:cropid",
        element: <CropPage />
      },
      {
        path:"/event",
        element:<EventPage/>
      },
      {
        path:"/mentor",
        element:<MentorPage/>
      },
      {
        path:"/mentor/:mentorid",
        element:<MentorProfile/>
      },
      {
        path:"/bot",
        element:<Chatbot/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)
