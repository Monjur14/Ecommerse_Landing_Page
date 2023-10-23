import Testimonial from "../Components/Testimonial"
import {AiFillStar} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Reviews = () => {
  return (
    <div className="contain mx-auto" id="reviews">
      <div className="section__padding">
        <div>
        <h1 className="text-center text-3xl xsm:text-3xl lg:text-4xl font-bold mb-7">Customer’s <span className="text-blue">Reviews</span></h1>
        </div>
        <div>          
        </div>
        <div>
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
          
        }}
        draggable={true}
        fadeEffect={true}
        modules={[Pagination]}
        breakpoints={{
            0: {
                slidesPerView: 1
            },
            650: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1050: {
                slidesPerView: 3,
                slidesPerGroup: 3
            }
        }}
        className="mySwiper">
        <SwiperSlide>
             <Testimonial title={"Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra."} stars={<><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/></>} date={"David William - Feb 22, 2023"}/>
        </SwiperSlide>
        <SwiperSlide>
             <Testimonial title={"Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra."} stars={<><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/></>} date={"David William - Feb 22, 2023"}/>
        </SwiperSlide>
        <SwiperSlide>
             <Testimonial title={"Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra."} stars={<><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/></>} date={"David William - Feb 22, 2023"}/>
        </SwiperSlide>
        <SwiperSlide>
             <Testimonial title={"Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra."} stars={<><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/></>} date={"David William - Feb 22, 2023"}/>
        </SwiperSlide>
        <SwiperSlide>
             <Testimonial title={"Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra."} stars={<><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/></>} date={"David William - Feb 22, 2023"}/>
        </SwiperSlide>
        <SwiperSlide>
             <Testimonial title={"Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra."} stars={<><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/></>} date={"David William - Feb 22, 2023"}/>
        </SwiperSlide>
        <SwiperSlide>
            <Testimonial title={"Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra."} stars={<><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/></>} date={"David William - Feb 22, 2023"}/>
        </SwiperSlide>
        <SwiperSlide>
             <Testimonial title={"Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra."} stars={<><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/></>} date={"David William - Feb 22, 2023"}/>
        </SwiperSlide>
        <SwiperSlide>
             <Testimonial title={"Lorem ipsum dolor sit amet consectetur. Malesuada et ut vitae eget. Leo viverra fringilla faucibus proin lacinia ornare amet. Aliquam mi eros dapibus pulvinar morbi aenean. Sit in donec quisque turpis. Tortor aliquam auctor elementum sodales porttitor viverra."} stars={<><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/><AiFillStar color="orange"/></>} date={"David William - Feb 22, 2023"}/>
        </SwiperSlide>
      </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Reviews
