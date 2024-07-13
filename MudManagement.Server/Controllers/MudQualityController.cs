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
            var query = _context.mud_quality_jcsx.AsNoTracking().Where(w=> !string.IsNullOrEmpty(w.youjizhi) || !string.IsNullOrEmpty(w.hanshaliang) || !string.IsNullOrEmpty(w.hanshuilv) || !string.IsNullOrEmpty(w.ph));
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
                date = s.date?.TruncateToFiveIfLonger(10),
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
            var query = _context.mud_quality_zjs.AsNoTracking().Where(w=> !string.IsNullOrEmpty(w.zn) || !string.IsNullOrEmpty(w.cu) || !string.IsNullOrEmpty(w.As) || !string.IsNullOrEmpty(w.Pb) || !string.IsNullOrEmpty(w.cd) || !string.IsNullOrEmpty(w.cr) || !string.IsNullOrEmpty(w.ni) || !string.IsNullOrEmpty(w.hg) );
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
                date = s.date?.TruncateToFiveIfLonger(10),
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
            var query = _context.mud_quality_dhft.AsNoTracking().Where(w =>  !string.IsNullOrEmpty(w.e) || !string.IsNullOrEmpty(w.exi) || !string.IsNullOrEmpty(w.fei) || !string.IsNullOrEmpty(w.nai) || !string.IsNullOrEmpty(w.qu) || !string.IsNullOrEmpty(w.benbingbei) || !string.IsNullOrEmpty(w.wu)
                || !string.IsNullOrEmpty(w.benbingbyingen) || !string.IsNullOrEmpty(w.benbingen) || !string.IsNullOrEmpty(w.benbingkyingen) || !string.IsNullOrEmpty(w.bi) || !string.IsNullOrEmpty(w.en) || !string.IsNullOrEmpty(w.erbenbingen) || !string.IsNullOrEmpty(w.yinbingbi) || !string.IsNullOrEmpty(w.yingen) || !string.IsNullOrEmpty(w.zl)
            );
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
                date = s.date?.TruncateToFiveIfLonger(10),
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
            var query = _context.mud_quality_kss.AsNoTracking().Where(w=>
                !string.IsNullOrEmpty(w.shs) || !string.IsNullOrEmpty(w.aqms) || !string.IsNullOrEmpty(w.hacd) || !string.IsNullOrEmpty(w.hajec) || !string.IsNullOrEmpty(w.hajmd) || !string.IsNullOrEmpty(w.hamd) || !string.IsNullOrEmpty(w.hbsx) || !string.IsNullOrEmpty(w.hms) || !string.IsNullOrEmpty(w.klms) || !string.IsNullOrEmpty(w.lhms) || !string.IsNullOrEmpty(w.nfsx) || !string.IsNullOrEmpty(w.tms) || !string.IsNullOrEmpty(w.yfsx)
            );
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
                date = s.date?.TruncateToFiveIfLonger(10),
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
            var query = _context.mud_quality_xdfcw.AsNoTracking().Where(
                w=>
                !string.IsNullOrEmpty(w.sljw) || !string.IsNullOrEmpty(w.slys) || !string.IsNullOrEmpty(w.lys)
                );
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
                date = s.date?.TruncateToFiveIfLonger(10),
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
            var query = _context.mud_quality_zysx.AsNoTracking().Where(
                w=>
                !string.IsNullOrEmpty(w.zd) || !string.IsNullOrEmpty(w.zl) || !string.IsNullOrEmpty(w.zj) || !string.IsNullOrEmpty(w.zyf)
                );
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
                date = s.date?.TruncateToFiveIfLonger(10),
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

