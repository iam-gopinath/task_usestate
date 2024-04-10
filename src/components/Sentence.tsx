import { useState } from "react";

const Sentence = ({ text }: { text: string }) => {
  const [bold, setBold] = useState<boolean>(false);
  const [italic, setItalic] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [fontSize, setFontSize] = useState<number>(16);
  const [color, setColor] = useState("#000000");

  const textStyle = {
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
    fontSize: `${fontSize}px`,
    color: color
  };

  return (
    <div className="container">
      <div className="col_1">
        <button
          className=""
          onClick={() => setBold(!bold)}
        >
          {bold ? "Unbold" : "Bold"}
        </button>
        <button
          className=""
          onClick={() => setItalic(!italic)}
        >
          {italic ? "Normal" : "Italic"}
        </button>
        <button
          className=""
          onClick={() => setUnderline(!underline)}
        >
          {underline ? "Normal" : "Underline"}
        </button>
        <label htmlFor="">Font Size</label>
        <input
          type="number"
          className=""
          value={fontSize}
          onChange={(e) => setFontSize(parseInt(e.target.value))}
        />
        <label htmlFor="">Color</label>
        <input
          type="color"
          className=""
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </div>
    
      <div className="col_2">
        <p style={textStyle}>{text}</p>
      </div>
    </div>
  );
};

export default Sentence;
