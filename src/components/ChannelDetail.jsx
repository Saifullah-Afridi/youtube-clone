import React from "react";
import { useParams } from "react-router-dom";

const ChannelDetail = () => {
  const { id } = useParams();

  return <div>ChannelDetail</div>;
};

export default ChannelDetail;
