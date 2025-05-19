import { Swiper, SwiperSlide } from 'swiper/react';

const Partner = () => {
  const data = ["./partners/pn1-finechem.png", "./partners/pn2-drred.png", "./partners/pn3-dsn.png", "./partners/pn4-dk.png", "./partners/pn5-aarti.png", "./partners/pn6-bio.png", "./partners/pn7-mega.png", "./partners/pn8-hema.png"];
  return (
    <div className="pt-30 pb-10  bg-[#f5f5f5]">
      <div className="container m-auto">
        <Swiper
          spaceBetween={16}
          slidesPerView={"auto"}
          grabCursor={true}
          freeMode={true} // cho phép kéo tự do
          className="flex w-full overflow-x-auto whitespace-nowrap space-x-4"
        >
          {data.map((src, index) => (
            <SwiperSlide
              key={index}
              className="rounded-lg overflow-hidden max-w-60 max-h-20"
            >
              <img src={src} alt={`Image ${index}`} className=" w-full h-full object-contain" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Partner;
