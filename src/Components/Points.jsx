const Points = ({num, head, sub}) => {
  return (
    <div className="flex justify-between gap-5 md:max-w-[550px]">
        <div className="self-start">
            <h1 className="text-[3rem] md:text-[4rem] lg:text-[3.5rem] font-bold text-lowlight mt-[-15px] md:mt-[-25px] lg:mt-[-18px]">{num}</h1>
        </div>
        <div>
            <h3 className="text-xl font-bold md:text-2xl lg:text-xl">{head}</h3>
            <p className="text-sm md:text-lg lg:text-sm">{sub}</p>
        </div>
    </div>
  )
}

export default Points
