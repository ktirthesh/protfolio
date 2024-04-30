import { useRef } from 'react';
import './App.css';
import Main from './Pages/Main';
import Profile from './Pages/profile';
import Aboout from './Pages/about/about';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const background_color = "#F3F3F3"


const router = createBrowserRouter([
  { path: "/", element: <Profile background_color ={background_color} /> },
  { path: "*", element: <div>Not found</div> },
  { path: "/about", element: <Aboout /> },
  // { path: "/resume", element: <App /> },
  // { path: "/projects", element: <App /> },
  // { path: "/contacts", element: <App /> },



]);



function App() {
  return (
    <Main background_color={background_color}>
      <RouterProvider router={router} />
    </Main>
  );
}

export default App;
