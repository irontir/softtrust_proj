using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace softtrust_proj.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Text { get; set; }
        public int ThemeId { get; set; }  // навигационное свойство  
        public int UserId { get; set; }  // навигационное свойство

    }
}
