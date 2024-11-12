using Microsoft.AspNetCore.Mvc;

namespace MyApp.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FormController : ControllerBase
    {
        private readonly ILogger<FormController> _logger;

        public FormController(ILogger<FormController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Route("[action]")]
        public void Submit([FromBody]Person person)
        {
            _logger.LogInformation("Person: {firstName} {lastName}", person.FirstName, person.LastName);
        }
    }
}
