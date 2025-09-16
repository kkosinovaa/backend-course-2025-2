const date = '202302';
const timePeriod = 'm';


const baseURL = 'https://bank.gov.ua/';
const url = new URL('NBUStatService/v1/statdirectory/inflation', baseURL);

url.searchParams.append('date', date);
url.searchParams.append('period', timePeriod);
url.searchParams.append("json", "");

console.log('Generated URL: ', url.href);