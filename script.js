function setTime() {
  const date = new Date();
  let hours = date.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  document.querySelector("#hour").textContent = hours
    .toString()
    .padStart(2, "0");
  document.querySelector("#minute").textContent = date
    .getMinutes()
    .toString()
    .padStart(2, "0");
  document.querySelector("#second").textContent = date
    .getSeconds()
    .toString()
    .padStart(2, "0");
  document.querySelector("#ampm").textContent = ampm;
}

setTime();

setInterval(setTime, 1000);
