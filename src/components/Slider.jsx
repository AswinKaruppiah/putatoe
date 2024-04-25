/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import {
  Navigation,
  Keyboard,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Mousewheel,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function Slider(props) {
  return (
    <div className="parent-slider">
      <div className="slider">
        <button className="arrow-left arrow">
          <BsArrowLeftCircleFill color="white" size="3rem" />
        </button>
        <button className="arrow-right arrow">
          <BsArrowRightCircleFill color="white" size="3rem" />
        </button>

        <Swiper
          modules={[
            Keyboard,
            Mousewheel,
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
          ]}
          speed={150}
          navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
          mousewheel={true}
          autoplay={{ delay: 2000 }}
          pagination={{ clickable: true }}
          keyboard={{
            enabled: true,
          }}
        >
          {props.slides.map((slide) => (
            <SwiperSlide key={slide.src}>
              <div
                className="sliderimg "
                style={{
                  backgroundImage: `url(${slide.src})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="fade h-20 sm:h-[8rem]" />
      </div>
    </div>
  );
}

export default Slider;
