using Infrastructure.Data;
using Core.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly StoreContext _context; // we will use _ for private fields 
        public ProductsController(StoreContext context)
        {
            _context=context;
        }

        [HttpGet]        
        public async Task<ActionResult<List<Product>>> products()
        {
            var products = await _context.products.ToListAsync();
            return products;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> products(int id)
        {
            return await _context.products.FindAsync(id);
        }
    }
}