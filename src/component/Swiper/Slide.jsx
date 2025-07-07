import { Swiper, SwiperSlide } from "swiper/react";
export default function SlideTitle() {
  return (
    <Swiper>
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <span slot="container-start">Container Start</span>
      <span slot="container-end">Container End</span>
      <span slot="wrapper-start">Wrapper Start</span>
      <span slot="wrapper-end">Wrapper End</span>
    </Swiper>
  );
}
