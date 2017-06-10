using System;
using Xunit;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Linq;

namespace NetCoreDemo.Test
{
    public class VehicleTest
    {
        private readonly IVehicleService _vehicleService;
        

        //would be good to have this project use IoC
        //for the meantime, let's leave it simple just to demonstrate Unit Testing
        public VehicleTest()
        {
            DbContextOptions<VehicleContext> options;
            var builder = new DbContextOptionsBuilder<VehicleContext>();
            builder.UseInMemoryDatabase();
            options = builder.Options;

            var dbContext = new VehicleContext(options);
            var repo = new VehicleRepository(dbContext);
            _vehicleService = new VehicleService(repo);
        }

        [Fact]
        public async Task AddVehicles()
        {
            var car1 = await _vehicleService.AddCarAsync("Jeep", "Wrangler", "V-Type", 2, 4, BodyType.Sedan);
            var car2 = await _vehicleService.AddBikeAsync("Yamaha", "GX250", "2stroke", 2, BodyType.Road);

            var vehicles = await _vehicleService.GetAllAsync();
            Assert.Equal(2, vehicles.Count());
        }

        [Fact]
        public async Task EditCar()
        {
            await _vehicleService.EditCarAsync(1, "Jeep", "Wrangler Unlimited", "V-Type", 2, 4, BodyType.Hatchback);
            var car = await _vehicleService.GetById(1);
      
            Assert.Contains("Unlimited", car.Model);
            
        }

        [Fact]
        public async Task EditBike()
        {
           
            await _vehicleService.EditBikeAsync(2, "Yamaha", "GX250", "4stroke", 4, BodyType.Road);
            var bike = await _vehicleService.GetById(2);

            Assert.Contains("4", bike.Engine);

        }
    }
}
