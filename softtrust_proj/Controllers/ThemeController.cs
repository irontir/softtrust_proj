using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using softtrust_proj.Models;

namespace softtrust_proj.Controllers
{
    [Route("api/themes")]
    public class ThemeController : Controller
    {
        ApplicationContext db;
        public ThemeController(ApplicationContext context)
        {

            db = context;
 
        }
        [HttpGet]
        public IEnumerable<Theme> Get()
        {
            return db.Themes.ToList();
        }

        [HttpGet("{id}")]
        public Theme Get(int id)
        {
            Theme theme = db.Themes.FirstOrDefault(x => x.Id == id);
            return theme;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Theme theme)
        {
            if (ModelState.IsValid)
            {
                db.Themes.Add(theme);
                db.SaveChanges();
                return Ok(theme);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Theme theme)
        {
            if (ModelState.IsValid)
            {
                db.Update(theme);
                db.SaveChanges();
                return Ok(theme);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Theme theme = db.Themes.FirstOrDefault(x => x.Id == id);
            if (theme != null)
            {
                db.Themes.Remove(theme);
                db.SaveChanges();
            }
            return Ok(theme);
        }
    }
}