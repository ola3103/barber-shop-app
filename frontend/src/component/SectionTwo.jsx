import SingleService from "./SingleService";

const SectionTwo = () => {
  return (
    <section className="section_2">
      <div className="section_2_container container">
        <h1 className="section_2_header">Our Services</h1>
        <p className="section_2_text">
          Indulge in an array of premium grooming services tailored to suit your
          individual style and preferences. From precision haircuts and beard
          trims to luxurious hot towel shaves, our expert barbers deliver
          unparalleled craftsmanship and attention to detail with every service.
          Step into our sanctuary of sophistication and elevate your grooming
          routine to new heights.
        </p>
        <div className="service_box">
          <SingleService
            imgSrc="./service_1.jpg"
            smallImgSrc="./service_small_1.png"
            serviceType="Shaving"
            servicePrice={29}
          />
          <SingleService
            imgSrc="./service_3.jpg"
            smallImgSrc="./service_small_2.png"
            serviceType="Hair Treatment"
            servicePrice={85}
          />
          <SingleService
            imgSrc="./service_4.jpg"
            smallImgSrc="./service_small_4.png"
            serviceType="Styling"
            servicePrice={52}
          />
          <SingleService
            imgSrc="./service_2.jpg"
            smallImgSrc="./service_small_3.png"
            serviceType="HairCutting"
            servicePrice={67}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
