import AccordionItems from "../Components/AccordionItems"


const FAQ = () => {
  return (
    <div className="contain mx-auto" id="faq">
      <div className="section__padding">
        <div className="lg:mb-20 mb-10">
          <h1 className="text-center text-3xl xsm:text-3xl lg:text-4xl font-bold mb-1"><span className="text-blue">Frequently</span> Asked <span className="text-blue">Questions</span></h1>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 gap-8 md:gap-10">
          <div className="lg:basis-3/4 space-y-2">
              <AccordionItems question={"This is first question"}/>
              <AccordionItems question={"This is second question"}/>
              <AccordionItems question={"This is third question"}/>
              <AccordionItems question={"This is forth question"}/>
              <AccordionItems question={"This is fifth question"}/>
              <AccordionItems question={"This is sixth question"}/>
          </div>
          <div className="mx-auto">
            <img src="faq.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
