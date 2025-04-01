using System.ComponentModel.DataAnnotations;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations.Schema;

namespace MyWebApi.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required] // Ensure Email is required and not null
        public string Email { get; set; }

        [Required] // Ensure Password is required and not null
        public string Password { get; set; }

        // Set default values for non-required fields
        public string Name { get; set; } = "";
        public string PhoneNumber { get; set; } = "";
        public string StreetAddress { get; set; } = "";
        public string PostalCode { get; set; } = "";
        public string City { get; set; } = "";
        public string Country { get; set; } = "";

        [DefaultValue(false)] // Set default value for IsAdmin as false
        public bool IsAdmin { get; set; } = false;
    }
}
