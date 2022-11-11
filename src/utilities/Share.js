import React from "react";
import { ReactComponent as ShareSVG } from "../images/share.svg";
export default function Share() {
  const ShareClick = () => {};
  return <ShareSVG onClick={ShareClick}></ShareSVG>;
}
