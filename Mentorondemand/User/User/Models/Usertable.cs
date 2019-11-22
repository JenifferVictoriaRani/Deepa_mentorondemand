using System;
using System.Collections.Generic;

namespace User.Models
{
    public partial class Usertable
    {
        public Usertable()
        {
            Trainings = new HashSet<Trainings>();
        }

        public long Userid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public long? Contactnumber { get; set; }
        public DateTime? RegDatetime { get; set; }
        public string RegCode { get; set; }
        public long? ForceResetPassword { get; set; }
        public string Active { get; set; }

        public ICollection<Trainings> Trainings { get; set; }
    }
}
