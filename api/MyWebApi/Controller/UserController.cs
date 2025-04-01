using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyWebApi.Models;
using System.Threading.Tasks;

namespace MyWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        // REGISTER USER
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] User user)
        {
            // Check if email already exists
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == user.Email);
            if (existingUser != null)
            {
                return BadRequest("Email is already registered.");
            }

            // Add user to the database
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok("User registered successfully!");
        }

        // LOGIN USER
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] User loginRequest)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginRequest.Email);
            if (user == null || user.Password != loginRequest.Password)
            {
                return Unauthorized("Invalid email or password.");
            }

            return Ok("Login successful!");
        }

        [HttpPut("update/{id}")]
        public async Task<IActionResult> UpdateProfile(int id, [FromBody] User updatedUser)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound("User not found.");
            }

            // Update only the provided fields
            if (!string.IsNullOrEmpty(updatedUser.Name)) user.Name = updatedUser.Name;
            if (!string.IsNullOrEmpty(updatedUser.PhoneNumber)) user.PhoneNumber = updatedUser.PhoneNumber;
            if (!string.IsNullOrEmpty(updatedUser.StreetAddress)) user.StreetAddress = updatedUser.StreetAddress;
            if (!string.IsNullOrEmpty(updatedUser.PostalCode)) user.PostalCode = updatedUser.PostalCode;
            if (!string.IsNullOrEmpty(updatedUser.City)) user.City = updatedUser.City;
            if (!string.IsNullOrEmpty(updatedUser.Country)) user.Country = updatedUser.Country;

            _context.Users.Update(user);
            await _context.SaveChangesAsync();

            return Ok("Profile updated successfully!");
        }

         [HttpGet("all")]
        public async Task<ActionResult<IEnumerable<User>>> GetAllUsers()
        {
            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }
    }
}
