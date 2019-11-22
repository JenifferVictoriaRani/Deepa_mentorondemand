using System;
using System.Collections.Generic;

namespace User.Models
{
    public partial class Admin
    {
        public long Adminid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
