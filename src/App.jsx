import React from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Body />,
            <Footer />
          </>
        )
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      }

    ]
  }
]);

function App() {
  return (
    <RouterProvider router={Routes} />
  )
}

export default App