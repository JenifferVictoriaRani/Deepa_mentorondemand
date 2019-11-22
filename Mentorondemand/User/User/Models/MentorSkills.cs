using System;
using System.Collections.Generic;

namespace User.Models
{
    public partial class MentorSkills
    {
        public long Id { get; set; }
        public long? Mid { get; set; }
        public long? Sid { get; set; }
        public decimal? SelfRating { get; set; }
        public long? YearsOfExp { get; set; }
        public int? TrainingsDelivered { get; set; }
        public string FacilitiesOffered { get; set; }

        public Mentordetails M { get; set; }
        public Technologies S { get; set; }
    }
}
