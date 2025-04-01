using Microsoft.EntityFrameworkCore;
using MyWebApi.Models;
// Replace with the actual namespace

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; } // This represents the UserTable model
}
