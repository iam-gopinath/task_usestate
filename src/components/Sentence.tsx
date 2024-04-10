import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

interface SentenceProps {
  text: string;
}

const Sentence = ({ text }: SentenceProps) => {
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
        <Button onClick={() => setBold(!bold)} text={bold ? "Unbold" : "Bold"} />
        <Button onClick={() => setItalic(!italic)} text={italic ? "Normal" : "Italic"} />
        <Button onClick={() => setUnderline(!underline)} text={underline ? "Normal" : "Underline"} />
        <label htmlFor="">Font Size</label>
        <Input type="number" value={fontSize.toString()} onChange={(e) => setFontSize(parseInt(e.target.value))} />
        <label htmlFor="">Color</label>
        <Input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      </div>
    
      <div className="col_2">
        <p style={textStyle}>{text}</p>
      </div>
    </div>
  );
};

export default Sentence;
