using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace NetCoreDemo
{
    public class VehicleRepository : InMemoryRepository<Vehicle>, IVehicleRepository
    {
        public VehicleRepository(VehicleContext context) : base(context)
        {

        }

        public async Task<Vehicle> GetByIdAsync(long id)
        {
            return await GetAsync<long>(id);
        }
    }
}
