using System.Data.Entity;

namespace PeopleSearch.Models.DAL
{
    public class PeopleContext : DbContext
    {
        public PeopleContext(): base()
        {
            Database.SetInitializer(new PeopleDBInitializer());  
        }

        public DbSet<Person> Person { get; set; }
    }
}