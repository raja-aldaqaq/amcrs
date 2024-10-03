import React from "react";
import Button from "./Button";

interface TransactionProps {
  id: string;
  date: string;
  buyerId: string;
  sellerId: string;
  investmentType: string;
  amount: number;
  flaggedReason?: string;
  status: string;
  linkedLevel: number;
  linkedToTransactionId: string | null;
  linkedTransactionIds?: string[] | null;
  handleStatusChange: Function;
}

const TransactionCard: React.FC<TransactionProps> = ({
  id,
  date,
  buyerId,
  sellerId,
  investmentType,
  amount,
  flaggedReason,
  handleStatusChange,
}) => {
  const formattedDate = new Date(date).toLocaleDateString("en-GB");
  return (
    <div className="card">
      <div className={`container-card bg-box`}>
        <div className="Transaction-details">
          <p className="card-title">ID: {id}</p>
          <p className="card-description">Buyer: {buyerId}</p>
          <p className="card-description">Seller: {sellerId}</p>
          <p className="card-description">Date: {formattedDate}</p>
          <p className="card-description">Asset: {investmentType}</p>
          <p className="card-description">Value: ${amount}</p>
          <p className="card-description">flag Reason: {flaggedReason}</p>
        </div>
        <div className="btn-container">
          <Button
            handleStatusChange={handleStatusChange}
            transactionId={id}
            name="approve"
          />
          <Button
            handleStatusChange={handleStatusChange}
            transactionId={id}
            name="reject"
          />
        </div>
      </div>
    </div>
  );
};

export default TransactionCard;
