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
import Chatbot from './Pages/Chatbot/Chatbot.jsx'
import EventProfile from './Pages/EventPage/EventProfile/EventProfile.jsx'
import Message from './Pages/Message/Message.jsx'
import PostPage from './Pages/PostPage/PostPage.jsx'
import Market from './Pages/Market/Market.jsx'
import Training from './Pages/Training/Training.jsx'
import PeoplePage from './Pages/PeoplePage/PeoplePage.jsx'
import MessagePanel from './Components/MessageComponents/MessagePanel/MessagePanel.jsx'
import PeopleProfile from './Components/PeopleComponents/PeopleProfile/PeopleProfile.jsx'
import MobileMessage from './Pages/Message/MobileMessage/MobileMessage.jsx'
import AddItem from './Components/MarketComponents/AddItem/AddItem.jsx'
import MarketCart from './Components/MarketComponents/MarketCart/MarketCart.jsx'
import MarketProducts from './Components/MarketComponents/MarketProducts/MarketProducts.jsx'


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
        path: "/event",
        element: <EventPage />
      },
      {
        path: "/event/:eventid",
        element: <EventProfile />
      },
      {
        path: "/bot",
        element: <Chatbot />
      },
      {
        path: "/message",
        element: <Message />,
        children: [
          {
            path: "/message/:messageid",
            element: <MessagePanel />
          }
        ]
      },
      {
        path: "/message/mobile/:mobilemessageid",
        element: <MobileMessage />
      },
      {
        path: "/post",
        element: <PostPage />
      },
      {
        path: "/market",
        element: <Market />,
        children:[
          {
            path:"/market/additem",
            element:<AddItem/>
          },
          {
            path:"/market/cart",
            element:<MarketCart/>
          },
          {
            path:"/market/buy",
            element:<MarketProducts/>
          }
        ]
      },
      {
        path: "/training",
        element: <Training />
      },
      {
        path: "/people",
        element: <PeoplePage />
      },
      {
        path:"/people/:peopleid",
        element:<PeopleProfile/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
