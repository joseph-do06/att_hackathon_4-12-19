using Sabio.Models;
using Sabio.Models.Requests;
using System;
using System.Collections.Generic;
using System.Text;

namespace Sabio.Services
{
    public interface IAttHackathonService
    {
        void Insert(AttHackathonAddRequest model);

        List<AttHackathonDomain> SelectAllByUsername(string username);
    }
}