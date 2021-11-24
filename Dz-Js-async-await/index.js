'use strict';

const getIpClient = async () => {
  const response = await fetch('https://api.ipify.org/?format=json');
  const data = await response.json();
  const { ip } = data;
  getUser(ip);
  return data;
};

const getUser = async (ip) => {
  const response = await fetch(`http://ip-api.com/json/${ip}`);
  const dataUser = await response.json();
  const { countryCode, country, regionName, region, city } = dataUser;
  addIpOnPage(countryCode, country, regionName, region, city);
  return dataUser;
};

const addIpOnPage = async (countryCode, country, regionName, region, city) => {
  const btnEl = document.querySelector('.btn');
  btnEl.addEventListener('click', (e) => {
    e.preventDefault();
    const elUl = document.createElement('ul');
    elUl.innerHTML = `
    <li class="country__code">${countryCode}</li>
    <li class="country__code">${country}</li>
    <li class="country__code">${region}</li>
    <li class="country__code">${city}</li>
    <li class="country__code">${regionName}</li>
    `;
    e.target.after(elUl);
  });
};

getIpClient();
