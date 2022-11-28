import moment from "moment";
import "moment-timezone";

const Time = () => {
  const date = new Date();
  const time = moment(date);
  const timeInAmsterdam = time.tz("Europe/Amsterdam").format("hh:mm z");

  return <p id="time">Time in Amsterdam: {timeInAmsterdam}</p>;
};

export default Time;
