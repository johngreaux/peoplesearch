using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using PeopleSearch;
using PeopleSearch.Controllers;
using System.Net.Http;
using System.Web.Http.Description;
using System.Web.Http;
using PeopleSearch.Models;
using System.Net;
using System.Web.Http.Results;

namespace PeopleSearch.Tests.Controllers
{
    [TestClass]
    public class PeopleControllerTest
    {
        [TestMethod]
        public void GetPeople()
        {
            // Arrange
            PeopleController controller = new PeopleController();

            // Act
            IQueryable<Person> result = controller.GetPeople();

            // Assert
            Assert.IsNotNull(result);
        }

        [TestMethod]
        public void PutPerson()
        {
            // Arrange
            PeopleController controller = new PeopleController();
            Person person = new Person
            {
                Avatar = "https://cdn.pixabay.com/photo/2015/01/16/18/48/bulldog-601714_960_720.jpg",
                FirstName = "Winston",
                LastName = "Test",
                Address = "123 Test St.",
                Age = 4,
                Interests = "Sleeping"
            };

            // Act
            var actionResult = controller.PostPerson(person);

            // Assert
            Assert.IsNotNull(actionResult);
            Assert.IsInstanceOfType(actionResult, typeof(CreatedAtRouteNegotiatedContentResult<Person>));
        }
    }
}
