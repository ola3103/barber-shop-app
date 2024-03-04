import BookingForm from "../component/BookingForm";
import Loader from "../component/Loader";
import { GlobalUserContext } from "../context/UserContext";

const UserHomePage = () => {
  const { user } = GlobalUserContext();

  if (!user) {
    return <Loader />;
  }

  return (
    <section className="user_homepage">
      <div className="user_homepage_container container">
        <p className="user_homepage_welcome_text">Welcome {user.fullName}</p>
        <BookingForm />
      </div>
    </section>
  );
};

export default UserHomePage;
