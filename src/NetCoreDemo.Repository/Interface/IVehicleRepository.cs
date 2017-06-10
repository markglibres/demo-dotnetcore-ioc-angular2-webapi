using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace NetCoreDemo
{
    public interface IVehicleRepository : IRepository<Vehicle>
    {
        Task<Vehicle> GetByIdAsync(long id);
    }
}
