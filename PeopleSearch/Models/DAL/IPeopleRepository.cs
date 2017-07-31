using System;
using System.Linq;

namespace PeopleSearch.Models.DAL
{
    public interface IPeopleRepository : IDisposable
    {
        IQueryable<Person> GetPeople();         // Returns all people from the db
        Person GetPersonById(int id);           // Returns a single person based on the given id
        void AddPerson(Person person);          // Adds a new person to the db  
        void UpdatePerson(Person person);       // Sets the given person entity state to modified
        void DeletePerson(int id);              // Remove a person from the db
        void Save();                            // Save all changes to the context
    }
}