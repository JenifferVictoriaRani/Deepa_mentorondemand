using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace User.Models
{
    public partial class mentorondemandContext : DbContext
    {
        public mentorondemandContext()
        {
        }

        public mentorondemandContext(DbContextOptions<mentorondemandContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Admin> Admin { get; set; }
        public virtual DbSet<Mentordetails> Mentordetails { get; set; }
        public virtual DbSet<MentorSkills> MentorSkills { get; set; }
        public virtual DbSet<Technologies> Technologies { get; set; }
        public virtual DbSet<Trainings> Trainings { get; set; }
        public virtual DbSet<Usertable> Usertable { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=(local);Database=mentorondemand;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Admin>(entity =>
            {
                entity.ToTable("admin");

                entity.Property(e => e.Adminid).HasColumnName("adminid");

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .HasColumnName("username")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Mentordetails>(entity =>
            {
                entity.HasKey(e => e.Mentorid);

                entity.ToTable("mentordetails");

                entity.Property(e => e.Mentorid).HasColumnName("mentorid");

                entity.Property(e => e.Active)
                    .HasColumnName("active")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LinkedinUrl)
                    .HasColumnName("linkedin_url")
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.MentorName)
                    .HasColumnName("mentor_name")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.RegCode).HasColumnName("reg_code");

                entity.Property(e => e.RegDatetime)
                    .HasColumnName("reg_datetime")
                    .HasColumnType("date");

                entity.Property(e => e.Username)
                    .HasColumnName("username")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.YearsOfExperience).HasColumnName("years_of_experience");
            });

            modelBuilder.Entity<MentorSkills>(entity =>
            {
                entity.ToTable("Mentor_Skills");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.FacilitiesOffered)
                    .HasColumnName("facilities_offered")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Mid).HasColumnName("mid");

                entity.Property(e => e.SelfRating)
                    .HasColumnName("self_rating")
                    .HasColumnType("decimal(3, 1)");

                entity.Property(e => e.Sid).HasColumnName("sid");

                entity.Property(e => e.TrainingsDelivered).HasColumnName("trainings_delivered");

                entity.Property(e => e.YearsOfExp).HasColumnName("years_of_exp");

                entity.HasOne(d => d.M)
                    .WithMany(p => p.MentorSkills)
                    .HasForeignKey(d => d.Mid)
                    .HasConstraintName("FK__Mentor_Skil__mid__1BFD2C07");

                entity.HasOne(d => d.S)
                    .WithMany(p => p.MentorSkills)
                    .HasForeignKey(d => d.Sid)
                    .HasConstraintName("FK__Mentor_Skil__sid__1CF15040");
            });

            modelBuilder.Entity<Technologies>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Name)
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.Prerequites)
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Toc)
                    .HasColumnName("TOC")
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Trainings>(entity =>
            {
                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.MentorId).HasColumnName("mentor_id");

                entity.Property(e => e.SkillId).HasColumnName("skill_id");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UserId).HasColumnName("user_id");

                entity.HasOne(d => d.Mentor)
                    .WithMany(p => p.Trainings)
                    .HasForeignKey(d => d.MentorId)
                    .HasConstraintName("FK__Trainings__mento__2A4B4B5E");

                entity.HasOne(d => d.Skill)
                    .WithMany(p => p.Trainings)
                    .HasForeignKey(d => d.SkillId)
                    .HasConstraintName("FK__Trainings__skill__2B3F6F97");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Trainings)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__Trainings__user___29572725");
            });

            modelBuilder.Entity<Usertable>(entity =>
            {
                entity.HasKey(e => e.Userid);

                entity.ToTable("usertable");

                entity.Property(e => e.Userid).HasColumnName("userid");

                entity.Property(e => e.Active)
                    .HasColumnName("active")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Contactnumber).HasColumnName("contactnumber");

                entity.Property(e => e.Firstname)
                    .HasColumnName("firstname")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.ForceResetPassword).HasColumnName("force_reset_password");

                entity.Property(e => e.Lastname)
                    .HasColumnName("lastname")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.RegCode)
                    .HasColumnName("reg_code")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.RegDatetime)
                    .HasColumnName("reg_datetime")
                    .HasColumnType("date");

                entity.Property(e => e.Username)
                    .HasColumnName("username")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
