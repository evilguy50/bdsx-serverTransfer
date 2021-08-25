import { command } from "bdsx/command";
import { CxxString, int32_t } from "bdsx/nativetype";
import { transferServer } from "../example_and_test/net-transferserver"
import * as fs from 'fs';

command.register('server', 'transfer server').overload((param, origin, output)=>{
    var serverFile = fs.readFileSync('../scripts/servers.json','utf8');
    var servers = JSON.parse(serverFile);
    let actor = origin.getEntity();
    var address: string
    var port: int32_t
    for (var index in servers.serverList) {
        if ( servers.serverList[parseInt(index)].name == param.serverName){
            address = servers.serverList[parseInt(index)].address
            port = parseInt(servers.serverList[parseInt(index)].port)
            if (actor != null){
                var ni = actor.getNetworkIdentifier();
                transferServer(ni , address, port)
            }
        }
      }
}, {
    serverName: [CxxString, false],
});