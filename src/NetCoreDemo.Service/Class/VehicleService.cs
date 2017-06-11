using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NetCoreDemo
{
    public class VehicleService : IVehicleService
    {
        protected readonly IVehicleRepository _repository;

        public VehicleService(IVehicleRepository repository)
        {
            _repository = repository;
        }

        public async Task<Vehicle> AddBikeAsync(string make, string model, string engine, int wheels, string bodyType)
        {
            var bike = new Vehicle()
            {
                Make = make,
                Model = model,
                Engine = engine,
                Wheels = wheels,
                BodyType = bodyType,
                Doors = 0,
                Category = Category.Bike
            };

            var entity = await _repository.InsertAsync(bike);
            await _repository.SaveAsync();

            return entity;


        }

        public async Task<Vehicle> EditBikeAsync(long id, string make, string model, string engine, int wheels, string bodyType)
        {
            var bike = await _repository.GetByIdAsync(id);
            bike.Make = make;
            bike.Model = model;
            bike.Engine = engine;
            bike.Wheels = wheels;
            bike.BodyType = bodyType;

            await _repository.UpdateAsync(bike);
            await _repository.SaveAsync();

            return bike;

        }

        public async Task<Vehicle> AddCarAsync(string make, string model, string engine, int doors, int wheels, string bodyType)
        {
            var car = new Vehicle()
            {
                Make = make,
                Model = model,
                Engine = engine,
                Doors = doors,
                Wheels = wheels,
                BodyType = bodyType,
                Category = Category.Car
            };

            var entity = await _repository.InsertAsync(car);
            await _repository.SaveAsync();

            return entity;
        }

        public async Task<Vehicle> EditCarAsync(long id, string make, string model, string engine, int doors, int wheels, string bodyType)
        {
            var car = await _repository.GetByIdAsync(id);
            car.Make = make;
            car.Model = model;
            car.Engine = engine;
            car.Doors = doors;
            car.Wheels = wheels;
            car.BodyType = bodyType;

            await _repository.UpdateAsync(car);
            await _repository.SaveAsync();

            return car;
        }

        public async Task<IEnumerable<Vehicle>> GetAllAsync()
        {
            return await _repository.GetAllAsync();
        }

        public async Task<Vehicle> GetById(long id)
        {
            return await _repository.GetByIdAsync(id);
        }
    }
}
