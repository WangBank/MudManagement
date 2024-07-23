using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MudManagement.Server.Migrations
{
    /// <inheritdoc />
    public partial class addmud_quantity_wswn_czqk : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "mud_quantity_wswn_czqk",
                columns: table => new
                {
                    id = table.Column<string>(type: "TEXT", nullable: false, defaultValueSql: "uuid()"),
                    zj = table.Column<float>(type: "REAL", nullable: true),
                    tdly = table.Column<float>(type: "REAL", nullable: true),
                    jcly = table.Column<float>(type: "REAL", nullable: true),
                    fs = table.Column<float>(type: "REAL", nullable: true),
                    tm = table.Column<float>(type: "REAL", nullable: true),
                    qt = table.Column<float>(type: "REAL", nullable: true),
                    province = table.Column<string>(type: "TEXT", nullable: true),
                    year = table.Column<string>(type: "TEXT", nullable: true),
                    chanliang = table.Column<float>(type: "REAL", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_mud_quantity_wswn_czqk", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "mud_quantity_wswn_czqk");
        }
    }
}
