import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Partners, About, Blog, ErrorPage, Join, Register, Program } from "./pages";
import { HeroSection, Home } from "./components";


// Create React Router and stored Pages
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
     {
        index:true,
        element: <HeroSection />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'blog',
        element: <Blog />,
      },
      {
        path: 'partners',
        element: <Partners />,
      },
      {
        path: 'join',
        element: <Join />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'programs',
        element: <Program />,
      }
      ]
    }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
