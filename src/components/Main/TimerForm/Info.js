import PropTypes from "prop-types";

function Info({ secs, wpm }) {
  return (
    <p className="text-4xl">
      {secs ? `Time Remaining: ${secs}` : `${wpm} Words/Min.`}
    </p>
  );
}

Info.propTypes = { secs: PropTypes.number, wpm: PropTypes.number };

Info.defaultProps = { secs: null, wpm: null };

export default Info;
