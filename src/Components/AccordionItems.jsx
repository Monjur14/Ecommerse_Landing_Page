import {AiOutlinePlus, AiOutlineMinus} from 'react-icons/ai'
import { useState } from 'react'


// eslint-disable-next-line react/prop-types
const AccordionItems = ({question}) => {
    const [isopen, setIsopen] = useState(false)
    const toggleAccordion = () => {
        setIsopen(!isopen)
    }
  return (
    <div className='bg-swhite p-4 border cursor-pointer border-gray rounded-md'onClick={toggleAccordion}>
      <div className='flex justify-between items-center ' >
        <h1 className='font-bold'>{question}</h1>
        <span>{isopen ? <AiOutlineMinus/>: <AiOutlinePlus/>}</span>
      </div>
      {isopen && <div className='lg:mt-3 text-justify cursor-pointer' onClick={toggleAccordion}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla aperiam ex, soluta optio modi placeat numquam deleniti ipsum rerum qui dolor veritatis deserunt, atque repudiandae quis eius tenetur vel inventore?</div>}
    </div>
  )
}

export default AccordionItems
