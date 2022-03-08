import React, { useEffect, useState } from "react";
import axios from "axios";

const useGetData = (url, query) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    try {
      async function fetchData() {
        let res = await axios({
          method: "GET",
          url: url,
          params: {
            part: "snippet",
            maxResults: "20",
            key: "AIzaSyAwZKOK8Pxi9K-NiawgeQ-cn3shAGR0XQI",
            q: query,
          },
        });

        if (res && res.data && res.data.items) {
          setData(res.data.items);
        }
      }
      fetchData();
    } catch {
      console.log("err");
    }
  }, []);

  return {
    data,
  };
};

export default useGetData;
