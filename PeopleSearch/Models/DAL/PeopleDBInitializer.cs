using System;
using System.Data.Entity;

namespace PeopleSearch.Models.DAL
{
    public class PeopleDBInitializer : CreateDatabaseIfNotExists<PeopleContext>
    {
        protected override void Seed(PeopleContext context)
        {
            Random rand = new Random();
            int seedAmount = 1000;
            string[] firstNames = new string[] { "James", "Mary", "John", "Patricia", "Robert", "Jennifer", "Michael", "Elizabeth", "William", "Linda", "David", "Barbara", "Richard", "Susan", "Joseph", "Jessica", "Thomas", "Margaret", "Charles", "Sarah", "Christopher", "Karen", "Daniel", "Nancy", "Matthew", "Betty" };
            string[] lastNames = new string[] { "Smith", "Williams", "Jones", "Johnson", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker" };
            string[] streetNames = new string[] { "First", "Second", "Third", "Fourth", "Fifth", "Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Park", "Main", "Oak", "Pine", "Maple", "Cedar", "Elm", "View", "Washington", "Lake", "Hill" };
            string[] streetTypes = new string[] { "St.", "Dr.", "Blvd.", "Ave.", "Ct.", "Ln.", "Pl.", "Ter." };
            string[] interests = new string[] { "Eating", "Sleeping", "Running", "Jumping", "Traveling", "Hiking", "Crafts", "Football", "Baseball", "Basketball", "Volleyball", "Watersports", "Wintersports" };
            string[] pictureUrl = new string[] { "http://cdn3-www.dogtime.com/assets/uploads/gallery/goldador-dog-breed-pictures/puppy-1.jpg", "https://www.funnypica.com/wp-content/uploads/2015/05/Funny-Dog-faces-17.jpg", "https://www.swapaw.com/blog/wp-content/uploads/2016/05/2.jpg", "https://uk.animalblog.co/wp-content/uploads/2016/09/166_thumb1562274571.jpg", "https://s-media-cache-ak0.pinimg.com/736x/94/d3/d9/94d3d9f62c08d142c99f07c79c0e55f6--dogs-and-puppies-cutest-puppies-puppies.jpg", "http://www.funny-animalpictures.com/media/content/items/images/funnydogs0077_O.jpg", "http://s2.dmcdn.net/Ub1O8/1280x720-mCQ.jpg", "https://i.ytimg.com/vi/-a75sRCC7Bg/maxresdefault.jpg", "https://i.ytimg.com/vi/nPER_vv2SyU/hqdefault.jpg", "http://kittytonpost.com/wp-content/uploads/2013/09/cute-cat-funny.jpg", "https://i.ytimg.com/vi/cbP2N1BQdYc/maxresdefault.jpg", "http://www.bandofcats.com/wp-content/uploads/2009/07/funny-cats_24.jpg" };

            for (int i = 0; i < seedAmount; i++)
            {
                var person = new Person()
                {
                    Avatar = pictureUrl[rand.Next(0, pictureUrl.Length - 1)],
                    FirstName = firstNames[rand.Next(0, firstNames.Length - 1)],
                    LastName = lastNames[rand.Next(0, lastNames.Length - 1)],
                    Address = String.Format("{0} {1} {2}", rand.Next(0, 1000), streetNames[rand.Next(0, streetNames.Length - 1)], streetTypes[rand.Next(streetTypes.Length - 1)]),
                    Age = rand.Next(1, 18),
                    Interests = ""
                };

                for (int j = rand.Next(0, interests.Length - 2); j < interests.Length; j++)
                {
                    person.Interests += interests[j] + " ";
                }

                context.Person.Add(person);
            }

            base.Seed(context);
        }
    }
}