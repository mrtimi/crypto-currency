export class Ticker {
    id: string;
    symbol: string;
    name: string;
    nameid: string;
    rank: number;
    price_usd: string;
    percent_change_24h: string;
    percent_change_1h: string;
    percent_change_7d: string;
    price_btc: string;
    market_cap_usd: string;
    volume24: string;
    volume24a: string;
    csupply: string;
    tsupply: string;
    msupply: string;;

    constructor(json : Object){
        Object.assign(this, json);
    }
}
