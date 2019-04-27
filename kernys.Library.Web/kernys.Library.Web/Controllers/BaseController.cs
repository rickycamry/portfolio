using System;
using kernys.Library.Core.Models;
using kernys.Library.Web.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Security.Claims;

namespace kernys.Library.Web.Controllers
{

    [Authorize]
    public class BaseController : Controller
    {
        protected readonly JsonSerializerSettings JsonFormat = new JsonSerializerSettings { Formatting = Formatting.Indented };
        public UserManager<LibraryUser> _userManager { get; private set; }

        public BaseController(UserManager<LibraryUser> userManager)
        {
           this._userManager=userManager;
        }


        protected JsonResult Result(ResultType resultType)
        {

            return Result(resultType, "");
        }
        protected JsonResult Result(ResultType resultType, string message)
        {

            return Json(new CustomResult { Type = resultType, Message = message }, this.JsonFormat);
        }

         protected JsonResult Result(TokenResponseViewModel obj)
        {

            return Json(obj, this.JsonFormat);
        }
          
          protected async Task<LibraryUser> GetCurrentUser(){
             


            return  await this._userManager.FindByNameAsync(this.User.Identity.Name);
 
          }

          protected string GetCurrentUserId(){

              return User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
          }

         
    }

}