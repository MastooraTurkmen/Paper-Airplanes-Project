import { Link, useRouteError } from "react-router-dom"
import PageNotFound from '../../public/images/Page_Not_Found.svg'


const ErrorPage = () => {
  const error = useRouteError()

  if (error.status === 404) {
    return (
      <div className="text-center items-center h-[100vh]">
        <img src={PageNotFound} className="items-center m-auto p-5 pt-20 md:pt-10" alt="page not found" />
        <h3 className="min:text-2xl text-white">Ohh! page not found</h3>
        <p className="text-xs md:text-base p-2">we can't seem to find the page you are looking for</p>
        <Link to='/' className="btn mt-5 bg-[#E87900] text-white">Back Home</Link>
      </div>
    )
  }
  console.log(error);

  return (
    <div className="text-center grid items-center min-h-[100vh]">
      <h1 className="text-3xl text-white">Somthing went Wrong</h1>
    </div>
  )
}

export default ErrorPage