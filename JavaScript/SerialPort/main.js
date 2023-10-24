/**
 * @type {HTMLSpanElement}
 */
const span = document.querySelector("span");
/**
 * @type {HTMLUListElement}
 */
const ul = document.querySelector("ul");
/**
 * @type {HTMLButtonElement}
 */
const connectBtn = document.querySelector("#connect");
/**
 * @type {HTMLButtonElement}
 */
const disconnectBtn = document.querySelector("#disconnect");

let port = undefined;
let keepReading = false;
let reader = undefined;
let closedPromise = undefined;

const readPort = async () => {
  if (!port) return;

  while (port.readable && keepReading) {
    reader = port.readable.getReader();
    console.log("Reading...");

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          const data = new TextDecoder().decode(value);
          ul.insertAdjacentHTML("beforeend", `<li>${data}</li>`);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      reader.releaseLock();
    }
  }

  console.log("Closing...");
  await port.close();
};

disconnectBtn.addEventListener("click", async () => {
  // User clicked a button to close the serial port.
  keepReading = false;
  // Force reader.read() to resolve immediately and subsequently
  // call reader.releaseLock() in the loop example above.
  reader.cancel();
  await closedPromise;

  // Enable Connect Button (there is not an active connection)
  connectBtn.disabled = false;
  // Enable Disconnect Button
  disconnectBtn.disabled = true;
});

const handleConnect = async () => {
  try {
    // Prompt user to select any serial port.
    port = await navigator.serial.requestPort();
    // Show Port Info
    span.innerText = JSON.stringify(port.getInfo());

    await port.open({ baudRate: 9600 });

    // Reading Port
    keepReading = true;
    closedPromise = readPort();

    // Disable Connect Button (there is already an active connection)
    connectBtn.disabled = true;
    // Enable Disconnect Button
    disconnectBtn.disabled = false;
  } catch (error) {
    // Show Error
    span.innerText = error.message;
  }
};

connectBtn.addEventListener("click", handleConnect);
