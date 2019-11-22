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
  public class AdminController : ControllerBase
  {
    mentorondemandContext mod = new mentorondemandContext();


    [HttpGet]
    [Route("gettech")]
    public IEnumerable<Technologies> gettechnologies()
    {
      return mod.Technologies.ToList();
    }

    [HttpGet]
    [Route("loginadmin/{username}/{password}")]
    public void Loginadmin(string username, string password)
    {
      mod.Admin.FromSql("ADMINLOGIN '" + username + "','" + password + "'");
    }


  }
}
