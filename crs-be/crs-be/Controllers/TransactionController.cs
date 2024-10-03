using crs_be.Models;
using crs_be.Services;
using Microsoft.AspNetCore.Mvc;

namespace crs_be.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TransactionController : ControllerBase
    {
        private readonly TransactionService _transactionService;

        public TransactionController(TransactionService transactionService)
        {
            _transactionService = transactionService;
        }

        // Get all transactions
        [HttpGet]
        public ActionResult<List<Transaction>> GetTransactions()
        {
            return _transactionService.GetTransactions();
        }

        // Get a single transaction by ID
        [HttpGet("{id}")]
        public ActionResult<Transaction> GetTransactionById(string id)
        {
            var transaction = _transactionService.GetTransactionById(id);
            if (transaction == null)
            {
                return NotFound();
            }
            return transaction;
        }

        // Approve a transaction
        [HttpPost("{id}/approve")]
        public IActionResult ApproveTransaction(string id)
        {
            if (_transactionService.ApproveTransaction(id))
            {
                return Ok();
            }
            return NotFound();
        }

        // Reject a transaction
        [HttpPost("{id}/reject")]
        public IActionResult RejectTransaction(string id)
        {
            if (_transactionService.RejectTransaction(id))
            {
                return Ok();
            }
            return NotFound();
        }
    }
}
