import React from "react";

export default function CalculateDate(date) {
  const today = new Date().getTime();
  const currentDate = new Date(date).getTime();
  let difference = today - currentDate;
  let calculate = difference / (1000 * 3600 * 24);
  if (calculate > 360) {
    calculate = `${Math.floor(calculate / 360)} years`;
  } else if (calculate < 1) {
    calculate = `${Math.floor(calculate * 24)} hours`;
  } else {
    calculate = `${Math.floor(calculate)} days`;
  }
  return `Posted ${calculate} ago`;
}
