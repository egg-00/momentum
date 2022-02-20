const clock = document.querySelector("#clock");
const clockHhmm = document.querySelector("#clock__hhmm");
const clockAmpm = document.querySelector("#ampm");
const clockSec = document.querySelector("#sec");
const dayYmd =  document.querySelector("#yyyymmdd");

function getTime() {
  const date = new Date();
  const hour = String(date.getHours() % 12).padStart(2, "0");
  const ampm = date.getHours() >= 12 ? "pm" : "am";
  // hour = hour % 12;
  // hour = hour ? hours : 12;
  const min = String(date.getMinutes()).padStart(2, "0");
  const sec = String(date.getSeconds()).padStart(2, "0");
  clockHhmm.innerText = `${hour}:${min}`;
  clockAmpm.innerText = `${ampm}`;
  clockSec.innerText = `${sec}`;
  // clock.innerText = `${hour}:${min}:${sec}`;
}

function getToday(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate()
  const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'];
  const week = WEEKDAY[date.getDay()];
  dayYmd.innerText = `${year}` + "년 " + `${month}` + "월 " + `${day}` + "일 " + `${week}` + "요일";
}

getTime();
getToday();
setInterval(getTime, 1000);
setInterval(getToday, 1000);
