"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("bdsx/command");
const nativetype_1 = require("bdsx/nativetype");
const net_transferserver_1 = require("../example_and_test/net-transferserver");
const fs = require("fs");
command_1.command.register('server', 'transfer server').overload((param, origin, output) => {
    var serverFile = fs.readFileSync('../scripts/servers.json', 'utf8');
    var servers = JSON.parse(serverFile);
    let actor = origin.getEntity();
    var address;
    var port;
    for (var index in servers.serverList) {
        if (servers.serverList[parseInt(index)].name == param.serverName) {
            address = servers.serverList[parseInt(index)].address;
            port = parseInt(servers.serverList[parseInt(index)].port);
            if (actor != null) {
                var ni = actor.getNetworkIdentifier();
                net_transferserver_1.transferServer(ni, address, port);
            }
        }
    }
}, {
    serverName: [nativetype_1.CxxString, false],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0cmFuc2Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUF1QztBQUN2QyxnREFBcUQ7QUFDckQsK0VBQXVFO0FBQ3ZFLHlCQUF5QjtBQUV6QixpQkFBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBQyxFQUFFO0lBQzVFLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMseUJBQXlCLEVBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkUsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNyQyxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDL0IsSUFBSSxPQUFlLENBQUE7SUFDbkIsSUFBSSxJQUFhLENBQUE7SUFDakIsS0FBSyxJQUFJLEtBQUssSUFBSSxPQUFPLENBQUMsVUFBVSxFQUFFO1FBQ2xDLElBQUssT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBQztZQUM5RCxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7WUFDckQsSUFBSSxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFBO1lBQ3pELElBQUksS0FBSyxJQUFJLElBQUksRUFBQztnQkFDZCxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztnQkFDdEMsbUNBQWMsQ0FBQyxFQUFFLEVBQUcsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFBO2FBQ3JDO1NBQ0o7S0FDRjtBQUNQLENBQUMsRUFBRTtJQUNDLFVBQVUsRUFBRSxDQUFDLHNCQUFTLEVBQUUsS0FBSyxDQUFDO0NBQ2pDLENBQUMsQ0FBQyJ9