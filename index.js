const locationQuery = document.getElementById("location-ip");
const checkInQuery = document.getElementById("checkIn-ip");
const checkoutQuery = document.getElementById("checkOut-ip");
const guestQuery = document.getElementById("guest-ip");

const searchButton = document.getElementById("search");
const houseContainer = document.getElementById("houses");
const API_KEY = 'b72b653f85mshface544bffa851fp14f8b4jsn70764afbb428';
const AIRBNB_API_KEY = 'b72b653f85mshface544bffa851fp14f8b4jsn70764afbb428';

// const searchHouses = async() => {
//     console.log("hello");
//   const location = searchQuery.value; 
//   const checkIn = checkInQuery.value;
//   const checkout = checkoutQuery.value;
//   const guest = guestQuery.value;
//       const airbnbUrl = 'https://airbnb13.p.rapidapi.com/search-location';
//       const params = {
//         location: location,
//         checkin: checkIn,
//         checkout: checkout,
//         adults: guest,
//         children: '0',
//         infants: '0',
//         pets: '0',
//         page: '1',
//         currency: 'USD'
//       };
      
//     const res=await  fetch(airbnbUrl, {
//         method: 'GET',
//         headers: {
//           'X-RapidAPI-Key': AIRBNB_API_KEY,
//           'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
//         },
//         params: params
//       })
//       console.log(res);
//         // .then(res => {
//         //   if (!res.ok) {
//         //     throw new Error('Network response was not ok');
//         //   }
//         //   return res.json();
//         // })
//         // .then(airbnbData => {
//         //   // Handle the Airbnb data here
//         //   console.log("Airbnb Data:", airbnbData);
//         // })
//         // .catch(error => {
//         //   console.error('Error fetching Airbnb data:', error);
//         // });
//     }

    searchButton.addEventListener('click', async (e) => {
        e.preventDefault();
        console.log("hello");
        const location = locationQuery?.value||""; 
          const checkIn = checkInQuery?.value||"";
          const checkout = checkoutQuery?.value||"";
          const guest = guestQuery?.value||"";
        const queryParams = `?location=${location}&checkin=${checkIn}&checkout=${checkout}&guest=${guest}`;
        window.location.href = `./listing.html${queryParams}`;
      });
      
