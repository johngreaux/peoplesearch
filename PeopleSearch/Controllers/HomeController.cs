using System;
using System.Web.Mvc;

namespace PeopleSearch.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}