import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import About from './Components/About/about';
import Blogs from './Components/Blogs/blogs';
import Contact from './Components/Contacts/contact';
import Skills from './Components/Skills/Skills';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path: "/about",
    element: <About></About>
  },
  {
    path: "/skills",
    element: <Skills></Skills>
  },
  {
    path: "/blogs",
    element: <Blogs></Blogs>
  },
  {
    path: "/contact",
    element: <Contact></Contact>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
