import React from "react";
import chroma from "chroma-js";

const colors = [
  {
    color: "Red",
    description: "A vibrant color often associated with passion and energy.",
    hex: chroma("red").hex(),
    rgb: chroma("red").rgb().join(", "),
  },
  {
    color: "Green",
    description: "The color of nature, symbolizing growth and harmony.",
    hex: chroma("green").hex(),
    rgb: chroma("green").rgb().join(", "),
  },
  {
    color: "Blue",
    description: "A cool color often associated with calm and trust.",
    hex: chroma("blue").hex(),
    rgb: chroma("blue").rgb().join(", "),
  },
  {
    color: "Yellow",
    description: "A bright color associated with happiness and optimism.",
    hex: chroma("yellow").hex(),
    rgb: chroma("yellow").rgb().join(", "),
  },
  {
    color: "Purple",
    description: "A color that represents creativity and mystery.",
    hex: chroma("purple").hex(),
    rgb: chroma("purple").rgb().join(", "),
  },
  {
    color: "Purple",
    description: "A color that represents creativity and mystery.",
    hex: chroma("purple").hex(),
    rgb: chroma("purple").rgb().join(", "),
  },
  {
    color: "Purple",
    description: "A color that represents creativity and mystery.",
    hex: chroma("purple").hex(),
    rgb: chroma("purple").rgb().join(", "),
  },
  {
    color: "Purple",
    description: "A color that represents creativity and mystery.",
    hex: chroma("purple").hex(),
    rgb: chroma("purple").rgb().join(", "),
  },
];

const ColorDisplay = () => {
  return (
    <div>
      <div style={{display: "flex",
    
    flexWrap:'wrap',}}>
        {colors.map((colorObj, index) => (
          <div key={index}>
          <div
            
            style={{
              ...styles.colorBox,
              backgroundColor: colorObj.hex,
            }}
          >
            {/* {`${colorObj.color} (${colorObj.rgb})`} */}
          </div>
          <p>{colorObj.color}</p>
          <p>{colorObj.hex}</p>
          <p>{colorObj.rgb}</p>
          </div>
        ))}
      </div>
      <div style={styles.container}>
          {colors.map((colorTxt, index) => (
            <div key={index}>
              
            </div>
          ))}
        </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    
    
    // flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px",
  },
  colorBox: {
    flexWrap:'wrap',
    width: "150px",
    height: "100px",
    margin: "10px",
    padding: "5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    fontWeight: "bold",
    borderRadius: "5px",
  },
};

export default ColorDisplay;
