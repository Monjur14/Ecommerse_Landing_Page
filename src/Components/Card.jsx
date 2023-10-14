
const Card = ({img, title, subtitle}) => {
  return (
    <div className="flex flex-col items-center border rounded-lg bg-swhite py-16 text-black space-y-1.5 md:space-y-3 font-bold lg:px-12">
      <img src={img} alt="" className="w-12 md:w-16 lg:w-12"/>
      <h3 className="text-lg md:text-2xl lg:text-2xl">{title}</h3>
      <p className="text-sm md:text-bs">{subtitle}</p>
    </div>
  )
}

export default Card
