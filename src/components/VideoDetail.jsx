import React from "react";
import { useLocation } from "react-router-dom";

const VideoDetail = () => {
  const { pathname } = useLocation();
  return <div>{pathname}</div>;
};

export default VideoDetail;
