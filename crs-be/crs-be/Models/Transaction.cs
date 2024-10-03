namespace crs_be.Models
{
    public class Transaction
    {
        public string Id { get; set; }
        public string Date { get; set; }
        public string BuyerId { get; set; }
        public string SellerId { get; set; }
        public string InvestmentType { get; set; }
        public decimal Amount { get; set; }
        public string FlaggedReason { get; set; }
        public string Status { get; set; }
        public int LinkedLevel { get; set; }
        public string? LinkedToTransactionId { get; set; }
        public List<int> LinkedTransactionIds { get; set; }
    }
}
