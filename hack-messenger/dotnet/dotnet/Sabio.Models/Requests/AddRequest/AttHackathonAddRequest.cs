using System;
using System.Collections.Generic;
using System.Text;

namespace Sabio.Models.Requests
{
    public class AttHackathonAddRequest
    {
        //public int Id { get; set; }
        public string Username { get; set; }

        public string ModifiedBy { get; set; }

        public int MessageId { get; set; }
        public string Message { get; set; }
    }
}