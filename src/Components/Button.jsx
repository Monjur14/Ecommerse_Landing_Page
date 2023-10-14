const Button = ({title}) => {
  return (
    <div>
      <button className="py-2 px-5 font-bold md:py-3 md:px-6 md:text-lg hover:text-blue border hover:bg-white bg-blue text-white rounded-full shadow-black">{title}</button>
    </div>
  )
}

export default Button
