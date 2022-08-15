import { Vec3 } from "bdsx/bds/blockpos";
import { events } from "bdsx/event";
import { FakePlayers } from "../../index";
import { PlayerRank } from "../Utils/PlayerRanks";
import FakePlayer from '../FakePlayer';
import UUID from '../Utils/UUID';

export default function PlayerJoin(){
    events.playerJoin.on(args => {
        const player = args.player
        let vec = Vec3.create(0.5,-56,0.5)
        player.teleport(vec)
        if(!FakePlayers.has(player.getUuid())){
            const fakePlayer = new FakePlayer(player.getUuid(), PlayerRank.Member, UUID(),new Array<string>(), player.getName())
            FakePlayers.set(player.getUuid(), fakePlayer)
        }
    })
}