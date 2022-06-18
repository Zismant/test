'use strict';

function formatDate(date) {
  
  let dif = new Date() - date;
  let difSec = Math.round(dif / 1000);

  if (difSec < 1) {return 'прямо сейчас';}

  let difMinut = difSec / 60;
  if (difMinut < 1) {return `${difSec} сек. назад`;}

  let difHour = difMinut / 60;
  if (difHour < 1) {return `${difMinut} мин. назад`;}

  let d = {};
  d.date = date.getDate();
  d.date = d.date < 10 ? '0' + d.date.toString() : d.date;
  d.month = date.getMonth() + 1;
  d.month = d.month < 10 ? '0' + d.month.toString() : d.month;
  d.year = date.getFullYear().toString().slice(2);
  d.hour = date.getHours();
  d.hour = d.hour < 10 ? '0' + d.hour.toString() : d.hour;
  d.minut = date.getMinutes();
  d.minut = d.minut < 10 ? '0' + d.minut.toString() : d.minut;

  return `${d.date}.${d.month}.${d.year} ${d.hour}:${d.minut}`;
}

console.log(formatDate(new Date(new Date() - 1)));
console.log(formatDate(new Date(new Date() - 30 * 1000)));
console.log(formatDate(new Date(new Date() - 5 * 60 * 1000)));
console.log(formatDate(new Date(new Date() - 84600 * 1000 )));



