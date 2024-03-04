const BookingForm = () => {
  return (
    <form>
      <div className="booking_form_container container">
        <label className="booking_form_label">
          Full Name
          <input type="text" className="booking_form_input" />
        </label>
        <label className="booking_form_label">
          Email
          <input type="Email" className="booking_form_input" />
        </label>
        <div className="booking_form_date_time_box">
          <label className="booking_form_date">
            Select an appointment date
            <input type="date" name="" id="" />
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            9AM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            10AM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            11AM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            12PM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            1PM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            2PM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            3PM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            4PM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            5PM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            6PM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            7PM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            8PM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            9PM
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="radio" name="time" />
            10PM
          </label>
        </div>
        <fieldset>
          <legend>Types of services</legend>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="checkbox" />
            Haircut
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="checkbox" />
            Shaving
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="checkbox" />
            Hair Treatment
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="checkbox" />
            Styling
          </label>
          <label className="booking_form_label_checkbox">
            <input className="bokking_form_input" type="checkbox" />
            Facial Treatment
          </label>
        </fieldset>
        <label className="booking_form_label">
          Additional Request
          <textarea name="" id="" cols="30" rows="10" />
        </label>
      </div>
    </form>
  );
};

export default BookingForm;
