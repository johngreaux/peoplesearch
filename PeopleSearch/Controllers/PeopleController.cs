using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Web.Http;
using System.Web.Http.Description;
using PeopleSearch.Models;
using PeopleSearch.Models.DAL;

namespace PeopleSearch.Controllers
{
    public class PeopleController : ApiController
    {
        // Access the the db 
        private IPeopleRepository peopleRepository;

        public PeopleController()
        {
            this.peopleRepository = new PeopleRepository(new PeopleContext());
        }

        // GET: api/people/getpeople
        public IQueryable<Person> GetPeople()
        {
            return peopleRepository.GetPeople().OrderByDescending(p => p.PersonId);
        }

        // GET: api/people/getperson/id
        [ResponseType(typeof(Person))]
        public IHttpActionResult GetPerson(int id)
        {
            Person person = peopleRepository.GetPersonById(id);

            if (person == null)
            {
                return NotFound();
            }

            return Ok(person);
        }

        // GET: api/people/searchpeople/id
        [HttpGet]
        public IQueryable<Person> SearchPeople(string id)
        {
            return peopleRepository.GetPeople()
                .Where(p => (p.FirstName.Contains(id) || p.LastName.Contains(id)) || (p.FirstName + " " + p.LastName).Contains(id))
                .OrderByDescending(p => p.PersonId); ;
        }

        // PUT: api/people/putperson/
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPerson(int id, Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != person.PersonId)
            {
                return BadRequest();
            }

            peopleRepository.UpdatePerson(person);

            try
            {
                peopleRepository.Save();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PersonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/people/postperson
        [ResponseType(typeof(Person))]
        public IHttpActionResult PostPerson(Person person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            peopleRepository.AddPerson(person);
            peopleRepository.Save();

            return CreatedAtRoute("DefaultApi", new { id = person.PersonId }, person);
        }

        // DELETE: api/people/deleteperson/id
        [ResponseType(typeof(Person))]
        public IHttpActionResult DeletePerson(int id)
        {
            Person person = peopleRepository.GetPersonById(id);

            if (person == null)
            {
                return NotFound();
            }

            peopleRepository.DeletePerson(id);
            peopleRepository.Save();

            return Ok(person);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                peopleRepository.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PersonExists(int id)
        {
            return peopleRepository.GetPeople().Count(e => e.PersonId == id) > 0;
        }
    }
}