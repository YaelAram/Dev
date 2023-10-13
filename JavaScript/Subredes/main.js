import { fromHost, fromSubnet } from "./helpers/subnet";

import "./style.css";

/**
 *
 * @param {SubmitEvent} evt
 */
const handleSubmit = (evt) => {
  evt.preventDefault();

  const { total, ip, type } = Object.fromEntries(
    new FormData(evt.target).entries()
  );

  if (type === "subnet") fromSubnet(+total, ip);
  else fromHost(+total, ip);
};

document.querySelector("form").addEventListener("submit", handleSubmit);
