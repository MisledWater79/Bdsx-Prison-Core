import { CommandPermissionLevel, PlayerCommandSelector } from "bdsx/bds/command";
import { ServerPlayer } from "bdsx/bds/player";
import { command } from "bdsx/command";
import { getFakePlayer } from "../Utils/DataManager";
import { PlayerRank } from "../Utils/PlayerRanks";

export default function rank(){
    command.register('rank', 'set a players Rank!').overload((param, origin, output)=>{
        if (param.players) {
            for (const player of param.players.newResults(origin, ServerPlayer)) {
                if(!player.isPlayer()) return;
                if(!PlayerRank[param.rank]) return;
                getFakePlayer(player)?.setRank(PlayerRank[param.rank])
                output.success(`Updated ${player.getName()}'s rank to ${param.rank}`);
            }
        }
    }, {
        players: [PlayerCommandSelector, true],
        rank: command.enum('Rank', PlayerRank)
    });
    command.find('rank').signature.permissionLevel = CommandPermissionLevel.Operator;
}