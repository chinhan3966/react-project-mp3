import React from "react";
import Album from "./Album";
import ListItem1 from "./ListItem1";
import img1 from "../../assets/img/pine.jpg";
import img2 from "../../assets/img/coconut.jpg";
import img3 from "../../assets/img/orange.jpg";
import img4 from "../../assets/img/nature1.jpg";
import img5 from "../../assets/img/chali.jpg";
import img6 from "../../assets/img/justin.jpg";
import img7 from "../../assets/img/gd.jpg";
import img8 from "../../assets/img/rose.png";
import { data5, data6 } from "../../../src/data";
// import { data, data1 } from "../../dataSong";
import ListMusic from "./ListMusic";
import { useContext } from "react";
import Song from "./Context";
const ListContainer = () => {
  const { dataSong } = useContext(Song);

  // useEffect(() => {
  //   //do something

  //   return () =>{
  //     //handle unmount
  //   }

  // },[])

  return (
    <div>
      {/* {console.log(data5, data6)}  */}
      <ListItem1 title="Global Top 50" data={data5} />
      <ListItem1 title="Song You Might Like" data={data6} />
      <ListMusic />
    </div>
  );
};

export default ListContainer;
