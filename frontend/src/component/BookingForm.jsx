import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GlobalUserContext } from "../context/UserContext";

const BookingForm = () => {
  const { user } = GlobalUserContext();
  const [dateValue, setDateValue] = useState(new Date());
  const [slotValue, setSlotValue] = useState(false);
  const [isToday, setIsToday] = useState(false);

  const handleSlotValue = (slotDataValue) => {
    setSlotValue(!slotValue);
  };

  const getSlotDataValue = (event) => {
    return event.currentTarget.getAttribute("data-value");
  };

  const onChange = (nextValue) => {
    setDateValue(nextValue);
  };

  useEffect(() => {
    const today = new Date();

    const checkDateMatch =
      today.getFullYear() === dateValue.getFullYear() &&
      today.getMonth() === dateValue.getMonth() &&
      today.getDate() === dateValue.getDate();

    setIsToday(checkDateMatch);
  }, [dateValue]);

  const date = new Date(dateValue);

  const options = { weekday: "long", month: "long", day: "2-digit" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  const {
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: `${user.fullName}`,
      email: `${user.email}`,
    },
  });

  return (
    <form className="booking_form" autoComplete="off">
      <div className="booking_form_container">
        <p className="booking_form_header">
          Book your appointment now and step into style!
        </p>
        <label className="booking_form_label">
          Full Name
          <input
            {...register("fullName", { required: "Please provide your name" })}
            type="text"
            className="booking_form_input"
            readOnly="readOnly"
          />
          {errors.fullName && (
            <span className="form_error">{errors.fullName.message}</span>
          )}
        </label>
        <label className="booking_form_label">
          Email
          <input
            {...register("email", { required: "Please provide your email" })}
            type="Email"
            className="booking_form_input"
            readOnly="readOnly"
          />
          {errors.email && (
            <span className="form_error">{errors.email.message}</span>
          )}
        </label>
        <div className="booking_form_date_time_box">
          <div className="booking_form_date">
            <Calendar
              className="form_date"
              onChange={onChange}
              value={dateValue}
              minDate={new Date(new Date().getTime() + 24 * 60 * 60 * 1000)}
            />
          </div>
          <div className="booking_slot">
            <p className="booking_time_selected_date">{formattedDate}</p>
            {isToday ? null : (
              <div className="booking_slot_box">
                <div
                  className={
                    slotValue
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleSlotValue}
                  data-value={`${formattedDate} 10:00 AM`}
                  role="button"
                >
                  10:00 AM
                </div>
                <div
                  className={
                    slotValue
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleSlotValue}
                  data-value={`${formattedDate} 12:00 PM`}
                  role="button"
                >
                  12:00 PM
                </div>
                <div
                  className={
                    slotValue
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleSlotValue}
                  data-value={`${formattedDate} 02:00 PM`}
                  role="button"
                >
                  02:00 PM
                </div>
                <div
                  className={
                    slotValue
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleSlotValue}
                  data-value={`${formattedDate} 04:00 PM`}
                  role="button"
                >
                  04:00 PM
                </div>
                <div
                  className={
                    slotValue
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleSlotValue}
                  data-value={`${formattedDate} 06:00 PM`}
                  role="button"
                >
                  06:00 PM
                </div>
                <div
                  className={
                    slotValue
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleSlotValue}
                  data-value={`${formattedDate} 08:00 PM`}
                  role="button"
                >
                  08:00 PM
                </div>
              </div>
            )}
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
