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
    public class HorsesController : ApiController
    {
        private HorseBettingSiteEntities db = new HorseBettingSiteEntities();

        private List<HorseViewModel> RaceViewModelList(IQueryable<race> races)
        {
            var ret = new List<HorseViewModel>();
            var raceHorsesArray = races.ToArray()[0].racehorses.OrderBy(r => r.horse.name);

            foreach (var racehorse in raceHorsesArray)
            {
                ret.Add(new HorseViewModel {
                    id = racehorse.id,
                    horse = racehorse.horse.name,
                    jockey = racehorse.jockey.name,
                    lastRace = DateTime.Now.ToString(),
                    odds = "1:" + racehorse.odd.ToString() 
                });
            }

            return ret;
        }

        [Route("api/horses/GetHorsesForRace/{raceId:int}")]
        public List<HorseViewModel> GetHorsesForRace(int raceId)
        {
            return RaceViewModelList(
                db.races
                .Include(r => r.racehorses.Select(rh => rh.horse))
                .Include(r => r.racehorses.Select(rh => rh.jockey))
                .Where(race => race.id == raceId));
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