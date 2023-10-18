import { fromHost, fromSubnet } from "./helpers/subnet";

import "./style.css";

/**
 *
 * @param {SubmitEvent} evt
 */
const handleSubmit = (evt) => {
  evt.preventDefault();

  const { total, ip, type, classType } = Object.fromEntries(
    new FormData(evt.target).entries()
  );

  if (type === "subnet") fromSubnet(+total, ip, +classType);
  else fromHost(+total, ip, +classType);
};

document.querySelector("form").addEventListener("submit", handleSubmit);
