using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NetCoreDemo
{
    public interface IVehicleService
    {
        Task<Vehicle> GetById(long Id);
        Task<Vehicle> AddBikeAsync(string make, string model, string engine, int wheels, string bodyType);
        Task<Vehicle> EditBikeAsync(long id, string make, string model, string engine, int wheels, string bodyType);
        Task<Vehicle> AddCarAsync(string make, string model, string engine, int doors, int wheels, string bodyType);
        Task<Vehicle> EditCarAsync(long id, string make, string model, string engine, int doors, int wheels, string bodyType);
        Task<IEnumerable<Vehicle>> GetAllAsync();
    }
}
