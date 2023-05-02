import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter,RouterProvider, Navigate} from "react-router-dom";

import Aluno from './routes/Aluno.jsx';
import Professor from './routes/Professor.jsx';
import ErrorPage from './routes/ErrorPage.jsx'
import ContactDetails from './routes/AlunoDetails.jsx';
import Login from './routes/Login.jsx';
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "aluno",
        element: <Aluno/>,
      },
      {
        path: "professor",
        element: <Professor/>,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path: "/aluno/:id",
        element: <ContactDetails/>,
      },
      {
        path: "home",
        element: <Home/>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
