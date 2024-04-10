interface InputProps {
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, value, onChange }: InputProps) => {
  return <input type={type} value={value} onChange={onChange} />;
};

export default Input;
