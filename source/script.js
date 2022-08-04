const $ = document;
let btnCallTaxi = $.querySelector(".custom-btn");
let taxiAnimation = $.querySelector(".road");
let transferToMobile = $.querySelector(".div-btn a");
// console.log(transferToMobile);
function callTaxi(params) {
    console.log("Call Taxi");
    btnCallTaxi.style.display = "none";
    taxiAnimation.style.display = "flex";
    setTimeout(() => {
        btnCallTaxi.style.display = "block";
        taxiAnimation.style.display = "none"; 
        window.location = "tel:09146677451";
    }, 3000);
};
transferToMobile.addEventListener('click', callTaxi);