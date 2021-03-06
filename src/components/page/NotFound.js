import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const [count, setCount] = useState(3);
  const navigation = useNavigate();
  
  const countRef = useRef(null);

  

  useEffect(() => {
    countRef.current = setInterval(() => {
      
      if (count === 0) {
        navigation("/");
      }
      setCount(count - 1);
    }, 1000);

    return () => {
      clearInterval(countRef.current);
    };
  }, [count]);
  return (
    <div className="bg-slate-50 py-20 font-[Roboto]">
      <div className="flex item-center justify-center ">
        <div className="text-center">
          <img
            src="https://lh3.googleusercontent.com/XgEwa2HvKXekl8B_ZtYa45fM17dXbHLeQpUS9DP9wLzVNuVry88JZt00ZcVTGdIXG9c-2EpW1OYG1FOTgA=rw"
            className="mx-auto"
          />
          <p className="my-5">
            
            Trang không tồn tại. Bạn sẽ được đưa về trang chủ sau {count}s
          </p>
          <Link
            to="/"
            className="px-5 py-1 bg-[#1435c3] text-white rounded-md mx-auto"
          >
            Quay về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
