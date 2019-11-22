using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MentorOnDemand.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MentorOnDemand.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class MentorController : ControllerBase
  {
    mentorondemandContext mod = new mentorondemandContext();

    [HttpGet]
    [Route("getmentordeatils")]
    public IEnumerable<Mentordetails> getuserdetails()
    {
      return mod.Mentordetails.ToList();
    }

    [HttpPost]
    [Route("Rementor")]
    public void Registermentordetails([FromBody]Mentordetails mentor)
    {
      //mod.Database.ExecuteSqlCommand("REG_MENTOR {0},{1},{2},{3},{4},{5},{6}",
      //   mentor.Username, mentor.LinkedinUrl, mentor.RegDatetime, mentor.RegCode, mentor.YearsOfExperience, mentor.Active,mentor.MentorName);

      mod.Mentordetails.Add(mentor);
      mod.SaveChanges();
    }

  

    [HttpGet]
    [Route("mentorlogin/{username}/{password}")]
    public Mentordetails Loginmentor(string username, string password)
    {
     return mod.Mentordetails.FromSql("mentorlogin '" + username + "','" + password + "'").SingleOrDefault();
      
    }

    [HttpPost]
    [Route("addnewskill")]
    public void insertskill([FromBody]MentorSkills mentor)
    {
      mod.Database.ExecuteSqlCommand("addnewskill {0},{1},{2},{3},{4},{5}",
        mentor.Mid, mentor.Sid, mentor.SelfRating, mentor.YearsOfExp, mentor.TrainingsDelivered, mentor.FacilitiesOffered);


    }
    [HttpGet]
    [Route("ViewRequest/{id}")]
    public IEnumerable<Trainings> GetRequest(int id)
    {
      return mod.Trainings.FromSql("viewreq " + id).ToList();
    }


  }
}
