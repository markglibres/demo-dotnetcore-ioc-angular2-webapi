using System;
using System.Collections.Generic;
using System.Text;

namespace NetCoreDemo
{
    public abstract class AuditableEntity : Entity<long>, IAuditableEntity
    {
        public DateTime DateCreated { get; set; }
        public DateTime DateModified { get; set; }
    }
}
