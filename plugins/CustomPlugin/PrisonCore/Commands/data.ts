import { command } from "bdsx/command";
import { getFakePlayer } from "../Utils/DataManager";

export default function data(){
    command.register('data', 'data for you!').overload((param, origin, output)=>{
        const actor = origin.getEntity();
        if (!actor?.isPlayer()) {
            console.log("it's the command for players");
            return;
        }
        const fakePlayer = getFakePlayer(actor)
        if(fakePlayer){
            output.success(`${fakePlayer.getUuid()}\n${fakePlayer.getName()}\n${fakePlayer.getRank()}\n${fakePlayer.getCoins()}\n${fakePlayer.getCellID()}\n${fakePlayer.getCellMates()}\n${fakePlayer.getKills()}\n${fakePlayer.getDeaths()}\n${fakePlayer.getMinutes()}`)
        } else {
            output.success(`No Data Found`)
        }
    }, {});
}