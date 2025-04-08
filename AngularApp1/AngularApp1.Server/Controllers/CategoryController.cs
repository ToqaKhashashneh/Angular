using System.Reflection.Metadata.Ecma335;
using AngularApp1.Server.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularApp1.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly MyDbContext _db; //call to database

        public CategoryController(MyDbContext db) //constructor to give inital values (inject for database inside the controller)
        {
            _db = db;
        }


        // all, first, id,name


        [HttpGet("First")]
        public IActionResult GetFirstCategory() //get the first category
        {
            var category = _db.Categories.First();

            if (category == null )
            {
                return NotFound(); //if not found, return 404
            }
            
         return Ok(category); //return the list of categories

        }

        [HttpGet]
        public IActionResult GetCategories() //get all categories
        {
            var categories = _db.Categories.ToList(); //get all categories from database
            return Ok(categories); //return the list of categories
        }

        [HttpGet("getstuentbyId/{id}")]
        public IActionResult GetCategoryById(int id) //get a specific category
        {
            var category = _db.Categories.Find(id); //find the category by id
            if (category == null)
            {
                return NotFound(); //if not found, return 404
            }
            return Ok(category); //return the category
        }


        [HttpGet("{Name}")] //give the http Get name 
        public IActionResult SearchByName(string Name)
        {
            var categories = _db.Categories.FirstOrDefault(c => c.CategoryName==Name); //search for categories by name
            if (categories == null)
            {
                return NotFound(); //if not found, return 404
            }
            return Ok(categories); //return the list of categories
        }


    }
}
