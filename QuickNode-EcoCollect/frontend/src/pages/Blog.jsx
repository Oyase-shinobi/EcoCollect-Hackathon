import { useEffect } from 'react';
import Header from './../components/navigation/Header';
import { BlogSection1, TitleBar, BlogSection2, BlogPagination } from "./../components/blog/index";
import Newsletter from './../components/blog/newsletter';
import HomeFooter from './../components/homepage_components/HomeFooter';
import Footer from './../components/footer';


const Blog = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);
  
  return (
    <div className="bg-bg-color">
      <div className=' container mx-auto'>
        <Header />
      </div>
      <div className="w-full h-full  bg-bg-color md:py-[129px]">
        <BlogSection1 />
      </div>
      <TitleBar />
      <BlogSection2 />
      <BlogPagination />
      <Newsletter />
      <HomeFooter />
      <Footer />
    </div>
  );
}

export default Blog