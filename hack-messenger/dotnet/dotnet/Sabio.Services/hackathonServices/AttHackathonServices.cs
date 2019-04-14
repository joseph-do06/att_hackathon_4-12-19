using Sabio.Data;
using Sabio.Data.Providers;
using Sabio.Models;
using Sabio.Models.Domain;
using Sabio.Models.Requests;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Text;

namespace Sabio.Services
{
    public class AttHackathonServices : IAttHackathonService
    {
        private IDataProvider _dataProvider;

        public AttHackathonServices(IDataProvider dataprovider)
        {
            _dataProvider = dataprovider;
        }

        public void Insert(AttHackathonAddRequest model)
        {
            _dataProvider.ExecuteNonQuery(
            "dbo.Hackathon_UserMessageInsert",
            inputParamMapper: delegate (SqlParameterCollection paramCol)
            {
                SqlParameter parm = new SqlParameter
                {
                    ParameterName = "@_Id",
                    SqlDbType = SqlDbType.Int,
                    Direction = ParameterDirection.Output
                };
                paramCol.Add(parm);
                paramCol.AddWithValue("@_Username", model.Username);
                paramCol.AddWithValue("@_ModifiedBy", model.ModifiedBy);
                paramCol.AddWithValue("@_MessageId", model.MessageId);
                paramCol.AddWithValue("@_Message", model.Message);
            }
        );
        }

        public List<AttHackathonDomain> SelectAllByUsername(string username)
        {
            List<AttHackathonDomain> result = new List<AttHackathonDomain>();
            this._dataProvider.ExecuteCmd(
            "dbo.HackathonMessage_SelectByUsername",
            inputParamMapper: delegate (SqlParameterCollection paramCol)
            {
                paramCol.AddWithValue("@_Username", username);
            },
            singleRecordMapper: delegate (IDataReader reader, short set)
            {
                AttHackathonDomain model = new AttHackathonDomain();
                int index = 0;

                model = Mapper(reader, index);
                index++;
                result.Add(model);
            }
        );
            return result;
        }

        private AttHackathonDomain Mapper(IDataReader reader, int index = 0)
        {
            AttHackathonDomain model = new AttHackathonDomain();
            model.Message = reader.GetSafeString(index++);
            return model;
        }
    }
}