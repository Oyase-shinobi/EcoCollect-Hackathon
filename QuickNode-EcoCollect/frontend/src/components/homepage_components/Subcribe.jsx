import emailBlackIcon from '../../assets/emailBlackIcon.svg'

const Subscribe = () => {
    return ( 
        <section className='container mx-auto py-10 bg-subscribeBg font-montserrat'>
            <h1 className='text-[#000000] text-[1.4rem] font-openSans text-center'>Join Our Mailing List for Updates and Discounts!</h1>
            <div className="flex flex-col mx-auto justify-center items-center my-12 md:flex-row">
                <label htmlFor="subscribe" className='rounded-md bg-white p-4  flex flex-row justify-center mr-8'>
                    <img src={emailBlackIcon} alt="email-icon" className='mr-4' />
                    <input type="text" id="subscribe" placeholder='Enter your email' className='outline-none'/>
                </label>
                <button className="px-8 py-4 bg-[#BA1B1B] text-white rounded-md mt-4 hover:tracking-wider transition-all ease-in-out duration-500 md:mt-0">Subscribe</button>
            </div>
            <p className='text-[rgba(0, 0, 0, 0.76)] text-center'>
                By subscribing, you'll receive regular updates on innovative waste recycling and 
                management solutions, industry news, and helpful resources straight to your inbox. 
                Be first to know about our special promotions and discounts on eco-friendly 
                products and services.
            </p>
        </section>
     );
}
 
export default Subscribe;