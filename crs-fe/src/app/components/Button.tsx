import React from "react";
import axios from "axios";

interface ButtonProps {
  transactionId: string;
  handleStatusChange: Function;
  name: string;
}

const Button: React.FC<ButtonProps> = ({
  handleStatusChange,
  transactionId,
  name,
}) => {
  const handleClick = async () => {
    try {
      const response = await axios.post(
        `https://localhost:7128/api/Transaction/${transactionId}/${name}`
      );
      if (response.status === 200) {
        handleStatusChange();
        alert(`Transaction ${name} successfully!`);
      }
    } catch (error) {
      console.error(`Error ${name}ing the transaction:`, error);
      alert(`Failed to ${name} the transaction.`);
    }
  };

  const toTitleCase = (str: string): string =>
    str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <button onClick={handleClick} className={`${name}-btn`}>
      {toTitleCase(name)}
    </button>
  );
};

export default Button;
