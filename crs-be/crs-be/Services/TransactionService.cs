using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using crs_be.Models;

namespace crs_be.Services
{
    public class TransactionService
    {
        private readonly string _filePath = "transactions.json";
        private List<Transaction> _transactions;

        public TransactionService()
        {
            _transactions = LoadTransactionsFromFile();
        }

        // Method to get all transactions
        public List<Transaction> GetTransactions()
        {
            return _transactions;
        }

        // Method to get a transaction by ID
        public Transaction GetTransactionById(string id)
        {
            return _transactions.Find(t => t.Id == id);
        }

        // Method to approve a transaction
        public bool ApproveTransaction(string id)
        {
            var transaction = _transactions.Find(t => t.Id == id);
            if (transaction != null)
            {
                transaction.Status = "compliant";
                SaveTransactionsToFile();
                return true;
            }
            return false;
        }

        // Method to reject a transaction
        public bool RejectTransaction(string id)
        {
            var transaction = _transactions.Find(t => t.Id == id);
            if (transaction != null)
            {
                transaction.Status = "non-compliant";
                SaveTransactionsToFile();
                return true;
            }
            return false;
        }

        // Load transactions from the JSON file
        private List<Transaction> LoadTransactionsFromFile()
        {
            if (!File.Exists(_filePath))
            {
                // If file does not exist, return an empty list
                return new List<Transaction>();
            }

            var jsonData = File.ReadAllText(_filePath);
            var root = JsonSerializer.Deserialize<TransactionsRoot>(jsonData, new JsonSerializerOptions
            {
                PropertyNameCaseInsensitive = true
            });

            return root?.Transactions ?? new List<Transaction>();
        }

        private void SaveTransactionsToFile()
        {
            var root = new TransactionsRoot { Transactions = _transactions };
            var jsonData = JsonSerializer.Serialize(root, new JsonSerializerOptions
            {
                WriteIndented = true
            });

            File.WriteAllText(_filePath, jsonData);
        }



        public class TransactionsRoot
        {
            public List<Transaction> Transactions { get; set; }
        }
    }
}
