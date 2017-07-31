using System;
using System.Collections.Generic;

namespace PeopleSearch.Models
{
    public class Person
    {
        public Person()
        {

        }
        
        public int PersonId { get; set; }
        public string Avatar { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Address { get; set; }
        public int Age { get; set; }
        public string Interests { get; set; }
    }
}