using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MudManagement.Server.Db;
using MudManagement.Server.Models;

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


        /// <summary>
        /// 基础属性
        /// </summary>
        /// <returns></returns>
        [HttpGet( "get_mud_quality_jcsx")]
        public IEnumerable<mud_quality_jcsx> get_mud_quality_jcsx(string? city,string? category)
        {
            var query = _context.mud_quality_jcsx.AsNoTracking();
            if (!string.IsNullOrEmpty(city))
            {
                query = query.Where(w => w.city == city);
            }
            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(w => w.category == category);
            }
            var list = query.ToList();
            return list;
        }

        /// <summary>
        /// 重金属
        /// </summary>
        /// <returns></returns>
        [HttpGet( "get_mud_quality_zjs")]
        public IEnumerable<mud_quality_zjs> get_mud_quality_zjs(string? city, string? category)
        {
            var query = _context.mud_quality_zjs.AsNoTracking();
            if (!string.IsNullOrEmpty(city))
            {
                query = query.Where(w => w.city == city);
            }
            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(w => w.category == category);
            }
            var list = query.ToList();
            return list;
        }

        /// <summary>
        /// 多环芳烃
        /// </summary>
        /// <returns></returns>
        [HttpGet( "get_mud_quality_dhft")]
        public IEnumerable<mud_quality_dhft> get_mud_quality_dhft(string? city, string? category)
        {
            var query = _context.mud_quality_dhft.AsNoTracking();
            if (!string.IsNullOrEmpty(city))
            {
                query = query.Where(w => w.city == city);
            }
            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(w => w.category == category);
            }
            var list = query.ToList();
            return list;
        }


        /// <summary>
        /// 抗生素
        /// </summary>
        /// <returns></returns>
        [HttpGet( "get_mud_quality_kss")]
        public IEnumerable<mud_quality_kss> get_mud_quality_kss(string? city, string? category)
        {
            var query = _context.mud_quality_kss.AsNoTracking();
            if (!string.IsNullOrEmpty(city))
            {
                query = query.Where(w => w.city == city);
            }
            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(w => w.category == category);
            }
            var list = query.ToList();
            return list;
        }

        /// <summary>
        /// 消毒副产物
        /// </summary>
        /// <returns></returns>
        [HttpGet( "get_mud_quality_xdfcw")]
        public IEnumerable<mud_quality_xdfcw> get_mud_quality_xdfcw(string? city, string? category)
        {
            var query = _context.mud_quality_xdfcw.AsNoTracking();
            if (!string.IsNullOrEmpty(city))
            {
                query = query.Where(w => w.city == city);
            }
            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(w => w.category == category);
            }
            var list = query.ToList();
            return list;
        }

        /// <summary>
        /// 资源属性
        /// </summary>
        /// <returns></returns>
        [HttpGet( "get_mud_quality_zysx")]
        public IEnumerable<mud_quality_zysx> get_mud_quality_zysx(string? city, string? category)
        {
            var query = _context.mud_quality_zysx.AsNoTracking();
            if (!string.IsNullOrEmpty(city))
            {
                query = query.Where(w => w.city == city);
            }
            if (!string.IsNullOrEmpty(category))
            {
                query = query.Where(w => w.category == category);
            }
            var list = query.ToList();
            return list;
        }


    }
}

