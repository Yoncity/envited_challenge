import "./index.scss";
import EventImage from "../../assets/images/birthday_cake.png";
import { FiCalendar, FiMapPin, FiChevronRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";

type Props = {
  event_name?: string;
  event_host?: string;
  event_location_street?: string;
  event_location_city?: string;
  event_date_from?: string;
  event_date_to?: string;
};

const dummy_props = {
  event_name: "Birthday Bash",
  event_host: "Yonatan Dawit",
  event_location_street: "111st Niyamirambo",
  event_location_city: "Kigali, Rwanda",
  event_date_from: "1 Oct 6:00PM",
  event_date_to: "1 Oct 6:00PM +10",
};

const Events: React.FC<Props> = () => {
  const location = useLocation();

  return (
    <div className="events_container">
      <img src={EventImage} alt="" className="events_container__event_image" />

      <div className="events_container__content">
        <div className="events_container__content__header">
          <p className="events_container__content__header__title">
            {location.state?.event_name || dummy_props.event_name}
          </p>
          <p className="events_container__content__header__description">
            Hosted By{" "}
            <b>{location.state?.event_host || dummy_props.event_host}</b>
          </p>
        </div>

        <div className="events_container__content__details">
          <div className="events_container__content__details__row">
            <div className="events_container__content__details__row__icon">
              <FiCalendar className="icon" />
            </div>
            <div className="events_container__content__details__row__data">
              <div className="events_container__content__details__row__data__main">
                {location.state?.event_date_from || dummy_props.event_date_from}
              </div>
              <div className="events_container__content__details__row__data__minor">
                to{" "}
                <b>
                  {location.state?.event_date_to || dummy_props.event_date_to}
                </b>{" "}
                UTC +10
              </div>
            </div>
            <div className="events_container__content__details__row__icon_right">
              <FiChevronRight className="icon-right" />
            </div>
          </div>

          <div className="events_container__content__details__row">
            <div className="events_container__content__details__row__icon">
              <FiMapPin className="icon" />
            </div>
            <div className="events_container__content__details__row__data">
              <div className="events_container__content__details__row__data__main">
                {location.state?.event_location_street ||
                  dummy_props.event_location_street}
              </div>
              <div className="events_container__content__details__row__data__minor">
                {location.state?.event_location_city ||
                  dummy_props.event_location_city}
              </div>
            </div>

            <div className="events_container__content__details__row__icon_right">
              <FiChevronRight className="icon-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
