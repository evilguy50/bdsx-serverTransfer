import { events } from "bdsx/event";

events.serverOpen.on(()=>{
    require('./transfer');
});