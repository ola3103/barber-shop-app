import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { GlobalUserContext } from "../context/UserContext";
import SingleServiceLabelInput from "./SingleServiceLabelInput";

const BookingForm = () => {
  const { user, serviceData } = GlobalUserContext();
  const [dateValue, setDateValue] = useState(new Date());
  const [activeSlot, setActiveSlot] = useState(null);
  const [isToday, setIsToday] = useState(false);

  const handleToggleSlot = (event) => {
    const slotDataValue = event.currentTarget.getAttribute("data-value");
    setActiveSlot((prevSlot) =>
      prevSlot === slotDataValue ? null : slotDataValue
    );
    console.log(activeSlot);
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

  const allServiceLabelInput = serviceData.map((serviceLabelInput) => {
    return (
      <SingleServiceLabelInput
        key={serviceLabelInput._id}
        serviceLabelInput={serviceLabelInput}
      />
    );
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
                    activeSlot === `${formattedDate} 10:00 AM`
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleToggleSlot}
                  data-value={`${formattedDate} 10:00 AM`}
                  role="button"
                >
                  10:00 AM
                </div>
                <div
                  className={
                    activeSlot === `${formattedDate} 12:00 PM`
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleToggleSlot}
                  data-value={`${formattedDate} 12:00 PM`}
                  role="button"
                >
                  12:00 PM
                </div>
                <div
                  className={
                    activeSlot === `${formattedDate} 02:00 PM`
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleToggleSlot}
                  data-value={`${formattedDate} 02:00 PM`}
                  role="button"
                >
                  02:00 PM
                </div>
                <div
                  className={
                    activeSlot === `${formattedDate} 04:00 PM`
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleToggleSlot}
                  data-value={`${formattedDate} 04:00 PM`}
                  role="button"
                >
                  04:00 PM
                </div>
                <div
                  className={
                    activeSlot === `${formattedDate} 06:00 PM`
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleToggleSlot}
                  data-value={`${formattedDate} 06:00 PM`}
                  role="button"
                >
                  06:00 PM
                </div>
                <div
                  className={
                    activeSlot === `${formattedDate} 08:00 PM`
                      ? "appointmentSlot slot slot_active"
                      : "appointmentSlot slot"
                  }
                  onClick={handleToggleSlot}
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
          {allServiceLabelInput}
        </fieldset>
        <label className="booking_form_label">
          Additional Request
          <textarea className="additional_text_input" name="" id="" />
        </label>
        <ul className="booking_price_summary"></ul>
      </div>
    </form>
  );
};

export default BookingForm;
