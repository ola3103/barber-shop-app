const ServicesAndPrice = () => {
  return (
    <div className="service_price_section">
      <h1 className="service_price_header">Price List</h1>
      <ul className="service_price_list">
        <li className="single_service_price">
          <span className="single_service_text">HairCut</span>
          <span className="single_price">$11.89</span>
        </li>
        <li className="single_service_price">
          <span className="single_service_text">Shaving</span>
          <span className="single_price">$11.89</span>
        </li>
        <li className="single_service_price">
          <span className="single_service_text">Hair Treatment</span>
          <span className="single_price">$11.89</span>
        </li>
        <li className="single_service_price">
          <span className="single_service_text">Styling</span>
          <span className="single_price">$11.89</span>
        </li>
        <li className="single_service_price">
          <span className="single_service_text">Facial Treatment</span>
          <span className="single_price">$34.00</span>
        </li>
      </ul>
    </div>
  );
};

export default ServicesAndPrice;
