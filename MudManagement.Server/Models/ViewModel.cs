using MudManagement.Server.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace MudManagement.Server.Models
{
    public class base_quantity_view_model
    {
        public string id { get; set; }
        public string? province { get; set; }
        public string? year { get; set; }
        public float? chanliang { get; set; }
        public float? chanlv { get; set; }
    }

    public class mud_quantity_wswn_view_model : base_quantity_view_model
    {
        public float? wushuiliang { get; set; }
        public float? chanlv { get; set; }
    }

    public class mud_quantity_gqwn_view_model : base_quantity_view_model
    {
        public float? guandaochangdu { get; set; }
    }

    public class mud_quantity_wswn_czqk_view_model : base_quantity_view_model
    {
        public float? zj { get; set; }
        public float? tdly { get; set; }
        public float? jcly { get; set; }
        public float? fs { get; set; }
        public float? tm { get; set; }
        public float? qt { get; set; }
    }

    public class base_quality_view_model
    {
        public string id { get; set; }
        public string? category { get; set; }
        public string? city { get; set; }
        public string? date { get; set; }
        public string? location { get; set; }
        public string? longitude { get; set; }
        public string? latitude { get; set; }
        public string? type { get; set; }
    }

    public class mud_quality_jcsx_view_model : base_quality_view_model
    {
        public string? ph { get; set; }
        public string? hanshuilv { get; set; }
        public string? youjizhi { get; set; }
        public string? hanshaliang { get; set; }
    }

    public class mud_quality_zjs_view_model : base_quality_view_model
    {
        public string? zn { get; set; }
        public string? cu { get; set; }
        public string? As { get; set; }
        public string? Pb { get; set; }
        public string? cd { get; set; }
        public string? cr { get; set; }
        public string? ni { get; set; }
        public string? hg { get; set; }
    }

    public class mud_quality_dhft_view_model : base_quality_view_model
    {
        public string? zl { get; set; }
        public string? nai { get; set; }
        public string? exi { get; set; }
        public string? e { get; set; }
        public string? wu { get; set; }
        public string? fei { get; set; }
        public string? en { get; set; }
        public string? yingen { get; set; }
        public string? bi { get; set; }
        public string? benbingen { get; set; }
        public string? benbingbyingen { get; set; }
        public string? benbingkyingen { get; set; }
        public string? benbingbi { get; set; }
        public string? yinbingbi { get; set; }
        public string? erbenbingen { get; set; }
        public string? qu { get; set; }
        public string? benbingbei { get; set; }
    }

    public class mud_quality_kss_view_model : base_quality_view_model
    {
        public string? hajec { get; set; }
        public string? hamd { get; set; }
        public string? hacd { get; set; }
        public string? hajmd { get; set; }
        public string? hms { get; set; }
        public string? klms { get; set; }
        public string? lhms { get; set; }
        public string? aqms { get; set; }
        public string? shs { get; set; }
        public string? tms { get; set; }
        public string? hbsx { get; set; }
        public string? yfsx { get; set; }
        public string? nfsx { get; set; }
    }

    public class mud_quality_xdfcw_view_model : base_quality_view_model
    {
        public string? sljw { get; set; }
        public string? lys { get; set; }
        public string? slys { get; set; }
    }

    public class mud_quality_zysx_view_model : base_quality_view_model
    {
        public string? zyf { get; set; }
        public string? zd { get; set; }
        public string? zl { get; set; }
        public string? zj { get; set; }
    }
}
