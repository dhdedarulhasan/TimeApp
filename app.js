const startTimeBtn = document.querySelector("#startTime");
const showTime = document.querySelector("#showTime");

startTimeBtn.addEventListener("click", startTimeHandler);

function startTimeHandler() {
  const date = new Date(),
    hours = (date.getHours() < 10 ? "0" : "") + date.getHours(),
    minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
    secound = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();

  const timeFormat = `${hours}:${minutes}:${secound}`;
  showTime.textContent = timeFormat;
  setTimeout(startTimeHandler, 1000);
}
