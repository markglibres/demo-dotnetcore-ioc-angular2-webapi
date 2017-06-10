using System;
using System.Collections.Generic;
using System.Text;

namespace NetCoreDemo
{
    public class Vehicle : AuditableEntity
    {
        public string Make { get; set; }
        public string Model { get; set; }
        public string Engine { get; set; }
        public int Doors { get; set; }
        public int Wheels { get; set; }
        public Category Category { get; set; }
        public BodyType BodyType { get; set; }

    }
}
