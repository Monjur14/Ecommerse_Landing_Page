import lander from '/public/Logo.png'
const Footer = () => {
  return (
    <div className="contain mx-auto">
      <div className="section__padding flex justify-center">
        <div className='flex flex-col items-center'>
            <img src={lander} alt="" className='max-w-[180px] mb-2'/>
            <p className='text-sm xsm:text-bs'>Lander best multi-purpose product landing page.</p>
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Footer
