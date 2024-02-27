import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const SectionFour = () => {
  return (
    <section className="section_4">
      <div className="section_4_container container">
        <h1 className="section_4_header">Featured gallery</h1>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="./gallery_1.jpg" alt="gallery_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery_2.jpg" alt="gallery_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery_3.jpg" alt="gallery_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery_4.jpg" alt="gallery_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery_5.jpg" alt="gallery_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery_6.jpg" alt="gallery_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery_7.jpg" alt="gallery_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery_8.jpg" alt="gallery_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="./gallery_9.jpg" alt="gallery_image" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SectionFour;
