import PropTypes from "prop-types";

export function Route({ path, component }) {
  return null;
}

Route.propTypes = {
  path: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
};
