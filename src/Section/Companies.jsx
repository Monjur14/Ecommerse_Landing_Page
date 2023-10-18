import img1 from '/public/Lifetrack.png'
import img2 from '/public/Landing.png'
import img3 from '/public/Happen.png'
import img4 from '/public/Products.png'
import img5 from '/public/Opener.png'

const Companies = () => {
  return (
    <div className="contain mx-auto">
      <div className="section__padding flex flex-col lg:justify-between md:flex-row items-center flex-wrap gap-10 ">
        <img src={img1} alt="" className='w-28'/>
        <img src={img2} alt="" className='w-28'/>
        <img src={img3} alt="" className='w-28'/>
        <img src={img4} alt="" className='w-28'/>
        <img src={img5} alt="" className='w-28'/>
      </div>
    </div>
  )
}

export default Companies
