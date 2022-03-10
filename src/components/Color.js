import { useState, useEffect } from "react";
import classes from "./Color.module.css"

const Color = ({ url }) => {

    const [colorData, setColorData] = useState([])

    useEffect(() => {
      if(url === "") {
        setColorData([])
        return
      }
        const getColorData = async () => {
            const results = await fetch(url)
            const data = await results.json();
            setColorData(data.colors)
        }
        getColorData()
    },[url])    

  
    return (
        <div className={classes.pageContainer}>
          {colorData.map((data, index) => {
            return (
              <div key={index} className={classes.container}>
                <div
                  className={classes.colorBox}
                  style={{ backgroundColor: data.hex }}
                ></div>
                <p>{data.hex}</p>
                <p>{data.color}</p>
              </div>
            );
          })}
        </div>
    );
};

export default Color;
