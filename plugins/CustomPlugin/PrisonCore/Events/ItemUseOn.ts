import { CANCEL } from "bdsx/common";
import { events } from "bdsx/event";
import { getFakePlayer } from "../Utils/DataManager";
import { PlayerRank } from "../Utils/PlayerRanks";
import { inProtectedArea } from "../Utils/Utilities";


export default function ItemUseOn(){
    events.itemUseOnBlock.on((args) => {
        if(!args.actor.isPlayer()) return;
        let fakePlayer = getFakePlayer(args.actor)
        if(inProtectedArea(args.actor.getBlockTarget()) && fakePlayer?.getRank() != PlayerRank.Developer) return CANCEL;
    })
}