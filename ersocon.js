class ersocon{
    constructor(){
        this.api = "https://ersocon-v2-api.b-cdn.net"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json; charset=UTF-8"}
    }
    async exchange_rates(){
        let req=await fetch(`${this.api}/forex-exchange-rates`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {ersocon};