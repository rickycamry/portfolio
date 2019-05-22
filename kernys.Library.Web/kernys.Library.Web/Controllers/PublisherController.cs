using System;
using kernys.Library.Core.Models;
using kernys.Library.Web.ViewModel;
using Kernys.Library.Service.Interfaces;
using Mapster;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace kernys.Library.Web.Controllers
{
    [Route("api/[controller]")]
    public class PublisherController : BaseController
    {
        private IPublisherService _service;

        public PublisherController(UserManager<LibraryUser> userManager, IPublisherService service) : base(userManager)
        {
            _service = service;
        }


        [HttpGet]
        public IActionResult Get()
        {

            try
            {

                return Json(this._service.GetPublishers().Adapt<PublisherViewModel[]>(),
                             this.JsonFormat);

            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status400BadRequest);

            }

        }

        [HttpGet("{bookId}")]
        public IActionResult Get(int bookId)
        {

            try
            {

                return Json(this._service.GetPublisherByBookId(bookId).Adapt<PublisherViewModel>(),
                             this.JsonFormat);

            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status400BadRequest);

            }

        }

         [HttpPost("{bookId}")]
        public IActionResult Post([FromBody]PublisherViewModel publisher, int bookId)
        {

            try
            {


               return StatusCode(StatusCodes.Status201Created,
               this._service.AddPublisher(publisher.Adapt<Publisher>(),bookId).Adapt<PublisherViewModel>());
              

            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status400BadRequest);

            }

        }

        [HttpPut("{bookId}")]
        public IActionResult Put([FromBody]PublisherViewModel publisher, int bookId)
        {

            try
            {

                return StatusCode(StatusCodes.Status204NoContent,
                    this._service.UpdatePublisher(publisher.Adapt<Publisher>(),bookId).Adapt<PublisherViewModel>());

            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status400BadRequest);

            }

        }

        [HttpDelete("{publisherId}/{bookId}")]
        public IActionResult Delete(int publisherId, int bookId)
        {

            try
            {
                this._service.RemovePublisherFromBook(publisherId,bookId);

                return StatusCode(StatusCodes.Status204NoContent);

 
            }
            catch (Exception e)
            {

                return StatusCode(StatusCodes.Status400BadRequest);

            }

        }

    }


}