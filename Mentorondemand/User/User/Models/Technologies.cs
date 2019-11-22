using System;
using System.Collections.Generic;

namespace User.Models
{
    public partial class Technologies
    {
        public Technologies()
        {
            MentorSkills = new HashSet<MentorSkills>();
            Trainings = new HashSet<Trainings>();
        }

        public long Id { get; set; }
        public string Name { get; set; }
        public string Toc { get; set; }
        public long? Duration { get; set; }
        public string Prerequites { get; set; }

        public ICollection<MentorSkills> MentorSkills { get; set; }
        public ICollection<Trainings> Trainings { get; set; }
    }
}
