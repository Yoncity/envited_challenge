import "./index.scss";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const CreateEvent: React.FC<{}> = () => {
  const navigate = useNavigate();

  const [eventData, setEventData] = useState({
    event_name: "",
    event_host: "",
    event_location_street: "",
    event_location_city: "",
    event_date_from: "",
    event_date_to: "",
  });

  const handleChange = ({
    target: { name, value },
  }: {
    target: { name: string; value: string };
  }) => {
    if (name.includes("event_date")) {
      setEventData({
        ...eventData,
        [name]: dayjs(value).format("DD MMMM h:mmA Z"),
      });
    } else setEventData({ ...eventData, [name]: value });
  };

  const handleClick = () => {
    navigate("/events", { replace: true, state: eventData });
  };
  return (
    <div className="create_event_container">
      <div className="create_event_container__header">
        <p className="header_primary gradiented_text_primary">Create Event</p>
        <p className="description_primary">
          Never miss any event, create it now and stay safe.
        </p>
      </div>

      <div className="create_event_container__content">
        <div className="create_event_container__content__input_container">
          <input
            type="text"
            name="event_name"
            onChange={handleChange}
            placeholder="Event Name"
          />
        </div>

        <div className="create_event_container__content__input_container">
          <input
            type="text"
            name="event_host"
            onChange={handleChange}
            placeholder="Host Name"
          />
        </div>

        <div className="create_event_container__content__input_container_multiple_fields">
          <div className="create_event_container__content__input_container_multiple_fields__header">
            <FiMapPin className="icon" />
            <p>Location</p>
          </div>
          <div className="create_event_container__content__input_container_multiple_fields__fields">
            <div className="create_event_container__content__input_container_multiple_fields__fields__row">
              <p>Street</p>
              <input
                type="text"
                name="event_location_street"
                onChange={handleChange}
                placeholder="Select street"
              />
            </div>

            <div className="create_event_container__content__input_container_multiple_fields__fields__row">
              <p>City</p>
              <input
                type="text"
                name="event_location_city"
                onChange={handleChange}
                placeholder="Select city and region"
              />
            </div>
          </div>
        </div>

        <div className="create_event_container__content__input_container_multiple_fields">
          <div className="create_event_container__content__input_container_multiple_fields__header">
            <FiCalendar className="icon" />
            <p>Date</p>
          </div>
          <div className="create_event_container__content__input_container_multiple_fields__fields">
            <div className="create_event_container__content__input_container_multiple_fields__fields__row">
              <p>From</p>
              <input
                type="date"
                name="event_date_from"
                onChange={handleChange}
                placeholder="Select start date"
              />
            </div>

            <div className="create_event_container__content__input_container_multiple_fields__fields__row">
              <p>To</p>
              <input
                type="date"
                name="event_date_to"
                onChange={handleChange}
                placeholder="Select end date"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        className="home_container__action button_primary"
        onClick={handleClick}
      >
        🎉 Create my event
      </button>
    </div>
  );
};

export default CreateEvent;
