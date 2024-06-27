using Microsoft.AspNetCore.Mvc;
using MudManagement.Server.Db;

namespace MudManagement.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MudQualityController : ControllerBase
    {

        private readonly ILogger<MudQualityController> _logger;
        private readonly MudDbContext _context;


        public MudQualityController(ILogger<MudQualityController> logger, MudDbContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet(Name = "GetBaseQuality")]
        public IEnumerable<string> GetBaseQuality()
        {
            return new List<string> { "value1", "value2" };
        }
    }
}

