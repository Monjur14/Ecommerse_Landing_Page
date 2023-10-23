import Points from '../Components/Points'
import featured from '/public/featured.png'

const FeaturedProduct = () => {
  return (
    <div className="contain mx-auto" id='features'>
      <div className="section__padding">
        <div>
        <h1 className="text-center text-3xl xsm:text-3xl lg:text-4xl font-bold mb-10 lg:mb-16"><span className='text-blue'>Featured</span> Product</h1>
        </div>
        <div className='flex flex-col lg:flex-row gap-10 lg:items-center'>
        <div className='space-y-5 md:space-y-7'>
            <Points num={"01."} head={"Feature one"} sub={"Lorem ipsum dolor sit amet consectetur. Molestie aenean enim massa magna vulputate."}/>
            <Points num={"02."} head={"Feature Two"} sub={" Nisl vel porttitor feugiat ornare mollis ac. Dignissim amet feugiat vivamus urna eu justo."}/>
            <Points num={"03."} head={"Feature Three"} sub={"Urna posuere egestas nunc et sit vel. Nam cursus interdum urna rutrum ac elit purus ut."}/>
        </div>
    <div className='mx-auto'>
        <img src={featured} alt="" />
    </div>
    <div className='space-y-5 md:space-y-7'>
            <Points num={"04."} head={"Feature Four"} sub={" Neque aliquam risus ut gravida commodo nec integer viverra. Id sit bibendum mi sodales."}/>
            <Points num={"05."} head={"Feature five"} sub={"In nulla laoreet amet platea feugiat purus at consequat orci. Velit in enim ac eu massa."}/>
            <Points num={"06."} head={"Feature six"} sub={" Velit sed sem scelerisque gravida ornare enim. Venenatis pharetra orci eu morbi et justo. "}/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default FeaturedProduct
