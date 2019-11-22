using NUnit.Framework;

namespace Tests
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }
        [Test]

        public void GetAllMentorlistCorrect()
        {
            //var testProducts = GetTestProducts();
            var controller = new UserController();

            var result = controller.getmentorlist() as List<Mentordetails>;
            Assert.AreEqual(7, result.Count);
        }
        [Test]
        public void GetAllMentorlistIncorrect()
        {
            //var testProducts = GetTestProducts();
            var controller = new UserController();

            var result = controller.getmentorlist() as List<Mentordetails>;
            Assert.AreEqual(6, result.Count);
        }
    }
}