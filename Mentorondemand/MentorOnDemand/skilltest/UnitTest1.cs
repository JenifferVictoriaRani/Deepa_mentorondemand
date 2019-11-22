using MentorOnDemand.Controllers;
using MentorOnDemand.Models;
using NUnit.Framework;
using System.Collections.Generic;

namespace Tests
{
  public class Tests
  {
    [SetUp]
    public void Setup()
    {
    }

    [Test]
  
    public void GetAllSkillsCorrect()
    {
      //var testProducts = GetTestProducts();
      var controller = new AdminController();

      var result = controller.gettechnologies() as List<Technologies>;
      Assert.AreEqual(2, result.Count);
    }
    [Test]
    public void GetAllSkillsIncorrect()
    {
      //var testProducts = GetTestProducts();
      var controller = new AdminController();

      var result = controller.gettechnologies() as List<Technologies>;
      Assert.AreEqual(6, result.Count);
    }
    [Test]

    public void GetAllViewRequestCorrect()
    {
      //var testProducts = GetTestProducts();
      var controller = new MentorController();

      var result = controller.getuserdetails() as List<Mentordetails>;
      Assert.AreEqual(2, result.Count);
    }
    [Test]
    public void GetAllViewRequestIncorrect()
    {
      //var testProducts = GetTestProducts();
      var controller = new MentorController();

      var result = controller.getuserdetails() as List<Mentordetails>;
      Assert.AreEqual(6, result.Count);
    }
  }
}
