using System;
using System.Collections.Generic;
using System.Text;

namespace NetCoreDemo
{
    public abstract class Entity<T> : BaseEntity, IEntity<T>
    {
        public T Id { get; set; }
    }
}
