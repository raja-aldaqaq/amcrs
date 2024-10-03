"use client";
import React, { useEffect, useState } from "react";
import TransactionCard from "./TransactionCard";
import axios from "axios";

export interface Transaction {
  id: string;
  date: string;
  buyerId: string;
  sellerId: string;
  investmentType: string;
  amount: number;
  flaggedReason: string;
  status: string;
  linkedLevel: number;
  linkedToTransactionId: string | null;
  linkedTransactionIds: string[];
}
const TransactionsList: React.FC = (props) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getTransactions = async () => {
    try {
      let res = await axios.get("https://localhost:7128/api/Transaction");
      console.log("Response data:", res.data);
      setTransactions(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setError("Failed to fetch transactions");
      setLoading(false);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

  const handleStatusChange = () => {
    getTransactions();
  };

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p>Error: {error}</p>;
  const sortedTransactions = transactions.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {sortedTransactions.map((transaction) =>
        transaction.status !== "compliant" &&
        transaction.status !== "non-compliant" ? (
          <TransactionCard
            key={transaction.id}
            id={transaction.id}
            date={transaction.date}
            buyerId={transaction.buyerId}
            sellerId={transaction.sellerId}
            investmentType={transaction.investmentType}
            amount={transaction.amount}
            flaggedReason={transaction.flaggedReason}
            status={transaction.status}
            linkedLevel={transaction.linkedLevel}
            linkedToTransactionId={transaction.linkedToTransactionId}
            linkedTransactionIds={transaction.linkedTransactionIds}
            handleStatusChange={handleStatusChange}
          />
        ) : null
      )}
    </>
  );
};

export default TransactionsList;
