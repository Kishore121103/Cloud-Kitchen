using Microsoft.EntityFrameworkCore;
using MyWebApi.Models; // Replace with your actual namespace for AppDbContext

var builder = WebApplication.CreateBuilder(args);

var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));

builder.Services.AddControllers();

// Enable CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowReactApp",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") // Allow requests from your React app
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});

// Add Swagger services
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles(); 
app.UseCors("AllowReactApp");

app.UseAuthorization();

app.MapControllers();

// Enable Swagger middleware
if (app.Environment.IsDevelopment())  // Enable Swagger only in development mode
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
        c.RoutePrefix = string.Empty; // This makes Swagger available at the root URL (e.g., https://localhost:5001/)
    });
}

app.Run();
