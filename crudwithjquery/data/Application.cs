using crudwithjquery.Models;
using Microsoft.EntityFrameworkCore;

namespace crudwithjquery.data
{
    public class Application:DbContext
    {
        public Application(DbContextOptions<Application> options) : base(options)
        {

        }
        public DbSet<Employee> Employee { get; set; } = default!;
    }
}
