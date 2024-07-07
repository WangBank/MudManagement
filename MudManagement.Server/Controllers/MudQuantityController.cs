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
        public IEnumerable<mud_quantity_wswn_view_model> get_mud_quantity_wswn(string? province)
        {

            var query = _context.mud_quantity_wswn.AsNoTracking();
            if (!string.IsNullOrEmpty(province))
            {
                query = query.Where(w => w.province == province);
            }
            var list = query.ToList().Select(s => new mud_quantity_wswn_view_model
            {
                id = s.id,
                chanliang = s.chanliang,
                chanlv = s.chanlv,
                province = s.province,
                wushuiliang = s.wushuiliang,
                year = s.year
            });
            return list;
        }


        /// <summary>
        /// 管渠污泥
        /// </summary>
        /// <returns></returns>
        [HttpGet("get_mud_quantity_gqwn")]
        public IEnumerable<mud_quantity_gqwn_view_model> get_mud_quantity_gqwn(string? province)
        {
            var query = _context.mud_quantity_gqwn.AsNoTracking();
            if (!string.IsNullOrEmpty(province))
            {
                query = query.Where(w => w.province == province);
            }
            var list = query.ToList().Select(s => new mud_quantity_gqwn_view_model
            {
                id = s.id,
                chanliang = s.chanliang,
                guandaochangdu = s.guandaochangdu,
                province = s.province,
                year = s.year
            });
            return list;
        }

    }
}

