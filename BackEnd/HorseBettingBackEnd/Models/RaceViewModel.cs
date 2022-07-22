using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HorseBettingBackEnd.Models
{
    public class RaceViewModel
    {
        public int id { get; set; }

        public String date { get; set; }

        public string time { get; set; }

        public string location { get; set; }
    }
}