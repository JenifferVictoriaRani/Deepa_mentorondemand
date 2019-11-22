using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using User.Models;

namespace User.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        mentorondemandContext mod = new mentorondemandContext();
        [HttpGet]
        [Route("getuserdeatils")]
        public IEnumerable<Usertable> getuserdetails()
        {
            return mod.Usertable.ToList();
        }

        [HttpPost]
        [Route("RegUser")]
        public void Registeruserdetails([FromBody]Usertable user)
        {
            mod.Database.ExecuteSqlCommand("RegUser {0},{1},{2},{3},{4},{5},{6},{7},{8}",
                user.Username, user.Password, user.Firstname, user.Lastname, user.Contactnumber, user.RegDatetime,
                user.RegCode, user.ForceResetPassword, user.Active);
        }

        [HttpGet]
        [Route("loginuser/{username}/{password}")]
        public Usertable Loginuser(string username, string password)
        {
            return mod.Usertable.FromSql("userlogin '" + username + "','" + password + "'").SingleOrDefault();
        }
        [HttpGet]
        [Route("Username")]
        public IEnumerable<string> username()
        {
            List<Usertable> li = mod.Usertable.ToList();
            List<string> l = new List<string>();
            foreach (Usertable u in li)
            {
                l.Add(u.Username);

            }
            return l;
        }
        [HttpGet]
        [Route("ContactNo")]
        public IEnumerable<long?> contactno()
        {
            List<Usertable> li = mod.Usertable.ToList();
            List<long?> l = new List<long?>();
            foreach (Usertable u in li)
            {
                l.Add(u.Contactnumber);

            }
            return l;
        }


        [HttpGet]
        [Route("getmentorlist")]
        public IEnumerable<Mentordetails> getmentorlist()
        {
            return mod.Mentordetails.ToList();
        }

        [HttpGet]
        [Route("search/{skid}")]

        public IEnumerable<temp> searching(long skid)
        {
            List<Mentordetails> m = mod.Mentordetails.FromSql("search " + skid).ToList();
            List<temp> temp = new List<temp>();
            foreach (Mentordetails mo in m)
            {
                temp t = new temp();
                t.Mentorid = mo.Mentorid;
                t.Username = mo.Username;
                t.MentorName = mo.MentorName;
                t.LinkedinUrl = mo.LinkedinUrl;
                t.YearsOfExperience = mo.YearsOfExperience;
                t.Active = mo.Active;
                temp.Add(t);
            }
            return temp;
        }
        [HttpPost]

        [Route("InsertNomination/{uid}")]
        public void insertnom(long uid, [FromBody]Trainings training)
        {
            mod.Trainings.Add(training);
            mod.SaveChanges();
        }


    }
}