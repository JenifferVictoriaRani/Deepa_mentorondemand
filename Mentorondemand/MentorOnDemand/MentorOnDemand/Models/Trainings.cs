using System;
using System.Collections.Generic;

namespace MentorOnDemand.Models
{
    public partial class Trainings
    {
        public long Id { get; set; }
        public long? UserId { get; set; }
        public long? MentorId { get; set; }
        public long? SkillId { get; set; }
        public string Status { get; set; }

        public Mentordetails Mentor { get; set; }
        public Technologies Skill { get; set; }
        public Usertable User { get; set; }
    }
}
