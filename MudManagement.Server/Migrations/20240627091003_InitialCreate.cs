using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MudManagement.Server.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "mud_quality_dhft",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false, defaultValueSql: "uuid()"),
                    zl = table.Column<string>(type: "TEXT", nullable: false),
                    nai = table.Column<string>(type: "TEXT", nullable: false),
                    exi = table.Column<string>(type: "TEXT", nullable: false),
                    e = table.Column<string>(type: "TEXT", nullable: false),
                    wu = table.Column<string>(type: "TEXT", nullable: false),
                    fei = table.Column<string>(type: "TEXT", nullable: false),
                    en = table.Column<string>(type: "TEXT", nullable: false),
                    yingen = table.Column<string>(type: "TEXT", nullable: false),
                    bi = table.Column<string>(type: "TEXT", nullable: false),
                    benbingen = table.Column<string>(type: "TEXT", nullable: false),
                    benbingyingen = table.Column<string>(type: "TEXT", nullable: false),
                    benbingbi = table.Column<string>(type: "TEXT", nullable: false),
                    yinbingbi = table.Column<string>(type: "TEXT", nullable: false),
                    erbenbingen = table.Column<string>(type: "TEXT", nullable: false),
                    qu = table.Column<string>(type: "TEXT", nullable: false),
                    benbingbei = table.Column<string>(type: "TEXT", nullable: false),
                    category = table.Column<string>(type: "TEXT", nullable: false),
                    city = table.Column<string>(type: "TEXT", nullable: false),
                    date = table.Column<string>(type: "TEXT", nullable: false),
                    location = table.Column<string>(type: "TEXT", nullable: false),
                    longitude = table.Column<string>(type: "TEXT", nullable: false),
                    latitude = table.Column<string>(type: "TEXT", nullable: false),
                    type = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mud_quality_dhft", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "mud_quality_jcsx",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false, defaultValueSql: "uuid()"),
                    ph = table.Column<string>(type: "TEXT", nullable: false),
                    hanshuilv = table.Column<string>(type: "TEXT", nullable: false),
                    youjizhi = table.Column<string>(type: "TEXT", nullable: false),
                    hanshaliang = table.Column<string>(type: "TEXT", nullable: false),
                    category = table.Column<string>(type: "TEXT", nullable: false),
                    city = table.Column<string>(type: "TEXT", nullable: false),
                    date = table.Column<string>(type: "TEXT", nullable: false),
                    location = table.Column<string>(type: "TEXT", nullable: false),
                    longitude = table.Column<string>(type: "TEXT", nullable: false),
                    latitude = table.Column<string>(type: "TEXT", nullable: false),
                    type = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mud_quality_jcsx", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "mud_quality_kss",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false, defaultValueSql: "uuid()"),
                    hajec = table.Column<string>(type: "TEXT", nullable: false),
                    hamd = table.Column<string>(type: "TEXT", nullable: false),
                    hacd = table.Column<string>(type: "TEXT", nullable: false),
                    hajmd = table.Column<string>(type: "TEXT", nullable: false),
                    hms = table.Column<string>(type: "TEXT", nullable: false),
                    klms = table.Column<string>(type: "TEXT", nullable: false),
                    lhms = table.Column<string>(type: "TEXT", nullable: false),
                    aqms = table.Column<string>(type: "TEXT", nullable: false),
                    shs = table.Column<string>(type: "TEXT", nullable: false),
                    tms = table.Column<string>(type: "TEXT", nullable: false),
                    hbsx = table.Column<string>(type: "TEXT", nullable: false),
                    yfsx = table.Column<string>(type: "TEXT", nullable: false),
                    nfsx = table.Column<string>(type: "TEXT", nullable: false),
                    category = table.Column<string>(type: "TEXT", nullable: false),
                    city = table.Column<string>(type: "TEXT", nullable: false),
                    date = table.Column<string>(type: "TEXT", nullable: false),
                    location = table.Column<string>(type: "TEXT", nullable: false),
                    longitude = table.Column<string>(type: "TEXT", nullable: false),
                    latitude = table.Column<string>(type: "TEXT", nullable: false),
                    type = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mud_quality_kss", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "mud_quality_xdfcw",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false, defaultValueSql: "uuid()"),
                    sljw = table.Column<string>(type: "TEXT", nullable: false),
                    lys = table.Column<string>(type: "TEXT", nullable: false),
                    slys = table.Column<string>(type: "TEXT", nullable: false),
                    category = table.Column<string>(type: "TEXT", nullable: false),
                    city = table.Column<string>(type: "TEXT", nullable: false),
                    date = table.Column<string>(type: "TEXT", nullable: false),
                    location = table.Column<string>(type: "TEXT", nullable: false),
                    longitude = table.Column<string>(type: "TEXT", nullable: false),
                    latitude = table.Column<string>(type: "TEXT", nullable: false),
                    type = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mud_quality_xdfcw", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "mud_quality_zjs",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false, defaultValueSql: "uuid()"),
                    zn = table.Column<string>(type: "TEXT", nullable: false),
                    cu = table.Column<string>(type: "TEXT", nullable: false),
                    As = table.Column<string>(type: "TEXT", nullable: false),
                    Pb = table.Column<string>(type: "TEXT", nullable: false),
                    cd = table.Column<string>(type: "TEXT", nullable: false),
                    cr = table.Column<string>(type: "TEXT", nullable: false),
                    ni = table.Column<string>(type: "TEXT", nullable: false),
                    hg = table.Column<string>(type: "TEXT", nullable: false),
                    category = table.Column<string>(type: "TEXT", nullable: false),
                    city = table.Column<string>(type: "TEXT", nullable: false),
                    date = table.Column<string>(type: "TEXT", nullable: false),
                    location = table.Column<string>(type: "TEXT", nullable: false),
                    longitude = table.Column<string>(type: "TEXT", nullable: false),
                    latitude = table.Column<string>(type: "TEXT", nullable: false),
                    type = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mud_quality_zjs", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "mud_quality_zysx",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false, defaultValueSql: "uuid()"),
                    zyf = table.Column<string>(type: "TEXT", nullable: false),
                    zd = table.Column<string>(type: "TEXT", nullable: false),
                    zl = table.Column<string>(type: "TEXT", nullable: false),
                    zj = table.Column<string>(type: "TEXT", nullable: false),
                    category = table.Column<string>(type: "TEXT", nullable: false),
                    city = table.Column<string>(type: "TEXT", nullable: false),
                    date = table.Column<string>(type: "TEXT", nullable: false),
                    location = table.Column<string>(type: "TEXT", nullable: false),
                    longitude = table.Column<string>(type: "TEXT", nullable: false),
                    latitude = table.Column<string>(type: "TEXT", nullable: false),
                    type = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mud_quality_zysx", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "mud_quantity_gqwn",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false, defaultValueSql: "uuid()"),
                    guandaochangdu = table.Column<string>(type: "TEXT", nullable: false),
                    province = table.Column<string>(type: "TEXT", nullable: false),
                    year = table.Column<string>(type: "TEXT", nullable: false),
                    chanliang = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mud_quantity_gqwn", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "mud_quantity_wswn",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false, defaultValueSql: "uuid()"),
                    wushuiliang = table.Column<string>(type: "TEXT", nullable: false),
                    chanlv = table.Column<string>(type: "TEXT", nullable: false),
                    province = table.Column<string>(type: "TEXT", nullable: false),
                    year = table.Column<string>(type: "TEXT", nullable: false),
                    chanliang = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mud_quantity_wswn", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "mud_quality_dhft");

            migrationBuilder.DropTable(
                name: "mud_quality_jcsx");

            migrationBuilder.DropTable(
                name: "mud_quality_kss");

            migrationBuilder.DropTable(
                name: "mud_quality_xdfcw");

            migrationBuilder.DropTable(
                name: "mud_quality_zjs");

            migrationBuilder.DropTable(
                name: "mud_quality_zysx");

            migrationBuilder.DropTable(
                name: "mud_quantity_gqwn");

            migrationBuilder.DropTable(
                name: "mud_quantity_wswn");
        }
    }
}
