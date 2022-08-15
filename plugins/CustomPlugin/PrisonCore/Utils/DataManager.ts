import { ServerPlayer } from "bdsx/bds/player";
import { storageManager } from "bdsx/storage";
import { FakePlayers } from "../../index";
import FakePlayer from "../FakePlayer";
import { Manager } from "../Manager";

export class DataManager extends Manager{

    load(){
        loadPlayerData();
    }

    save(){
        savePlayerData();
    }

}

export function getFakePlayer(player: ServerPlayer):FakePlayer | undefined{
    return getFakePlayerUuid(player.getUuid())
}

export function getFakePlayerUuid(uuid: string):FakePlayer | undefined{
    return FakePlayers.get(uuid)
}

export function getFakePlayerName(name: string): FakePlayer | undefined{
    for(const player of FakePlayers.values()){
        if(player.getName() == name) return player;
    }
    return undefined;
}

async function loadPlayerData(){
    const storage = await storageManager.get('playerData')
    if(storage.data == null){
        storage.init({
            players: []
        })
        return;
    }
    for(const player of storage.data.players){
        const fakePlayer = new FakePlayer(player.uuid, player.rank, player.cellId, player.cellMates, player.name)
        fakePlayer.setCoins(player.coins)
        fakePlayer.setKills(player.kills)
        fakePlayer.setDeaths(player.deaths)
        fakePlayer.setMinutes(player.minutes)
        FakePlayers.set(player.uuid, fakePlayer)
    }
    storage.close()
}

async function savePlayerData(){
    const storage = await storageManager.get('playerData')
    if(storage.data == null){
        storage.init({
            players:[]
        })
    }
    for(const player of FakePlayers.values()){
        storage.data.players.push(player.toJSON())
    }
    storage.close()
}