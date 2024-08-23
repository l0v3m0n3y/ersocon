# ersocon
JavaScript library for project ersocon.net
# main
```js
async function main(){
    const {ersocon} = require('./ersocon');
    const rates= new ersocon();
    let req=await rates.exchange_rates()
    console.log(req)
}
main()
```
