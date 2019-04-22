using kernys.Library.Web.ViewModel;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace kernys.Library.Web.Controllers
{

    [Authorize]
    public class BaseController : Controller
    {
        protected readonly JsonSerializerSettings JsonFormat = new JsonSerializerSettings { Formatting = Formatting.Indented };
        public BaseController()
        {

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



    }

}