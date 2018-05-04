using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using softtrust_proj.Models;

namespace softtrust_proj.Controllers
{
    [Route("api/users")]
    public class UserController : Controller
    {
        ApplicationContext db;
        public UserController(ApplicationContext context)
        {
            
            db = context;
        }
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return db.Users.ToList();
        }

        [HttpGet("{id}")]
        public User Get(int id)
        {
            User user = db.Users.FirstOrDefault(x => x.Id == id);
            return user;
        }

        [HttpPost]
        public int Post([FromBody]User user)
        {
            if (ModelState.IsValid)
            {
                User usercheck = db.Users.FirstOrDefault(x => x.Email == user.Email);
                if (usercheck != null)
                {
                    return usercheck.Id;
                }
                db.Users.Add(user);
                db.SaveChanges();
                return user.Id;
            }
            //return BadRequest(ModelState);
            return 0;
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]User user)
        {
            if (ModelState.IsValid)
            {
                db.Update(user);
                db.SaveChanges();
                return Ok(user);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            User user = db.Users.FirstOrDefault(x => x.Id == id);
            if (user != null)
            {
                db.Users.Remove(user);
                db.SaveChanges();
            }
            return Ok(user);
        }
    }
}