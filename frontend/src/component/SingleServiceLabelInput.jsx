const SingleServiceLabelInput = ({ serviceLabelInput }) => {
  return (
    <label className="booking_form_label_checkbox">
      <input className="booking_form_input_checkbox" type="checkbox" />
      {serviceLabelInput.serviceName}
    </label>
  );
};

export default SingleServiceLabelInput;
