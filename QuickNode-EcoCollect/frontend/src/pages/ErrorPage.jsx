import Footer from "../components/footer"
import HomeFooter from "../components/homepage_components/HomeFooter"
import Header from "../components/navigation/Header"

const ErrorPage = () => {
  return (
    <div className="container mx-auto">
    <Header/>
    <div className=" w-[90%] md:w-[500px] mx-auto p-4 mt-32 mb-12 border-[#ddd] border shadow-light font-montserrat">
        <h1 className="text-red-700 text-center font-[700] text-2rem my-8 p-4 ">404 Error!</h1>
        <p className="text-center text-primary40 mb-12 py-4">Page not found</p>
    </div>
    <HomeFooter/>
    <Footer/>
    </div>
    
  )
}

export default ErrorPage