﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using MudManagement.Server.Db;

#nullable disable

namespace MudManagement.Server.Migrations
{
    [DbContext(typeof(MudDbContext))]
    [Migration("20240702093306_changestringtofloat")]
    partial class changestringtofloat
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "8.0.6");

            modelBuilder.Entity("MudManagement.Server.Models.mud_quality_dhft", b =>
                {
                    b.Property<string>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("uuid()");

                    b.Property<string>("benbingbei")
                        .HasColumnType("TEXT");

                    b.Property<string>("benbingbi")
                        .HasColumnType("TEXT");

                    b.Property<string>("benbingbyingen")
                        .HasColumnType("TEXT");

                    b.Property<string>("benbingen")
                        .HasColumnType("TEXT");

                    b.Property<string>("benbingkyingen")
                        .HasColumnType("TEXT");

                    b.Property<string>("bi")
                        .HasColumnType("TEXT");

                    b.Property<string>("category")
                        .HasColumnType("TEXT");

                    b.Property<string>("city")
                        .HasColumnType("TEXT");

                    b.Property<string>("date")
                        .HasColumnType("TEXT");

                    b.Property<string>("e")
                        .HasColumnType("TEXT");

                    b.Property<string>("en")
                        .HasColumnType("TEXT");

                    b.Property<string>("erbenbingen")
                        .HasColumnType("TEXT");

                    b.Property<string>("exi")
                        .HasColumnType("TEXT");

                    b.Property<string>("fei")
                        .HasColumnType("TEXT");

                    b.Property<string>("latitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("location")
                        .HasColumnType("TEXT");

                    b.Property<string>("longitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("nai")
                        .HasColumnType("TEXT");

                    b.Property<string>("qu")
                        .HasColumnType("TEXT");

                    b.Property<string>("type")
                        .HasColumnType("TEXT");

                    b.Property<string>("wu")
                        .HasColumnType("TEXT");

                    b.Property<string>("yinbingbi")
                        .HasColumnType("TEXT");

                    b.Property<string>("yingen")
                        .HasColumnType("TEXT");

                    b.Property<string>("zl")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("mud_quality_dhft");
                });

            modelBuilder.Entity("MudManagement.Server.Models.mud_quality_jcsx", b =>
                {
                    b.Property<string>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("uuid()");

                    b.Property<string>("category")
                        .HasColumnType("TEXT");

                    b.Property<string>("city")
                        .HasColumnType("TEXT");

                    b.Property<string>("date")
                        .HasColumnType("TEXT");

                    b.Property<string>("hanshaliang")
                        .HasColumnType("TEXT");

                    b.Property<string>("hanshuilv")
                        .HasColumnType("TEXT");

                    b.Property<string>("latitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("location")
                        .HasColumnType("TEXT");

                    b.Property<string>("longitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("ph")
                        .HasColumnType("TEXT");

                    b.Property<string>("type")
                        .HasColumnType("TEXT");

                    b.Property<string>("youjizhi")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("mud_quality_jcsx");
                });

            modelBuilder.Entity("MudManagement.Server.Models.mud_quality_kss", b =>
                {
                    b.Property<string>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("uuid()");

                    b.Property<string>("aqms")
                        .HasColumnType("TEXT");

                    b.Property<string>("category")
                        .HasColumnType("TEXT");

                    b.Property<string>("city")
                        .HasColumnType("TEXT");

                    b.Property<string>("date")
                        .HasColumnType("TEXT");

                    b.Property<string>("hacd")
                        .HasColumnType("TEXT");

                    b.Property<string>("hajec")
                        .HasColumnType("TEXT");

                    b.Property<string>("hajmd")
                        .HasColumnType("TEXT");

                    b.Property<string>("hamd")
                        .HasColumnType("TEXT");

                    b.Property<string>("hbsx")
                        .HasColumnType("TEXT");

                    b.Property<string>("hms")
                        .HasColumnType("TEXT");

                    b.Property<string>("klms")
                        .HasColumnType("TEXT");

                    b.Property<string>("latitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("lhms")
                        .HasColumnType("TEXT");

                    b.Property<string>("location")
                        .HasColumnType("TEXT");

                    b.Property<string>("longitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("nfsx")
                        .HasColumnType("TEXT");

                    b.Property<string>("shs")
                        .HasColumnType("TEXT");

                    b.Property<string>("tms")
                        .HasColumnType("TEXT");

                    b.Property<string>("type")
                        .HasColumnType("TEXT");

                    b.Property<string>("yfsx")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("mud_quality_kss");
                });

            modelBuilder.Entity("MudManagement.Server.Models.mud_quality_xdfcw", b =>
                {
                    b.Property<string>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("uuid()");

                    b.Property<string>("category")
                        .HasColumnType("TEXT");

                    b.Property<string>("city")
                        .HasColumnType("TEXT");

                    b.Property<string>("date")
                        .HasColumnType("TEXT");

                    b.Property<string>("latitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("location")
                        .HasColumnType("TEXT");

                    b.Property<string>("longitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("lys")
                        .HasColumnType("TEXT");

                    b.Property<string>("sljw")
                        .HasColumnType("TEXT");

                    b.Property<string>("slys")
                        .HasColumnType("TEXT");

                    b.Property<string>("type")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("mud_quality_xdfcw");
                });

            modelBuilder.Entity("MudManagement.Server.Models.mud_quality_zjs", b =>
                {
                    b.Property<string>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("uuid()");

                    b.Property<string>("As")
                        .HasColumnType("TEXT");

                    b.Property<string>("Pb")
                        .HasColumnType("TEXT");

                    b.Property<string>("category")
                        .HasColumnType("TEXT");

                    b.Property<string>("cd")
                        .HasColumnType("TEXT");

                    b.Property<string>("city")
                        .HasColumnType("TEXT");

                    b.Property<string>("cr")
                        .HasColumnType("TEXT");

                    b.Property<string>("cu")
                        .HasColumnType("TEXT");

                    b.Property<string>("date")
                        .HasColumnType("TEXT");

                    b.Property<string>("hg")
                        .HasColumnType("TEXT");

                    b.Property<string>("latitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("location")
                        .HasColumnType("TEXT");

                    b.Property<string>("longitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("ni")
                        .HasColumnType("TEXT");

                    b.Property<string>("type")
                        .HasColumnType("TEXT");

                    b.Property<string>("zn")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("mud_quality_zjs");
                });

            modelBuilder.Entity("MudManagement.Server.Models.mud_quality_zysx", b =>
                {
                    b.Property<string>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("uuid()");

                    b.Property<string>("category")
                        .HasColumnType("TEXT");

                    b.Property<string>("city")
                        .HasColumnType("TEXT");

                    b.Property<string>("date")
                        .HasColumnType("TEXT");

                    b.Property<string>("latitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("location")
                        .HasColumnType("TEXT");

                    b.Property<string>("longitude")
                        .HasColumnType("TEXT");

                    b.Property<string>("type")
                        .HasColumnType("TEXT");

                    b.Property<string>("zd")
                        .HasColumnType("TEXT");

                    b.Property<string>("zj")
                        .HasColumnType("TEXT");

                    b.Property<string>("zl")
                        .HasColumnType("TEXT");

                    b.Property<string>("zyf")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("mud_quality_zysx");
                });

            modelBuilder.Entity("MudManagement.Server.Models.mud_quantity_gqwn", b =>
                {
                    b.Property<string>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("uuid()");

                    b.Property<float?>("chanliang")
                        .HasColumnType("REAL");

                    b.Property<float?>("guandaochangdu")
                        .HasColumnType("REAL");

                    b.Property<string>("province")
                        .HasColumnType("TEXT");

                    b.Property<string>("year")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("mud_quantity_gqwn");
                });

            modelBuilder.Entity("MudManagement.Server.Models.mud_quantity_wswn", b =>
                {
                    b.Property<string>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT")
                        .HasDefaultValueSql("uuid()");

                    b.Property<float?>("chanliang")
                        .HasColumnType("REAL");

                    b.Property<float?>("chanlv")
                        .HasColumnType("REAL");

                    b.Property<string>("province")
                        .HasColumnType("TEXT");

                    b.Property<float?>("wushuiliang")
                        .HasColumnType("REAL");

                    b.Property<string>("year")
                        .HasColumnType("TEXT");

                    b.HasKey("id");

                    b.ToTable("mud_quantity_wswn");
                });
#pragma warning restore 612, 618
        }
    }
}
