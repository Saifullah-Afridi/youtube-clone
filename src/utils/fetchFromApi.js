import axios from "axios";
const baseUrl = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResults: "50",
  },
  headers: {
    "x-rapidapi-key": "a6280d72a9mshb2a11c1568f91e8p1cdbabjsnabaaf7cd623a",
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchData = async (url) => {
  const { data } = await axios.get(`${baseUrl}/${url}`, options);
  return data;
};
