using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace TextApp
{
    public class TextHub:Hub
    {
        public void Text(string message)
        {
            //The method mentioned here will be the method on the client that SingalR looks for to talk to
            Clients.All.SendAsync("Send", message);
        }
    }
}
