using System;
using System.Collections.Generic;
using System.Text;

namespace NetCoreDemo
{
    public interface IAuditableEntity
    {
        DateTime DateCreated { get; set; }
        DateTime DateModified { get; set; }
    }
}
