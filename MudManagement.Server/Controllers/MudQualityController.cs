using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MudManagement.Server.Db;
using MudManagement.Server.Helpers;
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
        [HttpGet("get_mud_quality_jcsx")]
        public IEnumerable<mud_quality_jcsx_view_model> get_mud_quality_jcsx(string? city, string? category)
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
            var list = query.ToList().Select(s => new mud_quality_jcsx_view_model
            {
                category = s.category,
                city = s.city,
                date = s.date,
                hanshaliang = s.hanshaliang?.TruncateToFiveIfLonger(),
                hanshuilv = s.hanshuilv?.TruncateToFiveIfLonger(),
                id = s.id,
                latitude = s.latitude,
                location = s.location,
                longitude = s.longitude,
                ph = s.ph?.TruncateToFiveIfLonger(),
                type = s.type,
                youjizhi = s.youjizhi?.TruncateToFiveIfLonger()
            });
            return list;
        }

        /// <summary>
        /// 重金属
        /// </summary>
        /// <returns></returns>
        [HttpGet("get_mud_quality_zjs")]
        public IEnumerable<mud_quality_zjs_view_model> get_mud_quality_zjs(string? city, string? category)
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
            var list = query.ToList().Select(s => new mud_quality_zjs_view_model
            {
                id = s.id,
                category = s.category,
                city = s.city,
                date = s.date,
                location = s.location,
                longitude = s.longitude,
                latitude = s.latitude,
                type = s.type,
                zn = s.zn?.TruncateToFiveIfLonger(),
                cu = s.cu?.TruncateToFiveIfLonger(),
                As = s.As?.TruncateToFiveIfLonger(),
                Pb = s.Pb?.TruncateToFiveIfLonger(),
                cd = s.cd?.TruncateToFiveIfLonger(),
                cr = s.cr?.TruncateToFiveIfLonger(),
                ni = s.ni?.TruncateToFiveIfLonger(),
                hg = s.hg?.TruncateToFiveIfLonger()
            });
            return list;
        }

        /// <summary>
        /// 多环芳烃
        /// </summary>
        /// <returns></returns>
        [HttpGet("get_mud_quality_dhft")]
        public IEnumerable<mud_quality_dhft_view_model> get_mud_quality_dhft(string? city, string? category)
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
            var list = query.ToList().Select(s => new mud_quality_dhft_view_model
            {
                benbingbei = s.benbingbei?.TruncateToFiveIfLonger(),
                category = s.category,
                city = s.city,
                date = s.date,
                e = s.e?.TruncateToFiveIfLonger(),
                exi = s.exi?.TruncateToFiveIfLonger(),
                fei = s.fei?.TruncateToFiveIfLonger(),
                id = s.id,
                location = s.location,
                longitude = s.longitude,
                latitude = s.latitude,
                nai = s.nai?.TruncateToFiveIfLonger(),
                qu = s.qu?.TruncateToFiveIfLonger(),
                benbingbi = s.benbingbi?.TruncateToFiveIfLonger(),
                wu = s.wu?.TruncateToFiveIfLonger(),
                benbingbyingen = s.benbingbyingen?.TruncateToFiveIfLonger(),
                benbingen = s.benbingen?.TruncateToFiveIfLonger(),
                benbingkyingen = s.benbingkyingen?.TruncateToFiveIfLonger(),
                bi = s.bi?.TruncateToFiveIfLonger(),
                en = s.en?.TruncateToFiveIfLonger(),
                erbenbingen = s.erbenbingen?.TruncateToFiveIfLonger(),
                type = s.type,
                yinbingbi = s.yinbingbi?.TruncateToFiveIfLonger(),
                yingen = s.yingen?.TruncateToFiveIfLonger(),
                zl = s.zl?.TruncateToFiveIfLonger(),
            });
            return list;
        }


        /// <summary>
        /// 抗生素
        /// </summary>
        /// <returns></returns>
        [HttpGet("get_mud_quality_kss")]
        public IEnumerable<mud_quality_kss_view_model> get_mud_quality_kss(string? city, string? category)
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
            var list = query.ToList().Select(s => new mud_quality_kss_view_model
            {
                id = s.id,
                shs = s.shs?.TruncateToFiveIfLonger(),
                aqms = s.aqms?.TruncateToFiveIfLonger(),
                category = s.category,
                city = s.city,
                date = s.date,
                hacd = s.hacd?.TruncateToFiveIfLonger(),
                hajec = s.hajec?.TruncateToFiveIfLonger(),
                hajmd = s.hajmd?.TruncateToFiveIfLonger(),
                hamd = s.hamd?.TruncateToFiveIfLonger(),
                hbsx = s.hbsx?.TruncateToFiveIfLonger(),
                hms = s.hms?.TruncateToFiveIfLonger(),
                klms = s.klms?.TruncateToFiveIfLonger(),
                latitude = s.latitude,
                lhms = s.lhms?.TruncateToFiveIfLonger(),
                location = s.location,
                longitude = s.longitude,
                nfsx = s.nfsx?.TruncateToFiveIfLonger(),
                tms = s.tms?.TruncateToFiveIfLonger(),
                type = s.type,
                yfsx = s.yfsx?.TruncateToFiveIfLonger()
            });
            return list;
        }

        /// <summary>
        /// 消毒副产物
        /// </summary>
        /// <returns></returns>
        [HttpGet("get_mud_quality_xdfcw")]
        public IEnumerable<mud_quality_xdfcw_view_model> get_mud_quality_xdfcw(string? city, string? category)
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
            var list = query.ToList().Select(s => new mud_quality_xdfcw_view_model
            {
                id = s.id,
                sljw = s.sljw?.TruncateToFiveIfLonger(),
                slys = s.slys?.TruncateToFiveIfLonger(),
                category = s.category,
                city = s.city,
                date = s.date,
                lys = s.lys?.TruncateToFiveIfLonger(),
                location = s.location,
                longitude = s.longitude,
                latitude = s.latitude,
                type = s.type

            });
            return list;
        }

        /// <summary>
        /// 资源属性
        /// </summary>
        /// <returns></returns>
        [HttpGet("get_mud_quality_zysx")]
        public IEnumerable<mud_quality_zysx_view_model> get_mud_quality_zysx(string? city, string? category)
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
            var list = query.ToList().Select(s => new mud_quality_zysx_view_model
            {
                id = s.id,
                category = s.category,
                city = s.city,
                date = s.date,
                latitude = s.latitude,
                location = s.location,
                longitude = s.longitude,
                type = s.type,
                zd = s.zd?.TruncateToFiveIfLonger(),
                zl = s.zl?.TruncateToFiveIfLonger(),
                zj = s.zj?.TruncateToFiveIfLonger(),
                zyf = s.zyf?.TruncateToFiveIfLonger(),
            });
            return list;
        }


    }
}

