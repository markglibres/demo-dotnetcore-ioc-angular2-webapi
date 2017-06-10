using System;
using System.Collections.Generic;
using System.Text;

namespace NetCoreDemo
{
    public interface IEntity<T>
    {
        T Id { get; set; }
    }
}
