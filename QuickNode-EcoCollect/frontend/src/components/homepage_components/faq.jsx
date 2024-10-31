import faqImage from '../../assets/faq.svg'
import { Link } from 'react-router-dom'
import arrowRight from '../../assets/arrowRight.svg'

const faqData = [
    {
        'title': "What are the rewards for earning Ecocollect?"
    },
    {
        'title': "Is Ecocollect a secure and reliable platform?"
    },
    {
        'title': "How does Ecocollect work?"
    }
]

const Faq = () => {
  return <div className='container mx-auto bg-[#F2FAF7] font-montserrat'>
    {/* titles */}
    <h1 className='text-[40px] text-center py-2 font-[900] '>FAQ</h1>
    <h3 className='text-[16px] text-center font-[900]'>You’ve Got Questions? We’ve Got Answers</h3>

    {/* buttons and image */}
    <div className='flex flex-col justify-between mb-0 md:flex-row'>
        <div className=' mt-20'>
            {
                faqData.map((item, index) => 
                <Link key={index} className='bg-primary40 flex flex-row justify-between mb-4 text-white p-8 '>
                    <h3 className='ml-10'>{item.title}</h3> 
                    <img src={arrowRight} alt="arrow right" className='ml-4'/>
                </Link>
                )
            }
            <p className=' text-center font-montserrat font-[900]'>
                Can't find your answers? 
                <Link to={'/contact-us'} className='text-[#005232] hover:cursor-pointer'> Contact Us</Link>
            </p> 
        </div>

        {/* image */}
        <img src={faqImage} alt="faq image" 
        className='w-[578px] h-[671px] object-contain -mb-16 -mr-8'/>
    </div>
  </div>
  
}

export default Faq