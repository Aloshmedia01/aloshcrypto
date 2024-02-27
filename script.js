var btc = document.getElementById("bitcoin");
var doge = document.getElementById("dogecoin");
var eth = document.getElementById("ethereum"); 
var settings = {
    "async": true,
    "scrossDomian": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2CEthereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}
$.ajax(settings).done(function(response){
btc.innerHTML = response.bitcoin.usd;
doge.innerHTML = response.dogecoin.usd;
eth.innerHTML = response.ethereum.usd;
});
let popup = document.getElementById("popup");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}