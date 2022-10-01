import "./index.scss";
import LandingPageImage from "../../assets/images/landing_page_image.svg";
import { useNavigate } from "react-router-dom";

const Home: React.FC<{}> = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/create", {
      replace: true,
      state: {
        event_name: "Birthday Bash",
        event_host: "Yonatan Dawit",
        event_location: "111st Niyamirambo, Kigali",
        event_date_from: "1st Oct 2022",
        event_date_to: "1st Oct 2022",
      },
    });
  };

  return (
    <div className="home_container">
      <div className="home_container__header">
        <p className="home_container__header__title header_primary">
          Imaging if
          <span className="home_container__header__title__name gradiented_text_primary">
            SnapChat
          </span>
          had events.
        </p>

        <p className="home_container__header__description description_primary">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>

      <img
        className="home_container__image"
        src={LandingPageImage}
        alt="Landing Page of a mobile preview"
      />

      <button
        className="home_container__action button_primary"
        onClick={handleClick}
      >
        🎉 Create my event
      </button>
    </div>
  );
};

export default Home;
