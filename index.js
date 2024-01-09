const axios = require('axios');
const https = require('https');
let number = 1;

async function sendMultipleRequests(){
  try {
    const agent = new https.Agent({
      rejectUnauthorized: false // Игнорировать ошибку self-signed certificate
    });

    const requests = [];
		for(x = 0; x != number; x++)
		{
			requests.push(axios.get('https://localhost:7044/Products_Manage/All', { httpsAgent: agent }));
		}
		number++;

    const responses = await Promise.all(requests);

		console.log(`Length requests: ${requests.length} `)
    responses.forEach(response => {
    });
  } 
	catch (error) {
    console.error('Error: ' , error + `  ${number}`  );
		console.log(`Max response  is: ${number}`);
	}
	sendMultipleRequests();
}

sendMultipleRequests();