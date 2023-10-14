const Testimonial = ({title, stars, date}) => {
  return (
    <div className="flex flex-col items-center space-y-3">
      <p className="text-justify">{title}</p>
      <span className="flex">{stars}</span>
      <p className="pb-12">{date}</p>
    </div>
  )
}

export default Testimonial
