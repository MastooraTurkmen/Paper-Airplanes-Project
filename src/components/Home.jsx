import { Outlet } from "react-router-dom";
import { Navbar } from './index';

const Home = () => {
  return (
      <div className="text-3xl text-center">
          <Navbar />
          <Outlet />
        </div>
  )
}

export default Home;