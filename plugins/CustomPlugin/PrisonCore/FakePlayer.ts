import { PlayerRank } from './Utils/PlayerRanks';

export default class FakePlayer {

    private readonly uuid: string;
    private rank: PlayerRank;
    private name: string;
    private coins: number;
    private cellID: string;
    private cellMates: Array<string>;
    private kills: number;
    private deaths: number;
    private minutes: number;

    constructor(uuid: string, rank: PlayerRank, cellID: string, cellMates: Array<string>, name: string){
        this.uuid = uuid;
        this.rank = rank;
        this.name = name;
        this.coins = 0;
        this.cellID = cellID;
        this.cellMates = cellMates;
        this.kills = 0;
        this.deaths = 0;
        this.minutes = 0;
    }

    getUuid():string{
        return this.uuid;
    }

    getRank():PlayerRank{
        return this.rank;
    }

    setRank(rank: PlayerRank){
        this.rank = rank;
    }

    getName():string{
        return this.name;
    }

    setName(name: string){
        this.name = name;
    }

    getCoins():number{
        return this.coins;
    }

    setCoins(coins: number){
        this.coins = coins;
    }

    getCellID():string{
        return this.cellID;
    }

    setCellID(cellID: string){
        this.cellID = cellID;
    }

    getCellMates():Array<string>{
        return this.cellMates
    }

    setCellMates(cellMates: Array<string>){
        this.cellMates = Array<string>()
        cellMates.forEach(mate => {
            this.cellMates.push(mate)
        })
    }

    getKills():number{
        return this.kills;
    }

    setKills(kills: number){
        this.kills = kills
    }

    getDeaths():number{
        return this.deaths;
    }

    setDeaths(deaths: number){
        this.deaths = deaths;
    }

    getMinutes():number{
        return this.minutes;
    }

    setMinutes(minutes: number){
        this.minutes = minutes;
    }

    toJSON():Object{
        return {
            uuid: this.uuid,
            rank: this.rank,
            name: this.name,
            coins: this.coins,
            cellID: this.cellID,
            cellMates: this.cellMates,
            kills: this.kills,
            deaths: this.deaths,
            minutes: this.minutes
        }
    }
}