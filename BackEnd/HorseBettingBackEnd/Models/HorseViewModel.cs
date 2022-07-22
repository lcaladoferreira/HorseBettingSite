using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HorseBettingBackEnd.Models
{
    public class HorseViewModel
    {
        public int id { get; set; }

        public string horse { get; set; }

        public string jockey { get; set; }

        public string lastRace { get; set; }

        public string odds { get; set; }
    }
}