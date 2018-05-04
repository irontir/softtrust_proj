using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using softtrust_proj.Models;


namespace softtrust_proj.Controllers
{
    [Route("api/messages")]
    public class MessagesController : Controller
    {
        ApplicationContext db;
        public MessagesController(ApplicationContext context)
        {

            db = context;
        }
        [HttpGet]
        public IEnumerable<Message> Get()
        {
            return db.Messages.ToList();
        }

        [HttpGet("{id}")]
        public Message Get(int id)
        {
            Message message = db.Messages.FirstOrDefault(x => x.Id == id);
            return message;
        }

        [HttpPost]
        public IActionResult Post([FromBody]Message message)
        {
            if (ModelState.IsValid)
            {
                db.Messages.Add(message);
                db.SaveChanges();
                return Ok(message);
            }
            return BadRequest(ModelState);
        }

        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]Message message)
        {

            if (ModelState.IsValid)
            {
                db.Messages.Add(message);
                db.SaveChanges();
                return Ok(message);
            }
            return BadRequest(ModelState);


            /*
            if (ModelState.IsValid)
            {
                
                Message u = db.Messages.Find(id);
                if (u != null)
                {
                    u.Text = message.Text;
                    u.ThemeId = message.ThemeId;
                    u.UserId = message.UserId;
                    db.SaveChanges();
                    return Ok(u);
                }
                db.Update(message);
                db.SaveChanges();
                return Ok(message);
        }
            return BadRequest(ModelState);*/
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Message message = db.Messages.FirstOrDefault(x => x.Id == id);
            if (message != null)
            {
                db.Messages.Remove(message);
                db.SaveChanges();
            }
            return Ok(message);
        }
    }
}