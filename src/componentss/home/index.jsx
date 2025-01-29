import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
// import myImages from "/src/assets/img/demo.jpg"
// import myVideo from "/src/assets/img/demovid.mp4"

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


    const [formData, setFormData] = useState({
        name: "",
        phoneNumber: "",
        secondNumber: "",
        yourState: "",
        deliveryAddress: "",
        quantity: ""
    })



    const handleChange = (e) => {
        console.log(
        setSelectedValue(e.target.value)
        )

        setFormData({  
            ...formData, 
            [e.target.name]: e.target.value
        })

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch("https://householdecommserver.onrender.com/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData) 
            })

            // | text and data response |
            const data = await response.json()
            console.log(data)   
            if (data.success) {
                alert(data.message)
            } else{
                alert("Failed to place order")
            }

            // | text response |
            // const text = await response.text()
            // console.log(text)
            // const textData = JSON.parse(text)
            // console.log(textData)
            // if(textData.success){
            //     alert("Order placed successfully")
            // } else {
            //     alert("Failed to place order")
            // }

        } catch (error) {
            console.log("Error:", error)
            alert("An error occurred while placing the order.");
        }

    }


    // const handleSubmit = async (e) => {
    //     e.preventDefault()
  
    //         const response = await fetch("http://localhost:3002/send-email", {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify(formData) 
    //         })


    //         const text = await response.text();
    //         // console.log("Raw response:", text);

    //     try {
    //         const data = JSON.parse(text)
    //         const res = await response.json()
    //         console.log(res.success)
            
            
    //         if(data.success){
    //             alert("Order placed successfully")
    //         } else {
    //             alert("Failed to place order")
    //         }
    //     } catch (error) {
    //         console.log("Error:", error)
    //     }

    // }



  return (
    <div className=''>
        <div className='bg-primary-700 md:h-[85rem] lg:h-[88rem] borde border-primary400'>
            <div className="pt-0">
                <marquee behavior="" direction="" className="flex bg-primary-600 h-[7rem] pt-9">
                    <span className=' spa' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>
                    <span className='spa ml-14 ' data-aos="fade">Discount Sale + Free Delivery + Payment on delivery </span>

                </marquee>

                <div className='pt-12'>
                    <h3 className='text-center text-3xl pb-8 sm:text-4xl md:text-6xl font-semibold text-primary-600 md:text-primary-600 shadow-lg' data-aos="fade">
                        New Collections
                    </h3>
                    <p className=' pt-5 text-center text-primary-600 md:textprimary-600 text-md sm:text-xl md:text-3xl font-semilight' data-aos="fade">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis libero maiores ducimus dolores consequatur voluptatum repudiandae voluptatem vitae quis iusto?
                    </p>        

                    <div
                    className="flex flex-col items-center md:flex-row md:justify-center gap-0 sm:gap-0 md:gap-9 pt-14"
                    data-aos="fade-up"
                    >
                        <div className="flex flex-col items-center md:items-start">
                            <img
                            src="/img/demo.jpg"
                            alt=""
                            className="border border-primary-600 shadow-2xl rounded w-[12rem] md:w-[15rem] h-[15rem] md:h-[18rem]"
                            />
                            <div className="pt-5 pl-1 text-center md:text-left">
                                <h4 className='text-yellow-600 text-xl'>Lorem ipsum dolor</h4>
                                <a href="" className="underline text-gray-600">
                                    Discover
                                </a>
                            </div>
                        </div>

                        <div className="flex pt-8 md:pt-0 flex-col items-center md:items-start">
                            <img
                            src="/img/demo.jpg"
                            alt=""
                            className="border border-primary-600 shadow-2xl rounded w-[12rem] md:w-[15rem] h-[15rem] md:h-[18rem]"
                            />
                            <div className="pt-5 pl-1 text-center md:text-left">
                                <h4 className='text-yellow-600 text-xl'>Lorem ipsum dolor</h4>
                                <a href="" className="underline text-gray-600">
                                    Discover
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col items-center pt-8 md:pt-0 md:items-start">
                            <img
                            src="/img/demo.jpg"
                            alt=""
                            className="border border-primary-600 shadow-2xl rounded w-[12rem] md:w-[15rem] h-[15rem] md:h-[18rem]"
                            />
                            <div className="pt-5 pl-1 text-center md:text-left">
                                <h4 className='text-yellow-600 text-xl'>Lorem ipsum dolor</h4>
                                <a href="" className="underline text-gray-600">
                                    Discover
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col items-center justify-center min-h-[25rem] md:min-h-[32rem] lg:min-h-[35rem] md:pt-10 lg:pt-40" data-aos="fade-up">
                    <div>
                        <video src="img/demovid.mp4" autoPlay controls loop muted className="shadow border-2 border-primary-600 rounded w-[15rem] md:w-[15rem] h-[15rem] md:h-[18rem]"></video>
                    </div>
                    <div className="text-center mt-4">
                        <Link to="target" smooth={true} duration={700}>
                            <button className="rounded  p-3 md:p-2 text-sm md:text-lg text-gray-300 bg-primary-600 active:bg-yellow-800 duration-300">
                                Yes! I want to order now
                            </button>
                        </Link> 
                        <p className="mt-2 text-primary-600" data-aos="slide-up">Work smart</p>
                    </div>
                </div>

            </div>
        </div>

        <div className='bg-primary-700 min-h-[200rem] pt-9 md:pt-10'>
            <div className="flex justify-center mt-0 md:mt-32 w[50rem]  min-h[30rem] md:min-h[40rem] lg:min-h[45rem] " data-aos="fade-up">
                <img src="/img/demo.jpg" alt="bigimg" className='h-[15rem] md:h-[22rem] lg:h-[25rem] w-[17rem] md:w-[35rem] lg:w-[40rem] border-2 border-primary-600' />
            </div>

            <div className='m-12 text-left -pl-[1rem] md:pl-[2rem] lg:pl-[8rem] lg:pl58 text-primary-400' data-aos="slide-right">
                <h4 className='pl-1 font-bold text-md md:text-2xl text-yellow-700'>Reasons why you will love this product</h4>
                <p className='pt-4 text-sm md:text-lg text-primary-600'>1. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                <p className='text-sm md:text-lg text-primary-600'>2. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>


            <div className='flex flex-col justify-center items-center min-h-[30rem] md:min-h-[40rem] pt-[1rem] md:pt-[1rem] lg:pt-[1rem]' data-aos="fade-up">
                <div>
                    <img src="/img/demo.jpg" alt="bigim" className='border-2 border-primary-600 rounded w-[12rem] md:w-[15rem] h-[15rem] md:h-[18rem]' />
                </div>
                <Link to='targetform' smooth={true} duration={800}>
                    <button className='rounded p-1 md:p-2 mt-5 text-lg md:text-lg text-gray-300 bg-primary-600 active:bg-yellow-700 duration-200'>Yes, I want to order now</button>
                </Link>
            </div>

      
            <div className='border-2 border-primary-600 rounded-xl m-auto mt-12 w-[17rem] sm:w-[25rem] md:w-[35rem] lg:w-[50rem] h-[40rem] md:h-[44rem] md:min-h-dvh' data-aos="fade-up"> 
                <div className='h-[6rem] bg-primary-600 rounded-t-md'>
                    <h6 className='text-center py-10 md:py-8 md:p-5 text-xl sm:text-2xl md:text-4xl font-bold text-gray-300'>Massive Discount Today</h6>
                </div>

                <div className='h-[6rem] md:h-[8rem] bg-primary-700 border-b border-primary-600'>
                    <h3 className='text-center p-4 font-semibold text-lg md:text-2xl text-primary-600'>Free Delivery</h3>
                    <h3 className='text-center font-semibold text-lg md:text-2xl text-primary-600'>Payment on Delivery</h3>
                </div>
                
                <div className='text-center border-b border-primary-600 h-[13rem] md:h-[15rem] pt-6'>
                    <h4 className='text-xl text-gray-800 md:text-3xl font-bold underline'>1 Set</h4>
                    <h4 className='font-semilight text-lg md:text-2xl'>Original Price <span className='text-primary-500 font-bold text-3xl md:text-4xl ml-2 md:ml-6'>00000</span></h4>
                    <h4 className='font-semibold sm:font-bold text-gray-700 text-xl md:text-3xl'>✅Discount Price <span className='text-green-600 font-bold text-3xl md:text-4xl ml-2 md:ml-6'>00000</span></h4>
                    <p className='text-lg md:text-2xl font-light'>(free delivery)</p>
                    <p className='text-lg md:text-2xl font-light'>(payment on delivery)</p>
                </div>

                <div className='text-center h-[15rem] pt-6'>
                    <h4 className='text-xl md:text-3xl font-bold underline'>2 Set</h4>
                    <h4 className='font-semilight text-gray-600 text-lg md:text-2xl'>Original Price <span className='text-primary-500 font-bold text-3xl md:text-4xl ml-2 md:ml-6'>00000</span></h4>
                    <h4 className='font-semibold text-gray-700 sm:font-bold text-xl md:text-3xl'>✅Discount Price <span className='text-green-600 font-bold text-3xl md:text-4xl ml-2 md:ml-6'>00000</span></h4>
                    <p className='text-lg md:text-2xl font-light'>(free delivery)</p>
                    <p className='text-lg md:text-2xl font-light'>(payment on delivery)</p>
                </div>


                <div className='text-center p-10'>
                    <Link to='target' smooth={true} duration={700}>
                        <button className='rounded px-1 md:px-7 py-1 md:py-3 text-xl text-primary-600 active:textprimary-700 active:bgprimary-600 border-2 border-primary-600 duration-300' >YES, I WANT THIS NOW</button>
                    </Link>
                    <p className='text-primary-600 text-xl md:text-2xl font-bold pt-2'>This Discount Ends Today…</p>
                </div>
            </div>

            <div id='target' className='min-h-[60rem] m-auto shadow-2xl mt-[18rem] md:mt-[20rem] lg:mt-[25rem] w-[18rem] sm:w-[30rem] md:w-[35rem] border-2 border-primary-600 rounded flex-row justify-center'>
                <div className='text-center bg-primary-600 shadow-2xl'>
                    <h4 className='text-gray-400 text-xl md:text-2xl font-bold pt-4'>HURRY DISCOUNT EXPIRES TODAY</h4>
                    <p className='text-lg md:text-2xl border-b border-primary-300 font-bold text-gray-400 pt-2'>Fill Order Form Below</p>
                    <p className='text-center text-gray-400 text-sm sm:text-md md:text-xl pt-2 p-4'><span className='text-yellow-500 font-bold p-3'>
                        IMPORTANT:</span> <span className='font-bold '>PLEASE DO NOT</span> fill the form <span className='underline'>if you dont have the money</span> for it or if you are travelling in the next 2-4 days.</p>
                </div>
                {/* onSubmit={handleSubmit} */}
                <form action="" className='p-10' id='targetform' onSubmit={handleSubmit}>
                    <div className='flex flex-col myInputLabel'>
                        <label htmlFor="" className='text-md md:text-xl font-semibold text-primary-600'>Your Name <span className='text-red-600'>*</span></label>
                        <input 
                            type="text" 
                            className='md:w-[30rem] pl-4 text-xl rounded h-[3rem] bg-primary-700 border-2 text-primary-600 font-semibold border-primary-600'
                            name="name"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className='pt-7 flex flex-col myInputLabel'>
                        <label htmlFor="" className='text-md md:text-xl font-semibold text-primary-600'>Your Phone / Whatsapp Number <span className='text-red-600'>*</span></label>
                        <input 
                            type="number" 
                            className='no-spinner md:w-[22rem] pl-4 text-xl rounded h-[3rem] bg-primary-700 border-2 text-primary-600 font-semibold border-primary-600'
                            name="phoneNumber"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className='pt-7 flex flex-col myInputLabel'>
                        <label htmlFor="" className='text-md md:text-xl font-semibold text-primary-600'>Second Number <span className='text-red-600'>*</span></label>
                        <input 
                            type="number" 
                            className='no-spinner md:w-[22rem] pl-4 text-xl rounded h-[3rem] bg-primary-700 border-2 text-primary-600 font-semibold border-primary-600'
                            name="secondNumber"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className='pt-7 flex flex-col myInputLabel'>
                        <label htmlFor="" className='text-md md:text-xl font-semibold text-primary-600'>Your State <span className='text-red-600'>*</span></label>
                        <input 
                            type="text" 
                            className='md:w-[22rem] pl-4 text-xl rounded h-[3rem]  bg-primary-700 border-2 text-primary-600 font-semibold border-primary-600'
                            name="yourState"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className='pt-7 flex flex-col myInputLabel'>
                        <label htmlFor="" className='text-md md:text-xl font-semibold text-primary-600'>Your Home/Office Address (Delivery Address) <span className='text-red-600'>*</span></label>
                        <input 
                            type="text" 
                            className='  md:w-[30rem] p-1 sm:pl-3 md:pl-4 text-md md:text-xl rounded h-[3rem] text-primary-600 font-semibold bg-primary-700 border-2 border-primary-600' 
                            name='deliveryAddress'
                            placeholder='Please enter a detailed address'
                            onChange={handleChange}
                            required
                        />
                    </div>
                    
                    <div className='pt-5 -pl-50 md:pl-10'>
                        <h2 className='text-xl font-semibold text-gray-700'>Quantity</h2>
                       <ul>
                            <li className='p-2'>
                                <input 
                                    type="radio" 
                                    value="1 set - ₦00,000"
                                    onChange={handleChange}
                                    name='quantity'
                                    checked={selectedValue === "1 set - ₦00,000"}    
                                />
                                    
                                <label className='pl-2 font-semibold text-gray-800'>1 set - ₦00,000</label>
                            </li>
                            <li className='p-2'>
                                <input 
                                    type="radio" 
                                    value="2 set - ₦00,000"
                                    onChange={handleChange}
                                    name='quantity'
                                    checked={selectedValue === "2 set - ₦00,000"}    

                                />
                                <label className='pl-2 font-semibold text-gray-700'>2 set - ₦00,000</label>
                            </li>
                       </ul>
                    </div>
                    <button 
                        className='w-full text-center border-4 font-bold border-primary-600 mt-10 py-3 px-2 rounded-lg  text-primary-600 active:text-primary-300 text-md md:text-xl active:bg-primary-700 active:border-4 active:border-primary-300 activeborder '
                        // onClick={handleClick}    
                    >Submit Your Order</button>
                </form>

                <div className='text-center' >
                    <h3 className='font-bold'>FOR MORE ENQUIRIES CALL US ON <span className='text-yellow-600'>07065906546</span></h3>
                    <p className='font-semibold'>Or send us a Whatsapp message</p>
                    <button className='rounded mt-4 px-2 mb-6 md:px-7 py-2 md:py-3 text-sm md:text-lg text-gray-100 active:text-green-700 bg-green-800 active:bg-primary-300 active:border-2 active:border-green-800 duration-200 '>
                        <a href="http://wa.me/2347065906546" >CHAT US ON WHATSAPP</a>
                    </button>

                </div>
            </div>

            
            <div className='flex-row justify-center pt-14'>
                <h3 className='font-bold text-xl md:text-2xl text-center text-primary-600'>DISCLAIMER</h3>
                <p className='leading6 p-2 font-semibold text-center text-gray-700 w[50rem] text-sm md:text-xl'>This site is not a part of the Facebook website, Facebook Inc. 
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