using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace PeopleSearch.Models.DAL
{
    public class PeopleRepository : IPeopleRepository, IDisposable
    {
        private PeopleContext context;
        private bool disposed = false;

        public PeopleRepository(PeopleContext context)
        {
            this.context = context;
        }

        public IQueryable<Person> GetPeople()
        {
            return context.Person;
        }

        public Person GetPersonById(int id)
        {
            return context.Person.Find(id);
        }

        public void AddPerson(Person person)
        {
            context.Person.Add(person);
        }

        public void UpdatePerson(Person person)
        {
            context.Entry(person).State = EntityState.Modified;
        }

        public void DeletePerson(int id)
        {
            Person person = context.Person.Find(id);
            context.Person.Remove(person);
        }

        public void Save()
        {
            context.SaveChanges();
        }

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

    }
}