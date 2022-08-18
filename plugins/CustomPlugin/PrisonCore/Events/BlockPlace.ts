import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { getFakePlayer } from "../Utils/DataManager";
import { PlayerRank } from "../Utils/PlayerRanks";
import { inProtectedArea } from "../Utils/Utilities";


export default function BlockPlace(){
    events.blockPlace.on((args) => {
        let fakePlayer = getFakePlayer(args.player)
        if(inProtectedArea(args.blockPos) && fakePlayer?.getRank() != PlayerRank.Developer) return CANCEL;
    })
}