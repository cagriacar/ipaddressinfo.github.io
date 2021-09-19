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
const getIpInfoAPI = async (ip) => {
    const response =  await fetch(`https://ipinfo.io/${ip}/geo/`);
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
    const ipAddress = document.getElementById('ip-adres');
    let ip = ipAddress.textContent;
    getIpInfoAPI(ip)
    .then((data)=> {
        console.log(data);
        details.innerHTML = `
        <table>
                    <thead>
                        <tr>
                            <th>Bilgilendirme</th>
                            <th>Açıklama</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                            <td>IP</td>
                            <td>: ${data.ip}</td>
                        </tr>
                        <tr>
                            <td>Hostname</td>
                            <td>: ${data.hostname}</td>
                        </tr>
                        <tr>
                            <td>Şehir</td>
                            <td>: ${data.city}</td>
                        </tr>
                        <tr>
                            <td>Bölge</td>
                            <td>: ${data.region}</td>
                            
                        </tr>
                        <tr>
                            <td>Ülke</td>
                            <td>: ${data.country}</td>
                        </tr>
                        <tr>
                            <td>Lok- Koordinat</td>
                            <td>: ${data.loc}</td>
                        </tr>
                        <tr>
                            <td>Posta Kodu</td>
                            <td>: ${data.postal}</td>
                        </tr>
                        <tr>
                            
                            <td>Zaman Dilimi</td>                            
                            <td>: ${data.timezone}</td>                            
                        </tr>
                    </tbody>
                  </table>
        `;
        
    })
    .catch((err)=>{
        console.log('HATA : ', err.message)
        const hata = document.querySelector('.hata');
        hata.style.display = "block";
    });
}

btnIp.addEventListener('click',getIpAddress)
btnInfo.addEventListener('click',getIpInfo)


/* <p class="ip">IP Adresiniz : <span id="ip-adres">192.168.123</span></p> */


