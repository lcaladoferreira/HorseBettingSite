using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using HorseBettingBackEnd.Models;

namespace HorseBettingBackEnd.Controllers
{
    public class RacesController : ApiController
    {
        private HorseBettingSiteEntities db = new HorseBettingSiteEntities();

        private List<RaceViewModel> RaceViewModelList(IQueryable<race> races)
        {
            var ret = new List<RaceViewModel>();

            foreach (var race in races)
            {
                var raceDate = (race.date ?? DateTime.MinValue).ToString("yyyy-MM-dd");
                var raceTime = (race.date ?? DateTime.MinValue).ToString("HH:mm");
                ret.Add(new RaceViewModel { date = race.date != null ? raceDate : "N/A", time = race.date != null ? raceTime : string.Empty, location = race.location.name });
            }

            return ret;
        }

        // get: api/races
        public List<RaceViewModel> GetRaces()
        {
            return RaceViewModelList( db.races.OrderBy(r => r.date).Include(r => r.location));
        }

        [Route("api/races/GetComingRaces")]
        public List<RaceViewModel> GetComingRaces()
        {
            return RaceViewModelList(
                db.races
                    .Include(r => r.location)
                    .Include(r => r.racehorses)
                    .Where(r => r.date > DateTime.Now)
                    .Where(r => r.racehorses.Count > 0)
                    .OrderBy(r => r.date));
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}