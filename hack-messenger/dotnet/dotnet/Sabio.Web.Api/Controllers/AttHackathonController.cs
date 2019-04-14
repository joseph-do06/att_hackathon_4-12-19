using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

using Sabio.Data;
using Sabio.Models;
using Sabio.Models.Requests;
using Sabio.Services;
using Sabio.Web.Controllers;
using Sabio.Web.Models.Responses;

namespace Sabio.Web.Api.Controllers
{
    [Route("api/atthackathon")]
    public class AttHackathonController : BaseApiController
    {
        private IAttHackathonService _AttHackathonService;
        private IAuthenticationService<int> _authService;

        public AttHackathonController(IAttHackathonService attHackathonService, IAuthenticationService<int> authService,
            ILogger<AttHackathonController> logger) : base(logger)
        {
            _AttHackathonService = attHackathonService;
            _authService = authService;
        }

        [HttpGet("{username}")]
        public ActionResult<ItemsResponse<List<AttHackathonDomain>>> SelectAllByUsername(string username)
        {
            ActionResult result = null;
            try
            {
                List<AttHackathonDomain> AttHackathonList = new List<AttHackathonDomain>();
                AttHackathonList = _AttHackathonService.SelectAllByUsername(username);

                ItemsResponse<AttHackathonDomain> response = new ItemsResponse<AttHackathonDomain>();
                response.Items = AttHackathonList;

                result = Ok200(response);
            }
            catch (Exception e)
            {
                Logger.LogError(e.ToString());
                result = StatusCode(400, new ErrorResponse(e.Message));
            }
            return result;
        }

        [HttpPost]
        public ActionResult<SuccessResponse> Post(AttHackathonAddRequest model)
        {
            ActionResult result = null;
            try
            {
                //model.ModifiedBy = "User" + _authService.GetCurrentUserId();
                SuccessResponse response = new SuccessResponse();
                _AttHackathonService.Insert(model);
                result = Ok200(response);
            }
            catch (Exception e)
            {
                Logger.LogError(e.ToString());
                result = StatusCode(500, new ErrorResponse(e.Message));
            }
            return result;
        }
    }
}