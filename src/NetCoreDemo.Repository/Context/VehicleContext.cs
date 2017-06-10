using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using System.Threading;

namespace NetCoreDemo
{
    public class VehicleContext : DbContext
    {
        public DbSet<Vehicle> Bikes { get; set; }
        public VehicleContext(DbContextOptions<VehicleContext> options) : base(options)
        {

        }

        private void ApplyDefaultDates()
        {
            //default values for date created and modified
            var now = DateTime.Now;
            var entries = this.ChangeTracker.Entries<IAuditableEntity>();
            foreach (var entry in entries)
            {
                var entity = entry.Entity;
                if (entry.State == EntityState.Added)
                    entity.DateCreated = now;

                entity.DateModified = now;

            }

            this.ChangeTracker.DetectChanges();
        }

        public override int SaveChanges()
        {
            ApplyDefaultDates();
            return base.SaveChanges();
        }

        public override int SaveChanges(bool acceptAllChangesOnSuccess)
        {
            ApplyDefaultDates();
            return base.SaveChanges(acceptAllChangesOnSuccess);
        }

        public override Task<int> SaveChangesAsync(bool acceptAllChangesOnSuccess, CancellationToken cancellationToken = default(CancellationToken))
        {
            ApplyDefaultDates();
            return base.SaveChangesAsync(acceptAllChangesOnSuccess, cancellationToken);
        }
        public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default(CancellationToken))
        {
            ApplyDefaultDates();
            return base.SaveChangesAsync(cancellationToken);
        }
    }
}
