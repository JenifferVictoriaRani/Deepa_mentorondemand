using System;
using System.Collections.Generic;

namespace User.Models
{
    public partial class Mentordetails
    {
        public Mentordetails()
        {
            MentorSkills = new HashSet<MentorSkills>();
            Trainings = new HashSet<Trainings>();
        }

        public long Mentorid { get; set; }
        public string Username { get; set; }
        public string LinkedinUrl { get; set; }
        public DateTime? RegDatetime { get; set; }
        public long? RegCode { get; set; }
        public long? YearsOfExperience { get; set; }
        public string Active { get; set; }
        public string Password { get; set; }
        public string MentorName { get; set; }

        public ICollection<MentorSkills> MentorSkills { get; set; }
        public ICollection<Trainings> Trainings { get; set; }
    }
}
