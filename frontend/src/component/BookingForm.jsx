import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const BookingForm = () => {
  const [value, setValue] = useState(new Date());

  const onChange = (nextValue) => {
    setValue(nextValue);
  };

  const date = new Date(value);

  const options = { weekday: "long", month: "long", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <form className="booking_form">
      <div className="booking_form_container">
        <p className="booking_form_header">
          Book your appointment now and step into style!
        </p>
        <label className="booking_form_label">
          Full Name
          <input type="text" className="booking_form_input" />
        </label>
        <label className="booking_form_label">
          Email
          <input type="Email" className="booking_form_input" />
        </label>
        <div className="booking_form_date_time_box">
          <div className="booking_form_date">
            <Calendar className="form_date" onChange={onChange} value={value} />
          </div>
          <div className="booking_slot">
            <p className="booking_time_selected_date">{formattedDate}</p>
            <div className="booking_slot_box">
              <div
                className="appointmentSlot slot"
                data-value="09:00 AM"
                role="button"
              >
                09:00 AM
              </div>
              <div
                className="appointmentSlot slot"
                data-value="10:00 AM"
                role="button"
              >
                10:00 AM
              </div>
              <div
                className="appointmentSlot slot"
                data-value="11:00 AM"
                role="button"
              >
                11:00 AM
              </div>
            </div>
          </div>
        </div>
        <fieldset className="booking_service_box">
          <legend className="booking_service_box_header">
            Types of services
          </legend>
          <label className="booking_form_label_checkbox">
            <input className="booking_form_input_checkbox" type="checkbox" />
            Haircut
          </label>
          <label className="booking_form_label_checkbox">
            <input className="booking_form_input_checkbox" type="checkbox" />
            Shaving
          </label>
          <label className="booking_form_label_checkbox">
            <input className="booking_form_input_checkbox" type="checkbox" />
            Hair Treatment
          </label>
          <label className="booking_form_label_checkbox">
            <input className="booking_form_input_checkbox" type="checkbox" />
            Styling
          </label>
          <label className="booking_form_label_checkbox">
            <input className="booking_form_input_checkbox" type="checkbox" />
            Facial Treatment
          </label>
        </fieldset>
        <label className="booking_form_label">
          Additional Request
          <textarea
            className="additional_text_input"
            name=""
            id=""
            cols="30"
            rows="10"
          />
        </label>
      </div>
    </form>
  );
};

export default BookingForm;
