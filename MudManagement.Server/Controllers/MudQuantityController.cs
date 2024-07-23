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
        public IEnumerable<mud_quantity_wswn_view_model> get_mud_quantity_wswn(string? province,string? year)
        {

            var query = _context.mud_quantity_wswn.AsNoTracking();
            if (!string.IsNullOrEmpty(province))
            {
                query = query.Where(w => w.province == province);
            }
            if (!string.IsNullOrEmpty(year))
                {
                query = query.Where(w => w.year == year);
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
        /// 污水污泥 处置情况
        /// </summary>
        /// <returns></returns>
        [HttpGet("get_mud_quantity_wswn_czqk")]
        public IEnumerable<mud_quantity_wswn_czqk_view_model> get_mud_quantity_wswn_czqk(string? province, string? year)
        {

            var query = _context.mud_quantity_wswn_czqk.AsNoTracking();
            if (!string.IsNullOrEmpty(province))
            {
                query = query.Where(w => w.province == province);
            }
            if (!string.IsNullOrEmpty(year))
            {
                query = query.Where(w => w.year == year);
            }
            var list = query.ToList().Select(s => new mud_quantity_wswn_czqk_view_model
            {
                id = s.id,
                chanliang = s.chanliang,
                province = s.province,
                year = s.year,
                zj = s.zj,
                tdly = s.tdly,
                jcly = s.jcly,
                fs = s.fs,
                tm = s.tm,
                qt = s.qt
            });
            return list;
        }


        /// <summary>
        /// 管渠污泥
        /// </summary>
        /// <returns></returns>
        [HttpGet("get_mud_quantity_gqwn")]
        public IEnumerable<mud_quantity_gqwn_view_model> get_mud_quantity_gqwn(string? province, string? year,float? chanlv)
        {
            var query = _context.mud_quantity_gqwn.AsNoTracking();
            if (!string.IsNullOrEmpty(province))
            {
                query = query.Where(w => w.province == province);
            }
            if (!string.IsNullOrEmpty(year))
            {
                query = query.Where(w => w.year == year);
            }
            if (chanlv.HasValue)
            {
                query = query.Where(w => w.chanlv == chanlv);
            }
            var list = query.ToList().Select(s => new mud_quantity_gqwn_view_model
            {
                id = s.id,
                chanliang = s.chanliang,
                guandaochangdu = s.guandaochangdu,
                province = s.province,
                year = s.year,
                chanlv = s.chanlv
            });
            return list;
        }

    }
}

