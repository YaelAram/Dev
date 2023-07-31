import PropTypes from "prop-types";

import { navigate } from "../helpers/navigationEvent";

export function Link({ target, to, ...props }) {
  const handleClick = (evt = new MouseEvent()) => {
    const isMainEvent = evt.button === 0; // 0 representa un click sobre el boton principal (click izquierdo, default)
    const isModifiedEvent =
      evt.metaKey || evt.altKey || evt.ctrlKey || evt.shiftKey;
    const isManageableEvent = target === undefined || target === "_self";

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      evt.preventDefault();
      navigate(to);
    }
  };

  return <a href={to} target={target} {...props} onClick={handleClick} />;
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  target: PropTypes.string,
  props: PropTypes.any,
};
