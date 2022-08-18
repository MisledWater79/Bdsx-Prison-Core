import { events } from "bdsx/event";
import form from "./PrisonCore/Commands/form";
import data from "./PrisonCore/Commands/data";
import PlayerJoin from "./PrisonCore/Events/PlayerJoin";
import FakePlayer from "./PrisonCore/FakePlayer";
import { Manager } from "./PrisonCore/Manager";
import { DataManager } from "./PrisonCore/Utils/DataManager";
import BlockBreak from "./PrisonCore/Events/BlockBreak";
import BlockInteract from "./PrisonCore/Events/BlockInteract";
import BlockPlace from "./PrisonCore/Events/BlockPlace";
import rank from "./PrisonCore/Commands/rank";
import ItemUseOn from "./PrisonCore/Events/ItemUseOn";

console.log('\x1b[36m[PrisonCore] \x1b[32mFound');

export const FakePlayers = new Map<string,FakePlayer>();
export const managers = new Array<Manager>;

events.serverOpen.on(()=>{
    console.log('\x1b[36m[PrisonCore] \x1b[32mLaunching...');
    registerManagers();
    registerCommands();
    registerEvents();
    //registerTasks();
    console.log('\x1b[36m[PrisonCore] \x1b[32mLaunched!');
});

function registerManagers(){
    managers.push(new DataManager())
    for(const manager of managers){
        manager.load();
    }
}

function registerCommands(){
    data();
    form();
    rank();
}

function registerEvents(){
    BlockBreak();
    BlockInteract();
    BlockPlace();
    ItemUseOn();
    PlayerJoin();
}

function registerTasks(){
}

events.serverClose.on(()=>{
    console.log('\x1b[36m[PrisonCore] \x1b[31mClosed');
    for(const manager of managers){
        manager.save();
    }
});