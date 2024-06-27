using Microsoft.AspNetCore.Mvc;
using MudManagement.Server.Db;
using MudManagement.Server.Models;

namespace MudManagement.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MudQuantityController : ControllerBase
    {

        private readonly ILogger<MudQuantityController> _logger;
        private readonly MudDbContext _context;

        public MudQuantityController(ILogger<MudQuantityController> logger, MudDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet(Name = "GetBaseQuantity")]
        public IEnumerable<string> GetChanlv()
        {
            return new List<string> { "value1", "value2" };
        }

    }
}

