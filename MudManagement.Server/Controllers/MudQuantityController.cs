using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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

        /// <summary>
        /// 污水污泥
        /// </summary>
        /// <returns></returns>
        [HttpGet("get_mud_quantity_wswn")]
        public IEnumerable<mud_quantity_wswn> get_mud_quantity_wswn(string province)
        {
            var list = _context.mud_quantity_wswn.AsNoTracking().Where(w=>w.province == province).ToList();
            return list;
        }


        /// <summary>
        /// 管渠污泥
        /// </summary>
        /// <returns></returns>
        [HttpGet("get_mud_quantity_gqwn")]
        public IEnumerable<mud_quantity_gqwn> get_mud_quantity_gqwn(string province)
        {
            var list = _context.mud_quantity_gqwn.AsNoTracking().Where(w => w.province == province).ToList();
            return list;
        }

    }
}

