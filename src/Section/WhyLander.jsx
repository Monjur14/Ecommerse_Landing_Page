import Card from "../Components/Card"
import icon1 from '/public/solar_balloon-broken.png'
import icon2 from '/public/Group.png'
import icon3 from '/public/Group-1.png'

const WhyLander = () => {
  return (
    <div className="contain mx-auto" id="about">
      <div className="section__padding flex flex-col gap-12">
        <div>
            <h1 className="text-center text-3xl xsm:text-3xl lg:text-4xl font-bold">Why is <span className="text-blue">Lander</span>?</h1>
            <p className="text-center mt-4 max-w-2xl mx-auto text-lg text-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ipsam velit ratione. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="flex flex-col gap-5 lg:flex-row lg:justify-center">
            <Card img={icon1} title={"100% high quality product"} subtitle={"We have option of pick up in store"}/>
            <Card img={icon2} title={"Free shipping charge"} subtitle={"Inside City delivery within 5 days"}/>
            <Card img={icon3} title={"Money back guarantee"} subtitle={"We will take return in some cases"} />
        </div>
      </div>
    </div>
  )
}

export default WhyLander
