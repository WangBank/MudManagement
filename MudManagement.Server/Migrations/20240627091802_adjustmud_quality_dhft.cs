using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MudManagement.Server.Migrations
{
    /// <inheritdoc />
    public partial class adjustmud_quality_dhft : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "benbingyingen",
                table: "mud_quality_dhft",
                newName: "benbingkyingen");

            migrationBuilder.AddColumn<string>(
                name: "benbingbyingen",
                table: "mud_quality_dhft",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "benbingbyingen",
                table: "mud_quality_dhft");

            migrationBuilder.RenameColumn(
                name: "benbingkyingen",
                table: "mud_quality_dhft",
                newName: "benbingyingen");
        }
    }
}
