using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MudManagement.Server.Migrations
{
    /// <inheritdoc />
    public partial class updategqwn : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<float>(
                name: "chanlv",
                table: "mud_quantity_gqwn",
                type: "REAL",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "chanlv",
                table: "mud_quantity_gqwn");
        }
    }
}
