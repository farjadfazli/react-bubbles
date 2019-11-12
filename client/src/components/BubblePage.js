import React, { useState, useEffect } from "react";
import axios from "axios";
import api from '../utils/axiosWithAuth'
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    api().get('/api/colors')
      .then(result => {
        console.log(result)
        setColorList(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [refresh])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} refresh={refresh} setRefresh={setRefresh} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
