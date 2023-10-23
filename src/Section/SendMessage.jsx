import Button from '../Components/Button'
import Map from '/public/Map.png'


const SendMessage = () => {
  return (
    <div className="contain mx-auto">
        <div className="section__padding">
            <div>
                <h1 className="text-center text-3xl xsm:text-3xl lg:text-4xl font-bold mb-14">Send <span className='text-blue'>Messages</span></h1>
            </div>
            <div className='flex flex-col lg:flex-row lg:items-center gap-10'>
                <div className='basis-1/2 mx-auto'>
                    <img src={Map} alt="" />
                </div>
                <div className='w-full basis-1/2'>
                    <div className='w-full gap-4 flex'>
                        <input type="text" className='w-full border border-gray px-2 py-1 rounded' placeholder='Full Name*'/>
                        <input type="text" className='w-full border border-gray px-2 py-1 rounded' placeholder='Email*'/>
                    </div>
                    <input type="text" placeholder='Subject*' className='border border-gray px-2 py-1 rounded w-full mt-4'/>
                    <input type="text" className='border border-gray px-2 pt-1 pb-28 rounded w-full mt-4 mb-4' placeholder='Your Message*' />
                    <Button title={"Send Message"}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendMessage
