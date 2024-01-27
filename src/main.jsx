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
import UserProfile from './Components/UserProfile/UserProfile.jsx'
import ProductProfile from './Components/MarketComponents/ProductProfile/ProductProfile.jsx';
import NewsContent from './Components/NewsComponents/NewsContent/NewsContent.jsx'
import TrainingPage from "./Pages/Training/TrainingPage/TrainingPage.jsx";

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
      },
      {
        path: "/bot",
        element: <Chatbot />
      },
      {
        path:"/news",
        element:<NewsContent/>,
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
            element:<AddItem/>,
          },
          {
            path:"/market/cart",
            element:<MarketCart/>,
          },
          {
            path:"/market/buy",
            element:<MarketProducts/>,
          },
          {
            path:"/market/buy/:productid",
            element:<ProductProfile/>,
          }
        ]
      },
      {
        path: "/training",
        element: <Training />,
        children:[
          {
            path: "/training/event",
            element: <EventPage />
          },
          {
            path: "/training/event/:eventid",
            element: <EventProfile />
          },
          {
            path:"/training/training",
            element:<TrainingPage/>
          }
        ]
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
