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
  status,
  linkedLevel,
  linkedToTransactionId,
  linkedTransactionIds,
  handleStatusChange,
}) => {
  return (
    <div className="card">
      <div className={`container-card bg-box`}>
        <div className="Transaction-details">
          <p className="card-title">{id}</p>
          <p className="card-description">{date}</p>
          <p className="card-description">{buyerId}</p>
          <p className="card-description">{sellerId}</p>
          <p className="card-description">{investmentType}</p>
          <p className="card-description">{amount}</p>
          <p className="card-description">{flaggedReason}</p>
          <p className="card-description">{status}</p>
          <p className="card-description">{linkedLevel}</p>
          <p className="card-description">{linkedToTransactionId}</p>
          <p className="card-description">{linkedTransactionIds}</p>
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
