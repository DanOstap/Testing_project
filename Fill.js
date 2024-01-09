const axios = require('axios');
const https = require('https');
const url = "https://localhost:7044/Add";
const numbers_request = 100;
const manufacture_Product = ["Nokia",'Samsung',"Sony","Xbox","Apple"];
const description_Product = ["None", "Any", "Nothing"];
const name_Product = ["Laptops","Game","Lamp", "Keyboard"];



const agent = new https.Agent({
  rejectUnauthorized: false
});

let requests = [];
for (let x = 0; x < numbers_request; x++) {
	const data = {
		name_Product: name_Product[Math.floor(Math.random() * name_Product.length)],
		description_Product: description_Product[Math.floor(Math.random() * description_Product.length)],
		manufacture_Product: manufacture_Product[Math.floor(Math.random() * manufacture_Product.length)],
		price_Product: Math.floor(Math.random() * 100)
	};
}

Promise.all(requests).then(responses => {
    responses.forEach(response => {
      console.log('Success', response.data);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
