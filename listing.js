// Parse the query parameters
alert("hello")
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const locationQ = urlParams.get('location');
const checkin = urlParams.get('checkin');
const checkout = urlParams.get('checkout');
const guest = urlParams.get('guest');
const AIRBNB_API_KEY = 'b72b653f85mshface544bffa851fp14f8b4jsn70764afbb428';
// Fetch the data based on the query parameters
const airbnbUrl = 'https://airbnb13.p.rapidapi.com/search-location';
const params = {
  location: locationQ,
  checkin: checkin,
  checkout: checkout,
  adults: guest,
  children: '0',
  infants: '0',
  pets: '0',
  page: '1',
  currency: 'USD'
};
fetch(airbnbUrl, {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': AIRBNB_API_KEY,
    'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  },
  params: params
})
  .then(res => {
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return res.json();
  })
  .then(airbnbData => {
    // Now you have the Airbnb data, and you can use it to display on the page
    console.log("Airbnb Data:", airbnbData);
    // Add your code here to display the data on the page
  })
  .catch(error => {
    console.error('Error fetching Airbnb data:', error);
  });
