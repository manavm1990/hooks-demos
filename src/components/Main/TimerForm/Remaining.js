import PropTypes from "prop-types";

function Remaining({ secs }) {
  return <p className="text-4xl">Time Remaining: {secs}</p>;
}

Remaining.propTypes = { secs: PropTypes.number.isRequired };

export default Remaining;
