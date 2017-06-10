using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace NetCoreDemo
{
    public abstract class InMemoryRepository<T> : IRepository<T>
        where T : BaseEntity
    {
        protected readonly DbContext _context;
        protected readonly DbSet<T> _set;
        public InMemoryRepository(DbContext context)
        {
            _context = context;
            _set = _context.Set<T>();
        }

        public async Task<T> GetAsync<TKey>(TKey id)
        {
            return await _set.FindAsync(id);
        }

        public async Task<IEnumerable<T>> GetAllAsync()
        {
            return await _set.ToListAsync<T>();
        }

        public async Task<T> InsertAsync(T entity)
        {
            var result = await _set.AddAsync(entity);
            return result.Entity;
        }

        public async Task UpdateAsync(T entity)
        {
            await Task.Run(() => _context.Entry<T>(entity).State = EntityState.Modified);
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }


    }
}
