import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

const Home = () => {
    useEffect(() => {
        Aos.init({
          // Optional settings:
          duration: 1000, // Animation duration in milliseconds
          once: true, // Whether animation should happen only once - while scrolling down
          mirror: false, // Whether elements should animate out while scrolling past them
        });
    }, []);

    const [selectedValue, setSelectedValue] = useState("")

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
        
    }


  return (
    <div className=''>
        <div className='bg-primary-100 h-[100rem]'>
            <div className="pt-10">
                <marquee behavior="" direction="" className="flex">
                    <span className=' spa ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                </marquee>

                <div className='pt-12'>
                    <h3 className='text-center text-6xl font-semibold text-gray-400' data-aos="fade">
                        New Collections
                    </h3>
                    <p className=' pt-5 text-center text-gray-400 text-xl font-light' data-aos="fade">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis libero maiores ducimus dolores consequatur voluptatum repudiandae voluptatem vitae quis iusto?
                    </p>        

                    <div className='md:flex md:gap10 pt-14 pl-10' data-aos="fade-up">
                        <div className=''>
                            <img src="/src/img/demo.jpg" alt="" className='border rounded w-[15rem] h-[18rem]' />
                            
                            <div className='pt-5 '>
                                <h4>Lorem ipsum dolor</h4>
                                <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda.</p>
                                <a href="" className='underline'>Discover</a>
                            </div>
                            
                        </div>

                        <div className=''>
                            <img src="/src/img/demo.jpg" alt="" className='border rounded w-[15rem] h-[18rem]'/>
                            
                            <div className='pt-5'>
                                <h4>Lorem ipsum dolor</h4>
                                <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda.</p>
                                <a href="" className='underline'>Discover</a>
                            </div>   
                        </div>

                        <div className=''>
                            <img src="/src/img/demo.jpg" alt="" className='border rounded w-[15rem] h-[18rem]'/>
                            
                            <div className='pt-5'>
                                <h4>Lorem ipsum dolor</h4>
                                <p className='pt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, assumenda.</p>
                                <a href="" className='underline'>Discover</a>
                            </div>    
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-center min-h-screen pt-72" data-aos="fade-up">
                    <div>
                        <video src="" className="border rounded w-[15rem] h-[18rem]"></video>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="target" smooth={true} duration={700}>
                            <button className="rounded p-2 text-lg text-gray-100 bg-red-700 active:bg-red-800 duration-200">
                                Yes! I want to order now
                            </button>
                        </Link> 
                        <p className="mt-2">Work smart</p>
                    </div>
                </div>

            </div>
        </div>

        <div className='bg-primary-200 min-h-dvh'>
            
            <div className="flex items-center justify-center min-h-screen" data-aos="fade-up">
                <div className="pt-44 w-[50rem] border">
                    <div className="mt-10">
                        <img src="/src/img/demo.jpg" alt="bigimg" />
                    </div>
                </div>
            </div>

            <div className='text-left pl-24 text-gray-300' data-aos="slide-right">
                <h4 className='pl-10 text-xl '>Reasons why you will love this product</h4>
                <p className='pt-5'>1. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p>2. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>


            <div className='flex flex-col justify-center items-center min-h-screen pt-40' data-aos="fade-up">
                <div>
                    <img src="/src/img/demo.jpg" alt="bigimg" className='border rounded w-[15rem] h-[18rem]' />
                </div>
                <Link to='targetform' smooth={true} duration={800}>
                    <button className='rounded p-2 mt-5 text-lg text-gray-100 bg-red-700  active:bg-red-800 duration-200'>Yes, I want to order now</button>
                </Link>
            </div>

            <div className='border-2 m-20' data-aos="fade-up">
                <div className='h-[6rem] bg-yellow-800'>
                    <h6 className='text-center p-5 text-4xl font-bold text-gray-300'>Massive Discount Today</h6>
                </div>

                <div className='h-[8rem] bg-yellow-600 '>
                    <h3 className='text-center p-4 font-semibold text-2xl text-gray-300'>Free Delivery</h3>
                    <h3 className='text-center font-semibold text-2xl text-gray-300'>Payment on Delivery</h3>
                </div>
                
                <div className='text-center border-b h-[15rem] pt-6'>
                    <h4 className='text-3xl font-bold underline'>1 Set</h4>
                    <h4 className='font-semilight text-2xl'>Original Price <span className='text-red-700 font-bold text-4xl ml-6'>00000</span></h4>
                    <h4 className='font-bold text-3xl'>✅Discount Price <span className='text-green-400 font-bold text-4xl ml-6'>00000</span></h4>
                    <p className='text-2xl font-light'>(free delivery)</p>
                    <p className='text-2xl font-light'>(payment on delivery)</p>
                </div>

                <div className='text-center border-b h-[15rem] pt-10'>
                    <h4 className='text-3xl font-bold underline'>2 Set</h4>
                    <h4 className='font-semilight text-2xl'>Original Price <span className='text-red-700 font-bold text-4xl ml-6'>00000</span></h4>
                    <h4 className='font-bold text-3xl'>✅Discount Price <span className='text-green-400 font-bold text-4xl ml-6'>00000</span></h4>
                    <p className='text-2xl font-light'>free delivery</p>
                    <p className='text-2xl font-light'>payment on delivery</p>
                </div>

                <div className='text-center p-10'>
                    <Link to='target' smooth={true} duration={700}>
                        <button className='rounded px-7 py-3 text-lg text-gray-100 bg-green-800 active:bg-red-800 duration-200' >YES, I WANT THIS NOW</button>
                    </Link>
                    <p className='text-red-700 text-2xl font-bold pt-2'>This Discount Ends Today…</p>
                </div>
            </div>

            <div id='target' className='min-h-[70rem] shadow-2xl bg-yellow-700 m-52 border-2 border-yellow-600 rounded flex-row justify-center'>
                <div className='text-center bg-yellow-600 '>
                    <h4 className='text-red-700 text-2xl font-bold pt-4'>HURRY DISCOUNT EXPIRES TODAY</h4>
                    <p className='text-2xl font-bold text-gray-400 pt-2'>Fill Order Form Below</p>
                    <p className='text-center text-xl pt-2 p-4'><span className='text-red-700 font-bold p-3'>
                        IMPORTANT:</span> <span className='font-bold'>PLEASE DO NOT</span> fill the form <span className='underline'>if you dont have the money</span> for it or if you are travelliing in the next 2-4 days.</p>
                </div>
                <form action="" className='p-10' id='targetform'>
                    <div className='flex flex-col'>
                        <label htmlFor="" className='text-xl font-semibold'>Your Name <span className='text-red-600'>*</span></label>
                        <input type="text" className='w-[30rem] pl-4 text-xl rounded h-[3rem] bg-yellow-600'/>
                    </div>
                    
                    <div className='pt-7 flex flex-col'>
                        <label htmlFor="" className='text-xl font-semibold'>Your Phone / Whatsapp Number <span className='text-red-600'>*</span></label>
                        <input type="number" className='w-[22rem] pl-4 text-xl rounded h-[3rem] bg-yellow-600'/>
                    </div>
                    
                    <div className='pt-7 flex flex-col'>
                        <label htmlFor="" className='text-xl font-semibold'>Second Number <span className='text-red-600'>*</span></label>
                        <input type="number" className='w-[22rem] pl-4 text-xl rounded h-[3rem] bg-yellow-600'/>
                    </div>
                    
                    <div className='pt-7 flex flex-col'>
                        <label htmlFor="" className='text-xl font-semibold'>Your State <span className='text-red-600'>*</span></label>
                        <input type="text" className='w-[22rem] pl-4 text-xl rounded h-[3rem] bg-yellow-600'/>
                    </div>
                    
                    <div className='pt-7 flex flex-col'>
                        <label htmlFor="" className='text-xl font-semibold'>Your Home/Office Address (Delivery Address) <span className='text-red-600'>*</span></label>
                        <input type="text" className='w-[22rem] pl-4 text-xl rounded h-[3rem] bg-yellow-600' placeholder='Please enter a detailed address'/>
                    </div>
                    
                    <div className='pt-5'>
                        <h2 className='text-xl font-semibold'>Quantity</h2>
                       <ul>
                            <li className='p-2'>
                                <input 
                                    type="radio" 
                                    value="1 set - ₦00,000"
                                    onChange={handleChange}
                                    checked={selectedValue === "1 set - ₦00,000"}    
                                />
                                    
                                <label className='pl-2 font-semibold'>1 set - ₦00,000</label>
                            </li>
                            <li className='p-2'>
                                <input 
                                    type="radio" 
                                    value="2 set - ₦00,000"
                                    onChange={handleChange}
                                    checked={selectedValue === "2 set - ₦00,000"}    

                                />
                                <label className='pl-2 font-semibold'>2 set - ₦00,000</label>
                            </li>
                       </ul>
                    </div>
                    <button className='w-full text-center border-2 border-yellow-400 mt-10 py-3 px-2 rounded-lg text-gray-400 text-xl '>Submit Your Order</button>
                </form>

                <div className='text-center' >
                    <h3 className='font-bold'>FOR MORE ENQUIRIES CALL US ON <span className='text-red-700'>07065906546</span></h3>
                    <p className='font-semibold'>Or send us a Whatsapp message</p>
                    <button className='rounded mt-2 px-7 py-3 text-lg text-gray-100 bg-green-800 active:bg-red-800 duration-200'>CHAT US ON WHATSAPP</button>
                </div>
            </div>

            
            <div className='text-center flex-col justify-center items-center'>
                <h3 className='font-bold text-2xl'>DISCLAIMER</h3>
                <p className='leading-6 p-2'>This site is not a part of the Facebook website, Facebook Inc. 
                    It is also not part of the Google Website or Alphabet Inc. 
                    Additionally, this site is not endorsed by Facebook or Google in any way.
                    FACEBOOK and GOOGLE is a trademark of FACEBOOK Inc and ALPHABET INC respectively.
                </p>
            </div>

        </div>
        


    </div>
  )
}

export default Home