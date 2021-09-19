const btnIp = document.querySelector('.btn-ip');
const ipDetails = document.querySelector('.ip-details');
const ipInfo = document.querySelector('.ip-info');
const btnInfo = document.querySelector('.btn-info');
const details = document.querySelector('.details');


const getIpAPI = async () => {
    const response =  await fetch("https://api.ipify.org/?format=json");
    if (response.status !== 200) {
        throw new Error("IP Sorgulanamıyor!!!");
    }
    const data = await  response.json();
    return data;
}
const getIpInfoAPI = async () => {
    const response =  await fetch(`https://ipinfo.io/161.185.160.93/geo/`);
    if (response.status !== 200) {
        throw new Error("IP Sorgulanamıyor!!!");
    }
    const data = await response.json();
    return data;
}
const getIpAddress = () => {
    getIpAPI()
    .then((data)=> {
        console.log(data)
        ipDetails.innerHTML = `
        <p class="ip">IP Adresiniz : <span id="ip-adres">${data.ip}</span></p>
        `;
        ipInfo.style.display = "flex";
    })
    .catch((err)=>{
        console.log('HATA : ', err.message)
    });
}
const getIpInfo = () => {
   /*  const ipAddress = document.getElementById('ip-adres');
    let ip = ipAddress.textContent; */
  
}

btnIp.addEventListener('click',getIpAddress)
btnInfo.addEventListener('click',getIpInfo)


/* <p class="ip">IP Adresiniz : <span id="ip-adres">192.168.123</span></p> */




    fetch("https://ipinfo.io/161.185.160.93/geo")
.then((response)=>{
console.log("Resolved : ",response);
return response.json();
})
.then((data)=>{
console.log(data)
})
.catch((err)=>{
  console.log("Rejected : ",err)

});
