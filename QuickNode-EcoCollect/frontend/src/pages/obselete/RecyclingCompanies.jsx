// import React from 'react'
import { PRCData } from '../../data/PRCdata'
import { Link } from 'react-router-dom'



const RecyclingCompanies = () => {

  return <>
    {/*   {/* card components */} 
    <div className='mt-32 max-w-[600px] flex flex-row flex-wrap justify-center mx-auto'>
        {
           PRCData.map((item, index) => 
            <div className='bg-primary40 p-4 w-64 text-white m-4 rounded-[12px]' key={index}>
                {/* card title  */}
                <h2 className='font-bold my-4'>{item.title}</h2>

                {/* if list: list item */}
                {
                    item.list.length > 1 ? 
                         item.list.map((listItem, listIndex) =>
                            <li key={listIndex} className='text-[0.8rem] my-2'>{listItem}</li>
                        )
                : " "
                }

                {/* if description: card description */}
                {
                    item.descr ? <p className='text-[0.8rem] mb-4'>{item.descr}</p> : ""
                }
                {/* if button: card button */}
                {
                    item.buttonText ? <Link to={`${item.linkto}`} className='flex mx-auto justify-center items-center w-full rounded-[28px] p-2 hover:tracking-wide ease-in-out duration-300 text-center bg-white text-primary40'>{item.buttonText}</Link> : ""
                }
            </div>
           )
        }
    </div>

    {/* advertise */}
    <div className='w-[80%] mx-auto mt-12 border border-primary40 p-4 rounded-[20px]'>
        <h2 className='font-bold mb-4 '>Advertise your Plastic Recycling Company with us!</h2>
        <p className='text-[0.8rem]'>Are you a plastic recycling company dedicated to making a positive impact on our environment? 
            We invite you to join our mission by advertising your organization on our platform, 
            a leading plastic collection website. By partnering with us, you can reach a wide audience 
            of environmentally conscious individuals eager to contribute to the cause
            Our platform does not only have an extensive outreach, but also allows you to target 
            your advertisement to specific regions and demographics. We will help you stand out from 
            the competition and improve your brand visibility. By aligning your brand with our reputable 
            plastic collection website, you`&aposll benefit from the trust and credibility we have built within 
            the recycling community.

            We also fosters collaboration among recycling organizations, and help you`&aposll actively contribute 
            to the global mission of reducing plastic waste and protecting our environment. So, what are you 
            waiting for...
        </p>
    </div>
  </>
  
}

export default RecyclingCompanies
