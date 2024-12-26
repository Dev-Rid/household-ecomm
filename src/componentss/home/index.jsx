import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';

const Home = () => {
    useEffect(() => {
        Aos.init({
          // Optional settings:
          duration: 1000, 
          once: true, 
          mirror: false, 
        }); 
    }, []);

    const [selectedValue, setSelectedValue] = useState("")

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
        
    }


  return (
    <div className=''>
        <div className='bg-primary-100 h-[112rem] md:h-[85rem]'>
            <div className="pt-0">
                <marquee behavior="" direction="" className="flex bg-yellow-800 h-[7rem] pt-9">
                    <span className=' spa' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>

                </marquee>

                <div className='pt-12'>
                    <h3 className='text-center text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-100 md:text-gray-400 ' data-aos="fade">
                        New Collections
                    </h3>
                    <p className=' pt-5 text-center text-gray-100 md:text-gray-400 text-md sm:text-xl md:text-3xl font-light' data-aos="fade">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis libero maiores ducimus dolores consequatur voluptatum repudiandae voluptatem vitae quis iusto?
                    </p>        

                    <div
                    className="flex flex-col items-center md:flex-row md:justify-center gap-0 sm:gap-0 md:gap-9 pt-14"
                    data-aos="fade-up"
                    >
                        <div className="flex flex-col items-center md:items-start">
                            <img
                            src="/src/img/demo.jpg"
                            alt=""
                            className="border rounded w-[12rem] md:w-[15rem] h-[15rem] md:h-[18rem]"
                            />
                            <div className="pt-5 pl-1 text-center md:text-left">
                                <h4>Lorem ipsum dolor</h4>
                                <a href="" className="underline">
                                    Discover
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <img
                            src="/src/img/demo.jpg"
                            alt=""
                            className="border rounded w-[12rem] md:w-[15rem] h-[15rem] md:h-[18rem]"
                            />
                            <div className="pt-5 pl-1 text-center md:text-left">
                                <h4>Lorem ipsum dolor</h4>
                                <a href="" className="underline">
                                    Discover
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <img
                            src="/src/img/demo.jpg"
                            alt=""
                            className="border rounded w-[12rem] md:w-[15rem] h-[15rem] md:h-[18rem]"
                            />
                            <div className="pt-5 pl-1 text-center md:text-left">
                                <h4>Lorem ipsum dolor</h4>
                                <a href="" className="underline">
                                    Discover
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center min-h-screen pt-30 md:pt-40" data-aos="fade-up">
                    <div>
                        <video src="/src/img/demovid.mp4" className="border rounded w-[15rem] md:w-[15rem] h-[15rem] md:h-[18rem]"></video>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="target" smooth={true} duration={700}>
                            <button className="rounded  p-3 md:p-2 text-sm md:text-lg text-gray-100 bg-red-700 active:bg-red-800 duration-200">
                                Yes! I want to order now
                            </button>
                        </Link> 
                        <p className="mt-2 text-gray-300" data-aos="slide-up">Work smart</p>
                    </div>
                </div>

            </div>
        </div>

        <div className='bg-primary-200 min-h-[200rem]'>
        {/* min-h-dvh */}
            <div className="flex items-center justify-center md:min-h-screen" data-aos="fade-up">
                <div className="pt-1 md:pt-44 w-[50rem] border border-gray-600">
                    <div className="mt-10">
                        <img src="/src/img/demo.jpg" alt="bigimg" className='w-[50rem] md:w-[90rem]' />
                    </div>
                </div>
            </div>

            <div className='text-left pl-2 lg:pl-24 pt-10 text-gray-400' data-aos="slide-right">
                <h4 className='pl-1 font-bold text-md md:text-xl '>Reasons why you will love this product</h4>
                <p className='pt-5 text-sm md:text-lg'>1. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className='text-sm md:text-lg'>2. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>


            <div className='flex flex-col justify-center items-center min-h-screen md:pt-40' data-aos="fade-up">
                <div>
                    <img src="/src/img/demo.jpg" alt="bigimg" className='border rounded w-[12rem] md:w-[15rem] h-[15rem] md:h-[18rem]' />
                </div>
                <Link to='targetform' smooth={true} duration={800}>
                    <button className='rounded p-2 mt-5 text-lg text-gray-100 bg-red-700  active:bg-red-800 duration-200'>Yes, I want to order now</button>
                </Link>
            </div>

      
            <div className='border-2 rounded-xl m-auto mt-12 w-[17rem] sm:w-[25rem] md:w-[35rem] lg:w-[50rem] h-[40rem] md:h-[44rem] md:min-h-dvh' data-aos="fade-up"> 
                <div className='h-[6rem] bg-yellow-800'>
                    <h6 className='text-center py-10 md:py-8 md:p-5 text-xl sm:text-2xl md:text-4xl font-bold text-gray-300'>Massive Discount Today</h6>
                </div>

                <div className='h-[6rem] md:h-[8rem] bg-yellow-600 '>
                    <h3 className='text-center p-4 font-semibold text-lg md:text-2xl text-gray-300'>Free Delivery</h3>
                    <h3 className='text-center font-semibold text-lg md:text-2xl text-gray-300'>Payment on Delivery</h3>
                </div>
                
                <div className='text-center border-b h-[13rem] md:h-[15rem] pt-6'>
                    <h4 className='text-xl md:text-3xl font-bold underline'>1 Set</h4>
                    <h4 className='font-semilight text-lg md:text-2xl'>Original Price <span className='text-red-700 font-bold text-3xl md:text-4xl ml-2 md:ml-6'>00000</span></h4>
                    <h4 className='font-semibold sm:font-bold text-xl md:text-3xl'>✅Discount Price <span className='text-green-600 font-bold text-3xl md:text-4xl ml-2 md:ml-6'>00000</span></h4>
                    <p className='text-lg md:text-2xl font-light'>(free delivery)</p>
                    <p className='text-lg md:text-2xl font-light'>(payment on delivery)</p>
                </div>

                <div className='text-center h-[15rem] pt-6'>
                    <h4 className='text-xl md:text-3xl font-bold underline'>2 Set</h4>
                    <h4 className='font-semilight text-lg md:text-2xl'>Original Price <span className='text-red-700 font-bold text-3xl md:text-4xl ml-2 md:ml-6'>00000</span></h4>
                    <h4 className='font-semibold sm:font-bold text-xl md:text-3xl'>✅Discount Price <span className='text-green-600 font-bold text-3xl md:text-4xl ml-2 md:ml-6'>00000</span></h4>
                    <p className='text-lg md:text-2xl font-light'>(free delivery)</p>
                    <p className='text-lg md:text-2xl font-light'>(payment on delivery)</p>
                </div>


                <div className='text-center p-10'>
                    <Link to='target' smooth={true} duration={700}>
                        <button className='rounded px-1 md:px-7 py-1 md:py-3 text-lg text-gray-100 bg-green-800 active:bg-red-800 duration-300' >YES, I WANT THIS NOW</button>
                    </Link>
                    <p className='text-red-700 text-xl md:text-2xl font-bold pt-2'>This Discount Ends Today…</p>
                </div>
            </div>

            <div id='target' className='min-h-[60rem] m-auto shadow-4xl bg-yellow-700 mt-52 w-[18rem] sm:w-[30rem] md:w-[35rem] border-2 border-yellow-600 rounded flex-row justify-center'>
                <div className='text-center bg-yellow-600 '>
                    <h4 className='text-red-700 text-lg md:text-2xl font-bold pt-4'>HURRY DISCOUNT EXPIRES TODAY</h4>
                    <p className='text-lg md:text-2xl font-bold text-gray-400 pt-2'>Fill Order Form Below</p>
                    <p className='text-center text-sm sm:text-md md:text-xl pt-2 p-4'><span className='text-red-700 font-bold p-3'>
                        IMPORTANT:</span> <span className='font-bold'>PLEASE DO NOT</span> fill the form <span className='underline'>if you dont have the money</span> for it or if you are travelling in the next 2-4 days.</p>
                </div>
                <form action="" className='p-10' id='targetform'>
                    <div className='flex flex-col myInputLabel'>
                        <label htmlFor="" className='text-md md:text-xl font-semibold'>Your Name <span className='text-red-600'>*</span></label>
                        <input type="text" className='md:w-[30rem] pl-4 text-xl rounded h-[3rem] bg-yellow-600'/>
                    </div>
                    
                    <div className='pt-7 flex flex-col myInputLabel'>
                        <label htmlFor="" className='text-md md:text-xl font-semibold'>Your Phone / Whatsapp Number <span className='text-red-600'>*</span></label>
                        <input type="number" className='md:w-[22rem] pl-4 text-xl rounded h-[3rem] bg-yellow-600'/>
                    </div>
                    
                    <div className='pt-7 flex flex-col myInputLabel'>
                        <label htmlFor="" className='text-md md:text-xl font-semibold'>Second Number <span className='text-red-600'>*</span></label>
                        <input type="number" className='md:w-[22rem] pl-4 text-xl rounded h-[3rem] bg-yellow-600'/>
                    </div>
                    
                    <div className='pt-7 flex flex-col myInputLabel'>
                        <label htmlFor="" className='text-md md:text-xl font-semibold'>Your State <span className='text-red-600'>*</span></label>
                        <input type="text" className='md:w-[22rem] pl-4 text-xl rounded h-[3rem] bg-yellow-600'/>
                    </div>
                    
                    <div className='pt-7 flex flex-col myInputLabel'>
                        <label htmlFor="" className='text-md md:text-xl font-semibold'>Your Home/Office Address (Delivery Address) <span className='text-red-600'>*</span></label>
                        <input type="text" className='  md:w-[30rem] p-1 sm:pl-3 md:pl-4 text-md md:text-xl rounded h-[3rem] bg-yellow-600' placeholder='Please enter a detailed address'/>
                    </div>
                    
                    <div className='pt-5 md:pl-10'>
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
                    <button className='w-full text-center border-2 font-bold border-yellow-400 mt-10 py-3 px-2 rounded-lg  text-gray-400 active:text-green-700 text-md md:text-xl active:bg-yellow-800 '>Submit Your Order</button>
                </form>

                <div className='text-center' >
                    <h3 className='font-bold'>FOR MORE ENQUIRIES CALL US ON <span className='text-red-700'>07065906546</span></h3>
                    <p className='font-semibold'>Or send us a Whatsapp message</p>
                    <button className='rounded mt-2 px-2 md:px-7 py-2 md:py-3 text-sm md:text-lg text-gray-100 bg-green-800 active:bg-red-800 duration-200 '>CHAT US ON WHATSAPP</button>
                </div>
            </div>

            
            <div className='text-center flex-col justify-center items-center pt-14'>
                <h3 className='font-bold text-2xl'>DISCLAIMER</h3>
                <p className='leading-6 p-2 font-semibold'>This site is not a part of the Facebook website, Facebook Inc. 
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