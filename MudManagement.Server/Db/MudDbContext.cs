using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using MudManagement.Server.Models;
using System.Reflection.Metadata;

namespace MudManagement.Server.Db
{
    public class MudDbContext:DbContext
    {
        public DbSet<mud_quantity_wswn> mud_quantity_wswn { get; set; }
        public DbSet<mud_quantity_gqwn> mud_quantity_gqwn { get; set; }
        public DbSet<mud_quality_jcsx> mud_quality_jcsx { get; set; }
        public DbSet<mud_quality_zjs> mud_quality_zjs { get; set; }
        public DbSet<mud_quality_dhft> mud_quality_dhft { get; set; }
        public DbSet<mud_quality_kss> mud_quality_kss { get; set; }
        public DbSet<mud_quality_xdfcw> mud_quality_xdfcw { get; set; }
        public DbSet<mud_quality_zysx> mud_quality_zysx { get; set; }

        public MudDbContext(DbContextOptions<MudDbContext> options)
           : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<mud_quantity_wswn>()
                .Property(e => e.id)
                .HasColumnType("TEXT") 
                .HasDefaultValueSql("uuid()");
            modelBuilder.Entity<mud_quantity_gqwn>()
                .Property(e => e.id)
                .HasColumnType("TEXT")
                .HasDefaultValueSql("uuid()");
            modelBuilder.Entity<mud_quality_jcsx>()
                .Property(e => e.id)
                .HasColumnType("TEXT")
                .HasDefaultValueSql("uuid()");
            modelBuilder.Entity<mud_quality_zjs>()
                .Property(e => e.id)
                .HasColumnType("TEXT")
                .HasDefaultValueSql("uuid()");
            modelBuilder.Entity<mud_quality_dhft>()
                .Property(e => e.id)
                .HasColumnType("TEXT")
                .HasDefaultValueSql("uuid()");
            modelBuilder.Entity<mud_quality_kss>()
                .Property(e => e.id)
                .HasColumnType("TEXT")
                .HasDefaultValueSql("uuid()");
            modelBuilder.Entity<mud_quality_xdfcw>()
                .Property(e => e.id)
                .HasColumnType("TEXT")
                .HasDefaultValueSql("uuid()");
            modelBuilder.Entity<mud_quality_zysx>()
                .Property(e => e.id)
                .HasColumnType("TEXT")
                .HasDefaultValueSql("uuid()");
        }
    }
}
