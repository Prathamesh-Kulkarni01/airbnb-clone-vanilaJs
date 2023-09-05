// Parse the query parameters
// alert("hello")

const houseContainer = document.getElementById("houses");


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const locationQ = urlParams.get('location');
const checkin = urlParams.get('checkin');
const checkout = urlParams.get('checkout');
const guest = urlParams.get('guest');
const AIRBNB_API_KEY = 'b72b653f85mshface544bffa851fp14f8b4jsn70764afbb428';
let adults=1;
let children =0;
let page=1;
// Fetch the data based on the query parameters
const airbnbUrl = 'https://airbnb13.p.rapidapi.com/search-location';
const url = `https://airbnb13.p.rapidapi.comm/search-location?location=${locationQ}&checkin=${checkin}&checkout=${checkout}&adults=${adults}&children=${children}&infants=0&pets=0&page=${page}&currency=USD `
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b72b653f85mshface544bffa851fp14f8b4jsn70764afbb428',
		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
	}
};




const loadCards=(data)=>{
  data.forEach((item) => {
    const {id, images, name, type, price, persons, previewAmenities, rating } = item;
    const starIcons = Array.from({ length: Math.floor(rating) }, (_, index) => {
      return `<i class="fas fa-star"></i>`;
    });
    if (rating % 1 !== 0) {
      starIcons.push(`<i class="fas fa-star-half-alt"></i>`);
    }
    console.log(item)
    const houseHTML = `
      <div class="house">
        <div class="house-img">
          <a href="house.html?id=${id}"><img src="${images[0]}"></a>
        </div>
        <div class="house-info">
          <p>${type}</p>
          <h3>${name}</h3>
          <div>
            ${previewAmenities.map((val) => `<span>${val}</span>`).join(' / ')}
          </div>
          ${starIcons.join(' ')}
          <div class="house-price">
            <p>${persons} Guest</p>
            <h4>$${price?.rate}<span>/ day</span></h4>
          </div>
        </div>
      </div>
    `;
  
    houseContainer.innerHTML += houseHTML;
  });
  
}


let data =[]

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

function updateFilteredItems() {
  const selectedFilters = Array.from(checkboxes)
    .filter(checkbox => checkbox.checked)
    .map(checkbox => checkbox.name);
  const filteredData = data.filter(item => {
    if (selectedFilters.length === 0 || selectedFilters.includes(item.propertyType)) {
      return true;
    }
    return item.previewAmenities.some(val=>{
      console.log(val, selectedFilters,selectedFilters.some(v=>v===val))
      return selectedFilters.some(v=>v===val)
    })
    
    return false;
  });
  houseContainer.innerHTML = '';
  console.log(data,filteredData,selectedFilters)
  loadCards(filteredData)
}

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', updateFilteredItems);
});
updateFilteredItems();


function calc(data){
  const selectedFilters = Array.from(checkboxes)
  let map=new Map();
  selectedFilters.forEach(val=>{
    map.set(val.name,0)
  })

  data.forEach(val=>{
    val.previewAmenities.forEach(key=>{
      let v=map.get(key)
      if(v>=0){
        map.set(key,v+1)
      }
    })
  })
  selectedFilters.forEach(item=>{
    item.innerHTML=`<p>${item.name}</p> <span>(${map.get(item.name)})</span>`
  })
}

const search=async()=>{
  let val= [
    {
        "id": "889559121206652802",
        "url": "https://www.airbnb.com/rooms/889559121206652802",
        "deeplink": "https://www.airbnb.com/rooms/889559121206652802?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 1,
        "name": "Nice app. near Montmartre",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/e8c1b07f-5b20-4968-8888-15279f7ff70b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a10b6a25-d566-4637-ae5b-bd0996888c95.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-889559121206652802/original/cb316047-9e06-4436-b55c-a33d68c1da9e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-889559121206652802/original/e15fb7ef-dc02-40be-90a9-c51847c81214.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-889559121206652802/original/8e541f4e-056e-498d-9f0e-11adce8ddaac.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-889559121206652802/original/417d417b-cc6c-4667-a3b4-fcd292914700.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-889559121206652802/original/99888ad5-54b7-44c0-9123-41f6b661fa8e.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/a968d8ee-81ff-453f-93f7-cfcf09e0476f.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.886995496327096,
        "lng": 2.3531205962388015,
        "persons": 2,
        "reviewsCount": 11,
        "rating": 4.82,
        "type": "Entire rental unit",
        "userId": 12322143,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            4,
            8,
            137,
            12,
            77,
            79,
            145,
            146,
            85,
            663,
            89,
            665,
            91,
            93,
            30,
            94,
            95,
            415,
            671,
            33,
            34,
            98,
            35,
            611,
            37,
            103,
            40,
            104,
            41,
            44,
            45,
            51,
            52,
            308,
            251
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
        "price": {
            "rate": 131,
            "currency": "USD",
            "total": 131,
            "priceItems": [
                {
                    "title": "$108 x 1 night",
                    "amount": 108
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 18
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "15216293",
        "url": "https://www.airbnb.com/rooms/15216293",
        "deeplink": "https://www.airbnb.com/rooms/15216293?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 2,
        "name": "Equipped studio near Montmartre",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 2,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/295d3463-bb0e-4cde-b2e1-7a722cf58377.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/7f4da621-8747-4cbd-8f03-11e702fe8ce4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/6cae67d8-ef71-4988-befc-38509c223b71.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/3edd20e8-c380-412c-a8b5-1673e470aca9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/f9f7bbf0-129a-492a-8609-b950be0dd398.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/53b7760d-4d01-42f5-ae0f-566512a48267.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/e04a9e1a-0720-4819-92a5-1debbd69ad07.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/58249389-8a1e-4991-80b9-84bda44fe8d7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/5f5b12b3-2190-4c03-987a-9452b9464e15.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/346f6ee3-6219-4a6e-87c3-9cd44d71f973.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/0bede9af-6184-4456-8e4b-b6cf30ad7591.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/cbd58959-9ea5-4fbb-991a-69102874462b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/43d23cfd-fbca-4859-a0ff-333fac3c047b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/b865ef8d-31cc-4292-bcf0-3caa147b285f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/6de8cfb4-8a16-4d60-b070-d840f611faff.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/7d8cb62d-8f16-4abb-ad78-8004b38e0c72.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/4392aaae-3586-4721-aec0-191179f42c1a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/7196e1f4-4389-4b06-81ae-6e639b371536.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/8304e779-131a-42e3-801f-95e37b19a2bf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-15216293/original/5fac58d5-249d-477b-b9d7-5591741be48a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/c714f40f-ecab-47ac-a6f2-002fa36712c2.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/725e4785-3fcb-41e0-8be2-f1f845c7834c.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.894087,
        "lng": 2.3411119,
        "persons": 2,
        "reviewsCount": 26,
        "rating": 4.92,
        "type": "Entire condo",
        "userId": 48072063,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            4,
            8,
            73,
            137,
            10,
            394,
            331,
            77,
            145,
            85,
            86,
            663,
            665,
            90,
            91,
            667,
            92,
            93,
            30,
            94,
            95,
            671,
            672,
            33,
            34,
            35,
            611,
            37,
            103,
            40,
            104,
            41,
            42,
            44,
            236,
            45,
            46,
            625,
            51,
            54,
            185
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_MODERATE",
        "price": {
            "rate": 118,
            "currency": "USD",
            "total": 118,
            "priceItems": [
                {
                    "title": "$97 x 1 night",
                    "amount": 97
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 16
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "934625796538079986",
        "url": "https://www.airbnb.com/rooms/934625796538079986",
        "deeplink": "https://www.airbnb.com/rooms/934625796538079986?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 3,
        "name": "in the center of Paris ( common room )",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/a9bc973b-df2f-4d40-829b-01e35e3d8445.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ced45992-de81-4194-abb8-ae8b2e5676ea.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e433fe0a-6d65-4d9d-b795-46948bd860d6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cb487238-9654-4127-81ba-a6bf3058a947.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a698410f-42db-4b89-9a53-e7e34a352e62.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3f61369a-3f11-4ae7-b6f1-de8511864b42.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1dc483ed-219c-4364-8753-422d9b7db2b6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8c168c7d-dfa4-43e6-8c44-b5ec1c2936b2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ed1f0b6f-acad-4980-96c0-2e42b2b9260d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ff26309b-c36a-4914-a88b-7b166a79db84.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a6fa3d08-e58a-4642-a612-6fe6570ed432.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/eebffd8d-1e59-4453-877d-e7d2a9a93378.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/713eabff-0da8-4bd4-999a-9df088424c81.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ac0dcb77-f024-432d-9d12-b09d5acfa8ab.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/12df5e0f-8bd2-478a-b60f-b3461ddf6faf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d1967f0a-48d4-4077-a1f2-4c78e99aeac9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e2c6761f-0e1c-45d1-b9fc-b15227931c8d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d9c5b680-0beb-479d-aab3-50c357bfd02c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9cdabab6-e2eb-4ae6-a056-c5fae4daa031.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/47530b01-dd21-4ecc-a37c-138bbc42edd1.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.8709,
        "lng": 2.35599,
        "persons": 1,
        "reviewsCount": 3,
        "rating": 5,
        "type": "Shared room in rental unit",
        "userId": 120258783,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            67,
            8,
            73,
            137,
            10,
            394,
            12,
            77,
            79,
            145,
            146,
            85,
            86,
            88,
            89,
            665,
            90,
            91,
            667,
            93,
            30,
            94,
            95,
            415,
            671,
            32,
            96,
            672,
            33,
            34,
            611,
            37,
            39,
            103,
            40,
            104,
            41,
            107,
            44,
            236,
            45,
            46,
            625,
            51,
            308,
            53
        ],
        "previewAmenities": [
            "Self check-in",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_MODERATE",
        "price": {
            "rate": 77,
            "currency": "USD",
            "total": 77,
            "priceItems": [
                {
                    "title": "$59 x 1 night",
                    "amount": 59
                },
                {
                    "title": "Cleaning fee",
                    "amount": 3
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 11
                },
                {
                    "title": "Taxes",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "36063785",
        "url": "https://www.airbnb.com/rooms/36063785",
        "deeplink": "https://www.airbnb.com/rooms/36063785?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 4,
        "name": "Generator - 1 Bed in 8 Bed Dormitory",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 2,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/e641b30f-83ca-4e44-ba00-51155de89acd.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/87c0d7ff-3c89-4491-8815-28d59c31ece4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/fc1c4804-1544-4fd9-93c3-1d3cbb864f50.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/c934431b-a088-40c0-8207-4696689c3928.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a8f84f2c-bea2-4a0c-a644-1b02779575ba.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d835b4f9-46d4-4ab6-bba8-7a76ce70cb10.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/30cef9f7-80bc-41a7-87da-a795fefb67c9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b4afe5fb-2f09-45b9-8e6d-5899df73fd5e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c60df976-f06f-4186-8500-db32abcc948f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/500c28d0-6a92-40e0-9aac-36c032fb9d10.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/5a860625-1e6e-49c2-bf3c-002c52d038c4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/23afcf58-935d-42b3-8025-42661876c552.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/9ccbf19e-cc04-4686-8f6f-970d1bf87b08.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/d9401be7-fd53-4ab3-b213-fa872e261a5b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/4b08466e-cee6-4a83-ab91-542f42435346.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/a3a6b35b-626c-4c0a-95db-a0f81b437e14.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/6130a0ea-7ff3-4b7f-ac48-1c4251ee9489.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/4efac4b6-f2a4-4ec2-a84d-8eb32f4e3518.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/4dcd89a4-2563-4df8-82af-277891afe310.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-36063785/original/8ca18053-cf85-4107-ab20-c89a0a9dd95d.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/1fb8f37e-4fc7-4d8d-a13d-6b895cd2f766.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": true,
        "lat": 48.87809,
        "lng": 2.36816,
        "persons": 1,
        "reviewsCount": 762,
        "rating": 4.28,
        "type": "Shared room in hostel",
        "userId": 269738613,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            33,
            34,
            35,
            515,
            4,
            5,
            38,
            39,
            103,
            104,
            73,
            201,
            10,
            43,
            44,
            77,
            21,
            85,
            86,
            88,
            280,
            30
        ],
        "previewAmenities": [
            "Wifi"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 47,
            "currency": "USD",
            "total": 47,
            "priceItems": [
                {
                    "title": "$46 x 1 night",
                    "amount": 46
                },
                {
                    "title": "Taxes",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "908877523156233639",
        "url": "https://www.airbnb.com/rooms/908877523156233639",
        "deeplink": "https://www.airbnb.com/rooms/908877523156233639?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 5,
        "name": "Studio 12th 8 minutes from Lyon train station",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/d56fb342-b3cc-47bf-9cc9-04f544369d4a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/d7c50086-bf90-4bcb-8481-82eb3f9085c0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/87e2ed6b-e16d-4f18-953a-f709715b1ad0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/fe7cc1bd-7d76-4164-83c3-05c154112453.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/e2f24849-7290-48d3-850b-677d1a118dcf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/a5f29efd-a042-4db7-9345-09aa606cf344.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/5919ecea-ff24-488f-80da-ceaad56cc08e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/79901757-c233-4f6f-b51e-a22f87c9959d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/a8c06060-f473-4262-88ba-981a3748e670.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/d8e9e6d5-caa0-415f-898e-db46959558f9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/72b5dd34-bb56-46ea-ab95-a168847235c4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/91edfda6-465d-4d2b-8853-386c6a6cf281.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/575fe91d-9ca8-47b9-a849-f61318ba6ab1.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-908877523156233639/original/18f74210-f2e5-4faa-98bc-2b461725c4dc.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/bf89a2f9-e385-43dc-bcff-906337ca8cc0.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.84326,
        "lng": 2.38374,
        "persons": 1,
        "reviewsCount": 11,
        "rating": 4.73,
        "type": "Entire rental unit",
        "userId": 518811749,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            35,
            611,
            4,
            8,
            40,
            41,
            137,
            522,
            44,
            77,
            46,
            47,
            625,
            308,
            85,
            86,
            665,
            91,
            30,
            94,
            95,
            287,
            671
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_MODERATE",
        "price": {
            "rate": 105,
            "currency": "USD",
            "total": 105,
            "priceItems": [
                {
                    "title": "$86 x 1 night",
                    "amount": 86
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 14
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "42885898",
        "url": "https://www.airbnb.com/rooms/42885898",
        "deeplink": "https://www.airbnb.com/rooms/42885898?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 6,
        "name": "Small single room in the hearth of Paris",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/ebf44d01-a2a4-4548-b26c-e037734f0776.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/371ac12a-3d1d-4c9d-8a9f-81af52ab0b1f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1dd0057f-a512-4f01-89ab-e897b8272036.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8af892d2-a6ac-42d6-870c-d2f5f0688c5d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0da9b3e0-3273-4a27-ae9a-0da4a973f1f8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3a85b655-00e0-43c8-91b5-b7fef59828ae.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d1f570df-e9a6-4377-96ff-d87f724d59ef.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4a243c00-8672-491e-ae71-ac1886a664b7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0f10d89e-46bf-4997-8faf-0ea15cdcade5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4493ee9d-d59e-4c47-a6de-a559d6f5e875.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1e0ab350-9874-4778-92dc-37d259067fbf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e4a9433d-05ed-4bb6-bec4-5d2ada0bae34.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fb4ae9bf-197b-4caf-9417-10959ce2e2df.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ee37a996-72a9-4cc0-b6ab-7fa733e87d65.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/97055160-bb13-47c3-b065-76cfb3f83f27.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c0abb81e-8738-4085-a15a-26976246c540.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/99395fc2-d717-42a7-9cb9-be36b445e42a.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.83989,
        "lng": 2.33745,
        "persons": 1,
        "reviewsCount": 20,
        "rating": 4.25,
        "type": "Room in hotel",
        "userId": 340931471,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            611,
            4,
            103,
            40,
            232,
            41,
            42,
            44,
            45,
            77,
            46,
            79,
            85,
            86,
            87,
            56,
            57,
            30,
            671
        ],
        "previewAmenities": [
            "Wifi"
        ],
        "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
        "price": {
            "rate": 171,
            "currency": "USD",
            "total": 171,
            "priceItems": [
                {
                    "title": "$169 x 1 night",
                    "amount": 169
                },
                {
                    "title": "Taxes",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "922230351501999072",
        "url": "https://www.airbnb.com/rooms/922230351501999072",
        "deeplink": "https://www.airbnb.com/rooms/922230351501999072?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 7,
        "name": "Bright room on the banks of the Seine.",
        "bathrooms": 1.5,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-922230351501999072/original/e3d897c2-1895-45f5-91cf-7b7f6194a141.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-922230351501999072/original/ffb7d870-0230-49cb-9703-2cc55dc7f8bc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-922230351501999072/original/09464b0b-9084-40fe-8cb4-f903d0385c90.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-922230351501999072/original/099d5416-c9fc-4f3c-bbdb-bd6190316a74.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-922230351501999072/original/c340de58-dbb8-407c-b213-af319dde9d6a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/5852c1f9-54df-47eb-9c61-df263f2ec655.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8465843c-78c4-4a53-9e52-ce70101e5a02.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/be1f3f1f-8718-45dc-8304-2b9754715678.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.89003390000001,
        "lng": 2.374797,
        "persons": 2,
        "reviewsCount": 11,
        "rating": 4.64,
        "type": "Private room in bed and breakfast",
        "userId": 522091114,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            33,
            129,
            66,
            35,
            515,
            4,
            5,
            8,
            392,
            74,
            75,
            459,
            12,
            364,
            46,
            47,
            371,
            693,
            91,
            93
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 77,
            "currency": "USD",
            "total": 77,
            "priceItems": [
                {
                    "title": "$57 x 1 night",
                    "amount": 57
                },
                {
                    "title": "Cleaning fee",
                    "amount": 5
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 11
                },
                {
                    "title": "Taxes",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "51317968",
        "url": "https://www.airbnb.com/rooms/51317968",
        "deeplink": "https://www.airbnb.com/rooms/51317968?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 8,
        "name": "Super cosy Single room at Opera!",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-51317968/original/9f866c28-9c06-48ef-86cb-5a5c297a1545.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51317968/original/368dbdd9-b153-4be3-bc3c-6d41c1f4e207.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51317968/original/90746db6-0831-4c72-82b4-663a54302a8b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51317968/original/665f16dc-aba0-4f30-ae56-bbf915f75109.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/c3278779-1a84-4f4f-9bfe-e44d520c6af2.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.871403,
        "lng": 2.335285,
        "persons": 1,
        "reviewsCount": 132,
        "rating": 4.52,
        "type": "Room in hotel",
        "userId": 415613476,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            35,
            611,
            4,
            36,
            5,
            39,
            40,
            41,
            42,
            45,
            77,
            47,
            51,
            85,
            55,
            30,
            671
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 164,
            "currency": "USD",
            "total": 164,
            "priceItems": [
                {
                    "title": "$162 x 1 night",
                    "amount": 162
                },
                {
                    "title": "Taxes",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "49312153",
        "url": "https://www.airbnb.com/rooms/49312153",
        "deeplink": "https://www.airbnb.com/rooms/49312153?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 9,
        "name": "Confortable studio center of Saint-Ouen - M14/M13",
        "bathrooms": 1,
        "bedrooms": 0,
        "beds": 1,
        "city": "SAINT-OUEN",
        "images": [
            "https://a0.muscache.com/im/pictures/9050f321-a30c-40db-880c-2429226a6eb6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c230211d-7e0c-40e9-b82c-566cebd41529.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cfc78506-bb62-4742-8744-e9e5c96ff760.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c51ceb75-6456-4f4f-8702-71cfb642598d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5394e44c-ed4e-4465-8e40-8f4ac95985fb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9bc9ac6d-79c5-4e47-b6dc-e01984d55c42.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4e3adb8b-bb20-49e1-9ede-e6040f25a403.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/99f2137d-9c93-4dcd-a868-c50b5d53d70f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/39bca3fd-2c2f-4aff-9d81-641d746cf37f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/81b628b1-31dc-48d6-a9c5-100d366004d3.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/57800a2f-3fb2-4bf9-a1a4-45822dda6202.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": true,
        "lat": 48.913418,
        "lng": 2.324338,
        "persons": 2,
        "reviewsCount": 762,
        "rating": 4.53,
        "type": "Room in aparthotel",
        "userId": 397836098,
        "address": "SAINT-OUEN, SAINT-OUEN, France",
        "amenityIds": [
            64,
            1,
            4,
            71,
            8,
            392,
            73,
            137,
            394,
            522,
            12,
            77,
            15,
            21,
            85,
            86,
            88,
            89,
            665,
            91,
            92,
            93,
            30,
            94,
            415,
            671,
            672,
            33,
            35,
            227,
            611,
            37,
            39,
            103,
            40,
            104,
            232,
            41,
            42,
            44,
            236,
            45,
            46,
            47,
            51,
            308,
            55
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 131,
            "currency": "USD",
            "total": 131,
            "priceItems": [
                {
                    "title": "$131 x 1 night",
                    "amount": 131
                }
            ]
        }
    },
    {
        "id": "873054999694345779",
        "url": "https://www.airbnb.com/rooms/873054999694345779",
        "deeplink": "https://www.airbnb.com/rooms/873054999694345779?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 10,
        "name": "A2, 1 Single Bed in a 4-Person Dormitory in Paris",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/1a8e4249-d5e4-4061-bb6a-a89ca8eb6f52.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cae969ae-0c2b-4056-a7c5-9edc98283468.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e4a78f4b-58e7-45c1-b486-8ccfcb5691e1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/baf3da68-0b83-43fe-a85c-ddc65b19e120.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/27b4a80b-c320-4153-8b2c-ea4702ab16ad.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9eda6ccc-3855-4db8-b821-05f594d43995.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1331fb75-6219-4ab9-863f-f0785a0459fb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d5551dd2-848a-40ba-aa18-9f886c3521bd.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/59b7f51f-7692-4dc8-94b8-1bbd0c5362ce.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.89119386470293,
        "lng": 2.376416064798832,
        "persons": 1,
        "reviewsCount": 33,
        "rating": 4.52,
        "type": "Shared room in hostel",
        "userId": 373224575,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            4,
            5,
            8,
            137,
            10,
            394,
            77,
            79,
            146,
            21,
            85,
            86,
            663,
            280,
            89,
            90,
            91,
            92,
            93,
            30,
            94,
            671,
            672,
            35,
            611,
            36,
            37,
            39,
            103,
            40,
            104,
            41,
            42,
            107,
            44,
            236,
            45,
            46,
            47,
            625,
            308
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 55,
            "currency": "USD",
            "total": 55,
            "priceItems": [
                {
                    "title": "$52 x 1 night",
                    "amount": 52
                },
                {
                    "title": "Taxes",
                    "amount": 3
                }
            ]
        }
    },
    {
        "id": "29671637",
        "url": "https://www.airbnb.com/rooms/29671637",
        "deeplink": "https://www.airbnb.com/rooms/29671637?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 11,
        "name": "Apartment hyper city center F2",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Vincennes",
        "images": [
            "https://a0.muscache.com/im/pictures/32654b0a-43d6-42ac-bb1f-83248f24ebba.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cd713cee-d2f6-45a8-9da8-dc830ea7ae01.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/40ccddc4-24a5-47a0-bcb9-ae67ceda1dc2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9cb513de-3674-4285-8e78-7e26d29a0e21.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/add47574-a5fc-411a-baaa-1fa4a66b0c3e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f857f9d4-45bb-4427-8f7f-2863a435e525.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8153a718-0381-4a65-a453-de8a88d7d012.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7e658a9d-dedf-47b0-a92c-664606eb6c11.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/559211e8-0586-471e-8f65-b40112a37f73.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4354e5a0-0d24-467e-8dd1-aecd504e30d4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/08d3b9e5-b58e-42fb-a14d-688fa3c6f42f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/946e9e27-4786-43db-8f8b-2ca6215a40e5.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/057d4245-ad19-4894-995e-0cba249567f8.jpg?aki_policy=profile_x_medium",
        "isSuperhost": true,
        "rareFind": true,
        "lat": 48.84704,
        "lng": 2.43815,
        "persons": 2,
        "reviewsCount": 329,
        "rating": 4.89,
        "type": "Entire rental unit",
        "userId": 38062525,
        "address": "Vincennes, Île-de-France, France",
        "amenityIds": [
            1,
            129,
            4,
            8,
            137,
            10,
            394,
            522,
            11,
            12,
            77,
            79,
            85,
            86,
            663,
            665,
            90,
            91,
            667,
            92,
            93,
            30,
            94,
            95,
            415,
            671,
            672,
            33,
            35,
            611,
            36,
            40,
            104,
            41,
            44,
            236,
            45,
            46,
            625,
            308,
            185,
            251
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_MODERATE",
        "price": {
            "rate": 128,
            "currency": "USD",
            "total": 128,
            "priceItems": [
                {
                    "title": "$89 x 1 night",
                    "amount": 89
                },
                {
                    "title": "Cleaning fee",
                    "amount": 16
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 18
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "51286399",
        "url": "https://www.airbnb.com/rooms/51286399",
        "deeplink": "https://www.airbnb.com/rooms/51286399?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 12,
        "name": "Independent studio balcony wifi - Marcadet station",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-51286399/original/23629cb5-db56-4fb2-83e8-a51c6325c590.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51286399/original/29da0482-3f83-4465-b717-0744302f9ba1.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51286399/original/27c04209-153a-4437-bb66-e48fc20470a2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51286399/original/d98d7b88-385e-4dd4-9047-ac724a23c992.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51286399/original/df77cbe0-fa57-476a-ba34-d8ab9b065948.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51286399/original/e261e05d-d027-4690-b004-f5894609cec6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51286399/original/a5424279-c3a6-4fc8-9003-532c3b9e9c2b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51286399/original/42ec5521-1f72-4ff5-b17d-261a37769eb2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51286399/original/db248c3a-c5bd-447a-8d05-b6789fa1592b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/3b1fc2df-84cf-4f99-8fb6-643eee3c31e4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/dd0aa6d9-5b22-4dce-86a3-ecf8dcaf24ed.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d89b2c27-d664-458e-a8d4-af4355d77da7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1dbe3c91-98ba-4b6f-95f9-4b0413a039bb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c26471c9-9329-41e8-864b-85cd81736900.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9313fc6e-0786-40c4-95bb-5b176ae2cee8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4dc2d45d-aceb-435c-8d5f-59962b8e1ad7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c7fc9657-2917-4ad2-89cb-492209b13ee0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7b1ecd16-91a2-438e-b753-d4e165481325.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e1ccd174-11b2-43af-b2ea-f347f9ff8bf4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/bb6d4ed7-c6d2-4763-bdc2-aa33da0868be.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fd648fba-ba9e-453b-a738-179920dd21fa.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/53ebd887-5ddb-408b-b7f3-be53d2bc8d49.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d0a8f72e-0ffe-4a96-b5ca-de58396e08db.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0fc8644e-4d74-4b1c-aedc-0300765fd310.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4261e85a-d925-4fee-baec-f235ff1712e9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/79564238-3220-4a77-9182-1b2a1cd675df.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8925212a-71e8-491e-847b-1231f6734cfa.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-51286399/original/796dbe5d-97e5-4601-a3dc-8278486e432e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/830e82f8-5bc6-4723-aa8c-728462b5731c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0891ea86-6357-48ea-8501-cf6d461040aa.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/bebe1ae4-9582-45c6-b97e-886ded713130.jpg?aki_policy=profile_x_medium",
        "isSuperhost": true,
        "rareFind": true,
        "lat": 48.889366,
        "lng": 2.355819,
        "persons": 2,
        "reviewsCount": 198,
        "rating": 4.82,
        "type": "Private room in rental unit",
        "userId": 7953131,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            4,
            8,
            137,
            10,
            522,
            12,
            16,
            146,
            21,
            663,
            280,
            665,
            667,
            30,
            415,
            671,
            672,
            33,
            35,
            39,
            40,
            41,
            42,
            44,
            45,
            46,
            47,
            51,
            179,
            308,
            54,
            56,
            57,
            73,
            77,
            79,
            85,
            86,
            87,
            89,
            90,
            91,
            93,
            94,
            95,
            611,
            100,
            103,
            107,
            236,
            625,
            500
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 157,
            "currency": "USD",
            "total": 157,
            "priceItems": [
                {
                    "title": "$108 x 1 night",
                    "amount": 108
                },
                {
                    "title": "Cleaning fee",
                    "amount": 22
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 22
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "49312413",
        "url": "https://www.airbnb.com/rooms/49312413",
        "deeplink": "https://www.airbnb.com/rooms/49312413?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 13,
        "name": "Quiet studio in the center of Malakoff - M13 and M4",
        "bathrooms": 1,
        "bedrooms": 0,
        "beds": 1,
        "city": "MALAKOFF",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-49312413/original/dd187699-eb3a-46ba-92c7-462fb6ec752d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49312413/original/7293f734-3265-4f6f-a241-756cd7c8f01d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49312413/original/e0422b67-e528-4736-a2ea-d2182bc3f255.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49312413/original/47ad22d5-04fd-4f7e-90f4-036845736d0b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49312413/original/cd400933-1e35-480e-8791-fbf18ffb7c35.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49312413/original/9eab316f-627f-4c90-b4ca-0a18250053cb.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49312413/original/c303f67b-462c-4141-9dd1-6806dbe6eafc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-49312413/original/12170dfd-f258-45a1-8fc7-967ab3ed1700.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/0107ff61-163f-4722-ab46-e9c35d31b525.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1a3d1d1e-a6f5-41b4-9437-ece0cc1d0357.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/73dc1e70-1650-4423-82a0-f8f785584fb8.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.819084,
        "lng": 2.303771,
        "persons": 2,
        "reviewsCount": 754,
        "rating": 4.61,
        "type": "Entire serviced apartment",
        "userId": 397837561,
        "address": "MALAKOFF, MALAKOFF, France",
        "amenityIds": [
            1,
            4,
            71,
            8,
            522,
            12,
            77,
            79,
            145,
            146,
            21,
            85,
            665,
            93,
            30,
            94,
            287,
            35,
            103,
            42,
            107,
            44,
            45,
            46,
            47,
            51,
            55
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 130,
            "currency": "USD",
            "total": 130,
            "priceItems": [
                {
                    "title": "$128 x 1 night",
                    "amount": 128
                },
                {
                    "title": "Taxes",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "878885468206380298",
        "url": "https://www.airbnb.com/rooms/878885468206380298",
        "deeplink": "https://www.airbnb.com/rooms/878885468206380298?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 14,
        "name": "Room 1 for up to 1 person in a local home",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/9f2da096-7997-4398-ac5c-593882e7e591.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/503ad084-55fa-4cf5-b0c8-50921effc176.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/29ced457-7ed5-4a90-ad4a-35882acc3f68.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c622db10-da4f-46f9-9c52-b630b8828832.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3ec4d376-97e3-4303-9dfc-dca56b2bf6fb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d1c23e55-824f-4f36-9e85-2ce1364660ce.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/59ee7db9-2d7f-42e0-b419-2d6bb9a0f3b6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/20fe59f9-fe5b-4d84-acea-37569a67587a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/21cb8b74-0d2a-42e7-8630-13322a6b85a5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7416e3b6-6878-4786-84d0-348d60cb003c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c050c9a0-2c7f-4694-bc18-a8e9ba80b2a7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/82cfeaba-1a13-4acb-bb46-ac543bdb447c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/18e170c9-d666-4290-adc8-c3efb7192942.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/102da040-c662-41cf-bb18-ccf77115f781.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1fa857c3-dfd7-4825-bff4-3eab0f834fc6.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/46c8391d-c677-4673-ae46-8c653634613f.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.892692757790755,
        "lng": 2.3765406713689723,
        "persons": 1,
        "reviewsCount": 16,
        "rating": 4.63,
        "type": "Private room in rental unit",
        "userId": 432168673,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            64,
            129,
            35,
            611,
            4,
            40,
            104,
            10,
            44,
            45,
            77,
            46,
            47,
            85,
            87,
            663,
            56,
            88,
            665,
            671
        ],
        "previewAmenities": [
            "Wifi"
        ],
        "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
        "price": {
            "rate": 58,
            "currency": "USD",
            "total": 58,
            "priceItems": [
                {
                    "title": "$47 x 1 night",
                    "amount": 47
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 8
                },
                {
                    "title": "Taxes",
                    "amount": 3
                }
            ]
        }
    },
    {
        "id": "972251414474881648",
        "url": "https://www.airbnb.com/rooms/972251414474881648",
        "deeplink": "https://www.airbnb.com/rooms/972251414474881648?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 15,
        "name": "Studio student au ctre de Paris",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-972251414474881648/original/5e8ac267-2d78-436e-b5da-899e28d3e26c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-972251414474881648/original/894a3b0f-485d-4ff9-9dda-9d25d137bb65.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-972251414474881648/original/19478bb3-2b56-4b18-a5f6-69bce5004d78.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-972251414474881648/original/e2445eba-5004-4925-b71b-67b28a33da18.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-972251414474881648/original/ff0fb84c-8f35-4aec-aa87-079b5069b025.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-972251414474881648/original/f1021432-6194-4f15-9fb0-d746a721504f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-972251414474881648/original/23e1a5f5-1766-4835-80a9-cfd5919828af.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-972251414474881648/original/e4f8eb17-b17c-4642-95b4-006dac5d44fd.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-972251414474881648/original/27f72f1d-d511-49b5-b492-2478b1deb068.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-535255381/original/9442e196-cde9-42d2-88f4-558a9f2c1954.jpeg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.84679,
        "lng": 2.39027,
        "persons": 1,
        "reviewsCount": 0,
        "type": "Entire rental unit",
        "userId": 535255381,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            8,
            137,
            394,
            522,
            77,
            79,
            146,
            21,
            85,
            280,
            89,
            665,
            91,
            93,
            30,
            94,
            95,
            96,
            98,
            35,
            611,
            36,
            100,
            37,
            39,
            40,
            104,
            41,
            47,
            51,
            179,
            53
        ],
        "previewAmenities": [
            "Self check-in",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
        "price": {
            "rate": 106,
            "currency": "USD",
            "total": 106,
            "priceItems": [
                {
                    "title": "$76 x 1 night",
                    "amount": 76
                },
                {
                    "title": "Cleaning fee",
                    "amount": 11
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 14
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "911457342659318903",
        "url": "https://www.airbnb.com/rooms/911457342659318903",
        "deeplink": "https://www.airbnb.com/rooms/911457342659318903?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 16,
        "name": "Private room in Paris 19th",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-911457342659318903/original/18095e8d-2516-4e5e-902a-453d572cd946.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/6e74d2ac-0882-40e2-b619-84e28b4d91b1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-911457342659318903/original/2c2b2ab0-fa6b-4a3d-aeae-022639289f43.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/bcedb33a-73ff-49c0-a7f7-c240b0e28ff2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-911457342659318903/original/9142c858-d120-43e8-9f80-5cbfc5c10ab8.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-911457342659318903/original/5bf325d7-0156-4fd8-9bc2-e2443fc98746.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-911457342659318903/original/eb638b22-a3a2-485f-b31d-bd0d2dc89d58.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-911457342659318903/original/c249bdf1-05cf-43ee-b73c-45c1aa6ecc81.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-911457342659318903/original/f05bd8a3-96ec-42b5-985e-62e984749540.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/9c860759-8157-4ef1-91a0-d43b50687e61.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-911457342659318903/original/84b2ed76-df47-42d7-94f3-94a407b75fdc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/9d206ed2-4a65-4dd6-9a04-794f4ae742f8.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=D&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.89269441389886,
        "lng": 2.3823225923040146,
        "persons": 2,
        "reviewsCount": 3,
        "rating": 5,
        "type": "Private room in rental unit",
        "userId": 516038770,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            33,
            35,
            131,
            4,
            8,
            45,
            77,
            46,
            47,
            85,
            91,
            61,
            93,
            671
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 86,
            "currency": "USD",
            "total": 86,
            "priceItems": [
                {
                    "title": "$65 x 1 night",
                    "amount": 65
                },
                {
                    "title": "Cleaning fee",
                    "amount": 5
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 12
                },
                {
                    "title": "Taxes",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "51271532",
        "url": "https://www.airbnb.com/rooms/51271532",
        "deeplink": "https://www.airbnb.com/rooms/51271532?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 17,
        "name": "Dorm Maraudeur Femme/Female",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/2b4fdbfb-19e7-45dc-9b00-2c7af6489a4a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fe61a502-90b2-4f44-974b-93281b93ba66.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8dffc9dc-3a36-4d5d-92c9-0f4d1eea57f0.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-410031718/original/33eb48b5-01e7-4592-b621-1c25f5b90a86.jpeg?aki_policy=profile_x_medium",
        "isSuperhost": true,
        "rareFind": false,
        "lat": 48.84293,
        "lng": 2.31181,
        "persons": 1,
        "reviewsCount": 219,
        "rating": 4.78,
        "type": "Shared room in boutique hotel",
        "userId": 410031718,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            35,
            4,
            5,
            21,
            37,
            39,
            42,
            45
        ],
        "previewAmenities": [
            "Wifi"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 100,
            "currency": "USD",
            "total": 100,
            "priceItems": [
                {
                    "title": "$95 x 1 night",
                    "amount": 95
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "717165845442117917",
        "url": "https://www.airbnb.com/rooms/717165845442117917",
        "deeplink": "https://www.airbnb.com/rooms/717165845442117917?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 18,
        "name": "Private room in atypical 11th century duplex.",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-717165845442117917/original/e3d18697-cd56-486a-adad-fc5383123119.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-717165845442117917/original/c5a57604-1a62-410f-b20d-9fffada44a30.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/89294802-e63f-44ab-9217-23a2ce9fd207.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7dd93185-36f5-4611-a006-b7ddba693238.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-717165845442117917/original/92b87be8-6ed2-4078-8623-661dd2d4c49e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-717165845442117917/original/94ef185f-4c59-4bc7-95c3-05cb410939b5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/3a45764c-cd1b-4f5c-99c1-5a106a12a231.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-717165845442117917/original/2064a127-d1c5-4046-ad76-0f3df9d23d2a.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/cc26f42d-2dca-4061-a3eb-74570c709571.jpg?aki_policy=profile_x_medium",
        "isSuperhost": true,
        "rareFind": false,
        "lat": 48.85169982910156,
        "lng": 2.3863894939422607,
        "persons": 2,
        "reviewsCount": 27,
        "rating": 4.89,
        "type": "Private room in rental unit",
        "userId": 100378228,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            16,
            35,
            4,
            37,
            38,
            40,
            73,
            28,
            44,
            45,
            30
        ],
        "previewAmenities": [
            "Wifi"
        ],
        "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
        "price": {
            "rate": 121,
            "currency": "USD",
            "total": 121,
            "priceItems": [
                {
                    "title": "$99 x 1 night",
                    "amount": 99
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 17
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "13741720",
        "url": "https://www.airbnb.com/rooms/13741720",
        "deeplink": "https://www.airbnb.com/rooms/13741720?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 19,
        "name": "Quiet and clear room in the 5th",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/9049bb20-0ff6-4c2b-aac2-756a4a1f9aca.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1bb4ad58-80f7-4e60-935b-7dec82141cbf.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a65b7e69-ad30-4d87-b9fa-0c4bb8f83608.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/362b9a0b-54cc-4e91-991a-db04c0b5535c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/70cb4137-04ca-4012-861b-07b4ec6e92a9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/df0b0b75-08e4-46d8-8db3-2203aef0a28a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/92b710da-fe5f-4e34-9008-d0b6ac719a4a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a50293ea-1a77-43ef-b815-d65ca4d6015e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4b755530-668b-4cd1-b0f7-d79ca0e17f8c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7165b88f-8fc3-4eaa-800e-0fe73d7e9322.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4b328d0f-75d0-450c-bc12-2e7dc4511ede.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a8454d81-7a95-4385-a061-fe55e1d00f31.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ea238357-ff1a-4581-ab24-1c3e53b883e8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/604fef98-d2d4-4297-b96d-c8a3ec8d6b8b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/37f8397b-d28e-4281-a3ca-4a533a910f9d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9d79c314-cb0c-445c-b39b-de5be3f37a96.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/fedf3e6e-c7cb-44c3-a2f7-dba9725279b4.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/d9d27be2-375a-4788-a0b3-1916bdfba93e.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.84361,
        "lng": 2.35199,
        "persons": 2,
        "reviewsCount": 254,
        "rating": 4.61,
        "type": "Private room in rental unit",
        "userId": 72433127,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            35,
            611,
            4,
            40,
            41,
            137,
            42,
            522,
            45,
            77,
            79,
            146,
            51,
            21,
            85,
            54,
            86,
            88,
            89,
            90,
            91,
            30,
            671
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in"
        ],
        "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
        "price": {
            "rate": 124,
            "currency": "USD",
            "total": 124,
            "priceItems": [
                {
                    "title": "$74 x 1 night",
                    "amount": 74
                },
                {
                    "title": "Cleaning fee",
                    "amount": 31
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 18
                },
                {
                    "title": "Taxes",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "33264239",
        "url": "https://www.airbnb.com/rooms/33264239",
        "deeplink": "https://www.airbnb.com/rooms/33264239?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 20,
        "name": "WATER room, take the Wide!",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Boulogne-Billancourt",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-33264239/original/23284c13-b589-4b90-8b3d-8e7c3b9170ff.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-33264239/original/d112c264-2569-495b-a667-d8dd1fb2a303.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-33264239/original/52e01fb1-4969-4bf9-b23e-1d410dce0b63.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-33264239/original/3c6c894c-ec48-41f9-9479-257e16550f89.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-33264239/original/51be3ce5-28c5-474e-9ad0-98f0272e54dd.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-33264239/original/c16db151-6cba-41d8-94cb-ab19fe8a19ca.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-33264239/original/a831f09b-05f2-4642-b969-a9fcb71003d6.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-33264239/original/9eb6082d-00ed-4dd7-b3bd-a31b6a103000.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-33264239/original/30c17979-f0ab-449d-b196-14691594f8ff.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/1580a325-d551-4aba-925d-0ca4d3102eae.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-33264239/original/c411fdad-2b75-43c2-bf9d-5a5d9b5d1664.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/75f7f4ae-8e95-4c7a-862a-80c00f6e0fc8.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.83532,
        "lng": 2.24274,
        "persons": 2,
        "reviewsCount": 18,
        "rating": 4.78,
        "type": "Room in boutique hotel",
        "userId": 217247710,
        "address": "Boulogne-Billancourt, Île-de-France Region, France",
        "amenityIds": [
            64,
            1,
            2,
            66,
            4,
            72,
            12,
            77,
            21,
            85,
            86,
            87,
            30,
            33,
            34,
            35,
            36,
            100,
            37,
            101,
            39,
            103,
            40,
            41,
            44,
            45,
            46,
            51,
            55
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 116,
            "currency": "USD",
            "total": 116,
            "priceItems": [
                {
                    "title": "$114 x 1 night",
                    "amount": 114
                },
                {
                    "title": "Taxes",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "965232629284114458",
        "url": "https://www.airbnb.com/rooms/965232629284114458",
        "deeplink": "https://www.airbnb.com/rooms/965232629284114458?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 21,
        "name": "Paris Expo Porte de Versailles",
        "bathrooms": 1,
        "bedrooms": 0,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-965232629284114458/original/966fbfe2-6610-4349-9222-111e2f660e0f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-965232629284114458/original/f3b278d0-ed7a-467a-951b-c4e40f0f0db0.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-965232629284114458/original/8a7f3f18-198e-4abe-b9f5-87ae99aa09fa.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-965232629284114458/original/4189405a-7b01-4c5e-b6ab-ca8d8046d05b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-965232629284114458/original/bd2024a3-64db-42cd-a3b1-3bff768fc7e9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-965232629284114458/original/925a5062-a7dd-4ea6-81f4-d0f106ea667d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-965232629284114458/original/837707a2-a359-4f5e-b76c-bd1bcd4dd87b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-965232629284114458/original/1a20fa54-9125-4269-99b5-1455d4f13de3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-965232629284114458/original/9fe7aa72-f0a0-403b-96e8-a3b65a0c627e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-965232629284114458/original/faa618fd-c5e2-4130-9aee-b3592b1e822a.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-533258028/original/41f941df-7c75-49e5-addf-06a772c2c1e1.png?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.8324964,
        "lng": 2.2943961,
        "persons": 1,
        "reviewsCount": 1,
        "type": "Entire rental unit",
        "userId": 533258028,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            33,
            34,
            35,
            4,
            36,
            8,
            40,
            104,
            41,
            44,
            45,
            77,
            46,
            51,
            53
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
        "price": {
            "rate": 111,
            "currency": "USD",
            "total": 111,
            "priceItems": [
                {
                    "title": "$64 x 1 night",
                    "amount": 64
                },
                {
                    "title": "Cleaning fee",
                    "amount": 28
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 15
                },
                {
                    "title": "Taxes",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "28064626",
        "url": "https://www.airbnb.com/rooms/28064626",
        "deeplink": "https://www.airbnb.com/rooms/28064626?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 22,
        "name": "Cozy room in the 11th",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/955aa238-be21-46fd-86e7-f3b82b143ac9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ce71174c-7569-4afa-b562-bcda92fcd61c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/37e31800-026a-4c5f-88ea-f52be8c66081.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7d12b2b6-b4a8-41da-999b-7d89a97a5c37.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b5f6d03c-c761-47f7-8c25-05875581fa4a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e833fe1f-1d9f-4519-bf54-f98251c54ebd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/697877c7-2581-4cc6-b175-0bd163c6d925.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8058ff16-8a6c-4e07-84ba-7569c3fbab2e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/b746915c-c6a2-465f-86a7-2b46dc681bfd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f6c80c1c-67e9-4633-9e7a-5e317f7ad8e8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9d8d6b21-17d0-459b-a3e6-ee463e7e7132.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0f5c7375-5648-4b47-b473-f6ccddc27d26.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2defa530-ef7f-4f3a-a3f8-2fb380916f01.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/680989cb-5f73-43a6-8b15-c92f9b9c198c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-28064626/original/ce68c2b4-2508-46f0-a3e0-a6d90424394c.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/86d45ae3-1f1e-4c65-b1a9-edf573f19c2b.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.854243382882515,
        "lng": 2.3714116201722084,
        "persons": 2,
        "reviewsCount": 0,
        "type": "Private room in rental unit",
        "userId": 196565816,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            129,
            66,
            4,
            392,
            73,
            137,
            10,
            394,
            522,
            77,
            527,
            85,
            86,
            663,
            665,
            90,
            91,
            347,
            92,
            93,
            30,
            415,
            671,
            672,
            33,
            227,
            611,
            103,
            40,
            41,
            107,
            44,
            236,
            45,
            47,
            308,
            61
        ],
        "previewAmenities": [
            "Wifi"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 105,
            "currency": "USD",
            "total": 105,
            "priceItems": [
                {
                    "title": "$86 x 1 night",
                    "amount": 86
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 14
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "39347637",
        "url": "https://www.airbnb.com/rooms/39347637",
        "deeplink": "https://www.airbnb.com/rooms/39347637?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 23,
        "name": "Bed in 10 Bed Dorm",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/b558c952-ba69-472c-98b9-3fe9c14f7e1d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1feb9d26-65e8-4b36-af7a-1aa851406ca1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a89e5881-bfe3-4b3d-bf8a-08b5f019b4e4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/5420fb03-02c9-4bbd-9983-43373b754c2d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/24fe4c8f-799f-463f-bed7-ed00bc36884b.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/63db13c3-1235-4c30-977d-e7467b79a57c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/34f790fc-dee1-4f16-9d71-5286a3dcd475.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/81916940-2c3f-450d-949d-db51e9e3e955.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c818bdbc-99f6-4b1a-ae0b-bbe3b1dfb4f9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/74925c69-de6a-4ffb-b038-5f992db52234.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/725edd60-dc5d-4f0c-86a5-cbf8ef286483.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e0028e58-ad57-4f27-a374-69e5cab3f178.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/84031ab9-0aa0-49d8-9b97-cb0498d85e1f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d6651943-87f1-47ac-a9b4-cadec7dacd41.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e00ec44a-8a57-48e2-9402-0320f53a895f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/32f367b0-4532-447c-926e-21dffb139814.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7074c56e-b23e-453d-943b-2b4c4b6efa94.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/643ef202-fab4-43aa-8169-5fac65d5e8c6.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8e8c2ea9-2d59-4c76-a1cf-016d2e7528df.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1dde03f3-2df4-4627-ba3e-f20ffa967604.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f9e38c00-c82d-4c81-be09-7e05a028151e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8febd7c4-9d56-4574-a5c2-8dc01b90146c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/68dc4c20-647c-45e6-81bf-7e9af0fe09af.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0ad58afd-d21c-4d5f-8432-9120dbd15271.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/26769fbf-866c-4b7d-8c31-9efe538c2426.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/dc2e9854-8226-4f00-84e5-9a3cc2c376a8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/54bf60ab-1280-419d-8c63-1cdbda3a4c72.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/22e65ab8-df37-4878-b906-3be1ae3c52be.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a4bf9cb9-321c-4328-8f04-56d20ff81e57.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f102ab1c-0323-4809-a22b-382565736818.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/e3b10e0c-6635-4445-b90f-82448c210b94.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.8793,
        "lng": 2.35801,
        "persons": 1,
        "reviewsCount": 86,
        "rating": 4.3,
        "type": "Shared room in hostel",
        "userId": 237152218,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            33,
            34,
            3,
            35,
            4,
            100,
            37,
            39,
            103,
            40,
            45,
            77,
            46,
            627,
            21,
            85,
            89,
            91,
            30
        ],
        "previewAmenities": [
            "Wifi"
        ],
        "cancelPolicy": "CANCEL_MODERATE",
        "price": {
            "rate": 50,
            "currency": "USD",
            "total": 50,
            "priceItems": [
                {
                    "title": "$47 x 1 night",
                    "amount": 47
                },
                {
                    "title": "Taxes",
                    "amount": 3
                }
            ]
        }
    },
    {
        "id": "964226018815270617",
        "url": "https://www.airbnb.com/rooms/964226018815270617",
        "deeplink": "https://www.airbnb.com/rooms/964226018815270617?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 24,
        "name": "Private Room, Metro Saint-Michel 2 min away",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/c9ea5a7f-fb5b-488d-9d21-a6f3d6529ece.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8edb47ab-c00d-4292-ba69-743458813436.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9da438b1-d712-4df1-82fa-2bdb03453447.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7deb269e-da67-42cd-b535-57ec95200af7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9b9d16dc-0a80-40a2-a2e7-f398deb1ef0c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/58b86195-465d-40d1-bb16-b086508dd1fe.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9a5520a7-2b4d-4364-9577-4a1ef6e823ec.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1a8859d8-10c8-4769-a980-a022bcd18318.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d2797501-330a-49e0-a843-7c92d8366afd.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a153d07a-ff35-4a2e-be8b-4bf60d9541f0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9f4f28b8-8174-4e77-8d68-58053d8cfdd0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/7880223a-02b9-4981-b821-003a7ebd7c53.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/faa1eee1-6470-4f5a-ae5c-8402a8b59416.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-531613306/original/5ce0c281-452b-4518-b62e-321b8363e248.jpeg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.85312,
        "lng": 2.34551,
        "persons": 1,
        "reviewsCount": 0,
        "type": "Private room in rental unit",
        "userId": 531613306,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            35
        ],
        "previewAmenities": [],
        "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
        "price": {
            "rate": 136,
            "currency": "USD",
            "total": 136,
            "priceItems": [
                {
                    "title": "$112 x 1 night",
                    "amount": 112
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 19
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "876745769555537707",
        "url": "https://www.airbnb.com/rooms/876745769555537707",
        "deeplink": "https://www.airbnb.com/rooms/876745769555537707?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 25,
        "name": "Cozy room at the center of Paris",
        "bathrooms": 1.5,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-876745769555537707/original/ec7a65f6-04af-4698-a78e-91c9b1171e2b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/ac5756f8-140e-49e7-b7fd-9da258b00f22.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/4856696a-d786-410a-9cd8-c45710108e23.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/804f2060-1ccf-4078-a9c7-3031bc5617e4.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/63dea8c4-aecb-4244-9cd0-56154bbb0f62.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cf0dd14a-b9e2-4efa-a112-773e050254a9.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c82ccbff-8bee-433c-b931-d4b7aafb2b7a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8119d6fd-4d97-496d-b3ab-0794355af1ab.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-876745769555537707/original/c77cca1e-0909-42bd-bd76-2acb94f61d88.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/c84538b0-6b57-4d53-ad61-9a2a0be78b97.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ba3717e4-2075-472f-9fe6-f39c3fba2317.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/65af6b08-a3de-44ee-bc99-777c794b24d7.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2fadbf7e-c3f2-412f-ad6a-105b6342d631.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-509531184/original/9a7df8ae-e0d6-47a9-b110-4c0de8bf47c5.jpeg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.87237478579402,
        "lng": 2.3599687591195107,
        "persons": 2,
        "reviewsCount": 21,
        "rating": 4.29,
        "type": "Private room in rental unit",
        "userId": 509531184,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            129,
            2,
            4,
            5,
            133,
            8,
            137,
            10,
            394,
            11,
            12,
            15,
            527,
            145,
            657,
            21,
            663,
            665,
            27,
            667,
            30,
            671,
            672,
            33,
            35,
            37,
            40,
            41,
            44,
            45,
            46,
            308,
            185,
            73,
            77,
            79,
            85,
            86,
            89,
            91,
            92,
            93,
            94,
            95,
            97,
            611,
            103,
            104,
            236,
            625
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
        "price": {
            "rate": 121,
            "currency": "USD",
            "total": 121,
            "priceItems": [
                {
                    "title": "$86 x 1 night",
                    "amount": 86
                },
                {
                    "title": "Cleaning fee",
                    "amount": 13
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 17
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "947827221830612406",
        "url": "https://www.airbnb.com/rooms/947827221830612406",
        "deeplink": "https://www.airbnb.com/rooms/947827221830612406?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 26,
        "name": "Cozy La Défense/ Arena Room",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "La Garenne-Colombes",
        "images": [
            "https://a0.muscache.com/im/pictures/315ea8c9-a615-4fb8-9a6e-36e4c002447f.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/f6c4796f-170b-4dfa-8d07-ffe19ac53f67.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/88a3129d-0332-46d4-9e61-d03b7324ebb8.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/92f645ba-7e9d-4246-b567-9a7afd4a9da3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-947827221830612406/original/5dbe37ca-76d9-4aee-9fd7-a37c1409883b.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/57dc0bb4-79f2-43ec-8d4f-2bc9a1f03858.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a57ad0c6-7b80-4205-b175-11469a10e66d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3a633c31-ede2-48f7-8304-01a081f4d3b2.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/cb5f1395-5f97-415b-92f1-bed9581b777b.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.90277071029553,
        "lng": 2.2407699933788496,
        "persons": 1,
        "reviewsCount": 4,
        "rating": 5,
        "type": "Private room in rental unit",
        "userId": 112736559,
        "address": "La Garenne-Colombes, Île-de-France, France",
        "amenityIds": [
            129,
            4,
            10,
            77,
            145,
            146,
            85,
            86,
            663,
            665,
            91,
            93,
            30,
            94,
            95,
            671,
            98,
            35,
            611,
            100,
            40,
            44,
            236,
            46,
            625
        ],
        "previewAmenities": [
            "Wifi"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 69,
            "currency": "USD",
            "total": 69,
            "priceItems": [
                {
                    "title": "$59 x 1 night",
                    "amount": 59
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 10
                }
            ]
        }
    },
    {
        "id": "922591013032875296",
        "url": "https://www.airbnb.com/rooms/922591013032875296",
        "deeplink": "https://www.airbnb.com/rooms/922591013032875296?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 27,
        "name": "Room closed to stade de France Paris",
        "bathrooms": 1.5,
        "bedrooms": 1,
        "beds": 1,
        "city": "La Courneuve",
        "images": [
            "https://a0.muscache.com/im/pictures/dfbc773c-29b1-41cd-941b-1384ae57e477.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/049cff98-b9b3-46bb-bdd4-6795e08489e1.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ae908cf1-aec0-4c62-b278-28ee3b44ee39.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/dd0f612b-9551-4a1c-8d2b-4a5df0968898.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/436dbba6-ecd2-4c66-8fdc-8777d01a276c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a0101440-a6a5-4131-bc26-5cecdd4d01aa.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c2209575-1f0a-4c0c-886a-cfa5468500fb.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/545e4b8e-a2d0-46df-ac83-e9b9bf68eaca.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8d483f26-ccbf-4d9f-a99e-f121a77496a5.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-922591013032875296/original/859bed8a-5c60-4ee1-9d23-ffc2b73227bc.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-922591013032875296/original/e32cec15-48b5-4a4d-82d1-0739ef930137.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-188283842/original/3b20b7c8-3903-429c-a228-b597790c1e66.jpeg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.93236469303887,
        "lng": 2.379709481467927,
        "persons": 1,
        "reviewsCount": 16,
        "rating": 4.88,
        "type": "Private room in rental unit",
        "userId": 188283842,
        "address": "La Courneuve, Île-de-France, France",
        "amenityIds": [
            1,
            4,
            5,
            8,
            9,
            11,
            77,
            79,
            657,
            85,
            86,
            87,
            665,
            667,
            93,
            30,
            32,
            33,
            34,
            35,
            611,
            36,
            37,
            167,
            40,
            232,
            41,
            44,
            45,
            46,
            47,
            61
        ],
        "previewAmenities": [
            "Wifi",
            "Free parking",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
        "price": {
            "rate": 45,
            "currency": "USD",
            "total": 45,
            "priceItems": [
                {
                    "title": "$37 x 1 night",
                    "amount": 37
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 6
                },
                {
                    "title": "Taxes",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "670732811278702653",
        "url": "https://www.airbnb.com/rooms/670732811278702653",
        "deeplink": "https://www.airbnb.com/rooms/670732811278702653?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 28,
        "name": "Quiet and sunny apartment",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/0f615f3b-3e00-4170-8a32-e78f4643ba99.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/0b4f0878-5d7d-4e50-8ba1-8aa934df453e.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-670732811278702653/original/b714bb03-9d23-4406-8f79-cee1950b811a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-670732811278702653/original/a8477789-a952-431b-98c4-ac0295714e49.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-670732811278702653/original/8830d961-32b0-4424-8c87-b9b5d539ec12.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-670732811278702653/original/a5009f1a-c22c-47cc-b29b-ec8d0a07a399.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-670732811278702653/original/80faf9a9-f477-49df-ae74-c1520d96c3ee.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-670732811278702653/original/8857e234-30ff-4b9c-8430-8e5678438062.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/3cfdfb3a-9108-43e6-b210-bca9220a4601.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/13dd28e8-fb25-4d5d-a6fe-20e732553f92.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.88789149999999,
        "lng": 2.3881524,
        "persons": 2,
        "reviewsCount": 77,
        "rating": 4.35,
        "type": "Private room in rental unit",
        "userId": 362912361,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            33,
            129,
            35,
            227,
            4,
            37,
            167,
            8,
            40,
            44,
            45,
            46,
            47,
            87,
            61,
            93,
            30,
            94,
            671
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 90,
            "currency": "USD",
            "total": 90,
            "priceItems": [
                {
                    "title": "$76 x 1 night",
                    "amount": 76
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 13
                },
                {
                    "title": "Taxes",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "934189934871519178",
        "url": "https://www.airbnb.com/rooms/934189934871519178",
        "deeplink": "https://www.airbnb.com/rooms/934189934871519178?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 29,
        "name": "Lumineux apartment paris 11",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-934189934871519178/original/f339bf1b-fa3c-4426-a4df-9fed26ad9922.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-934189934871519178/original/5e1f7fa1-349b-42de-8bce-7fb69b9e97c9.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-934189934871519178/original/5e54be15-30aa-475e-ad48-159a64c9e997.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-934189934871519178/original/efb0fd53-bd8d-428c-84fc-5bbeda3dda3d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-934189934871519178/original/f81a253a-aeaa-4411-a3f6-f92fb2532792.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-934189934871519178/original/6e0004fc-2f75-4f0e-b26d-dbf690b91991.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-934189934871519178/original/9ca67179-be84-4d83-b63b-3dad0a998d1e.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/5516b076-cafc-455c-a8f8-8fb5a7b6e62a.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": true,
        "lat": 48.86936,
        "lng": 2.3741,
        "persons": 2,
        "reviewsCount": 9,
        "rating": 4.56,
        "type": "Entire rental unit",
        "userId": 155111862,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            4,
            8,
            73,
            137,
            394,
            77,
            79,
            21,
            85,
            89,
            665,
            90,
            91,
            667,
            92,
            93,
            30,
            94,
            95,
            671,
            672,
            33,
            34,
            35,
            611,
            40,
            41,
            236,
            45,
            46,
            625,
            308,
            251,
            315,
            61
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
        "price": {
            "rate": 131,
            "currency": "USD",
            "total": 131,
            "priceItems": [
                {
                    "title": "$86 x 1 night",
                    "amount": 86
                },
                {
                    "title": "Cleaning fee",
                    "amount": 22
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 18
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "967446942569421822",
        "url": "https://www.airbnb.com/rooms/967446942569421822",
        "deeplink": "https://www.airbnb.com/rooms/967446942569421822?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 30,
        "name": "La belle vie",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-964305648376858228/original/5b0b22e1-683e-4f97-9a9a-1f93391bd663.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-964305648376858228/original/195090ed-60a4-46e1-aa1f-f532b17ee57a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-964305648376858228/original/4345669f-41f3-4335-8cb8-aa60ab794a56.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-964305648376858228/original/df60603d-391b-4c6c-82da-f3e0b3c9c00c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-964305648376858228/original/bfb7de9d-e8de-482d-acee-64b30190f7b1.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=N&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.884238745005185,
        "lng": 2.3370706469714917,
        "persons": 2,
        "reviewsCount": 0,
        "type": "Private room in rental unit",
        "userId": 533437426,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            33,
            35,
            4,
            5,
            8,
            47,
            287
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 103,
            "currency": "USD",
            "total": 103,
            "priceItems": [
                {
                    "title": "$73 x 1 night",
                    "amount": 73
                },
                {
                    "title": "Cleaning fee",
                    "amount": 11
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 14
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "12421091",
        "url": "https://www.airbnb.com/rooms/12421091",
        "deeplink": "https://www.airbnb.com/rooms/12421091?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 31,
        "name": "Bed and breakfast #2, beautiful house",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Châtillon",
        "images": [
            "https://a0.muscache.com/im/pictures/598ef4cd-ba12-4e24-b99c-73a4453de473.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/cead48b0-769f-4850-bd3a-db3eadcf6ebe.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3391fd21-ca4e-4b4d-874b-5d1a1a256921.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/1f250640-4306-44e0-8ca4-62fdc9270c0d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8a56d3b9-c4aa-40f8-a150-27d5b2686d49.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/users/34132095/profile_pic/1432507967/original.jpg?aki_policy=profile_x_medium",
        "isSuperhost": true,
        "rareFind": false,
        "lat": 48.81095,
        "lng": 2.28318,
        "persons": 1,
        "reviewsCount": 233,
        "rating": 4.82,
        "type": "Private room in home",
        "userId": 34132095,
        "address": "Châtillon, Île-de-France, France",
        "amenityIds": [
            1,
            33,
            34,
            3,
            35,
            4,
            40,
            9,
            42,
            44,
            77,
            46,
            16,
            49,
            85,
            57,
            89,
            90,
            91,
            30,
            31
        ],
        "previewAmenities": [
            "Wifi",
            "Free parking"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 65,
            "currency": "USD",
            "total": 65,
            "priceItems": [
                {
                    "title": "$55 x 1 night",
                    "amount": 55
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 9
                },
                {
                    "title": "Taxes",
                    "amount": 1
                }
            ]
        }
    },
    {
        "id": "25285443",
        "url": "https://www.airbnb.com/rooms/25285443",
        "deeplink": "https://www.airbnb.com/rooms/25285443?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 32,
        "name": "Room for rent 15 minutes from Porte de Saint Cloud",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Suresnes",
        "images": [
            "https://a0.muscache.com/im/pictures/c720e05c-b2db-449f-8120-a2a644b19510.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/e2bea27b-c589-472c-afa1-0d9903302e4c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d48bbd2c-2b33-4dc8-81ce-b7d224f2c562.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/9ad3d95c-6e1a-48d5-b103-dddc2a05f075.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/98b79eab-1b67-4721-a63e-e8c2c57f5e8d.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2555f70e-7d56-4426-b62b-27186de73fa3.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8b26d0b0-01b9-474f-a110-837cdf90e52c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/a437f481-28d3-463e-a9f5-a1eea84b9269.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/83292d3a-f2ee-4864-8d5e-85c56e61f1f0.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8262ade4-02da-4601-a616-9e44278bae65.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/2514eba3-43d9-4b29-8da7-6e4309b56303.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/c92a5b37-2d44-4f77-b700-f46b80d72f30.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/86905207-7cdd-4f35-b614-2494137c76d9.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/39e9b048-846f-4dad-bf50-61f40bfd8e20.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.86237,
        "lng": 2.2052,
        "persons": 1,
        "reviewsCount": 170,
        "rating": 4.47,
        "type": "Private room in rental unit",
        "userId": 79238365,
        "address": "Suresnes, Île-de-France, France",
        "amenityIds": [
            131,
            4,
            8,
            73,
            10,
            77,
            86,
            89,
            665,
            90,
            91,
            667,
            92,
            93,
            30,
            94,
            95,
            287,
            415,
            671,
            96,
            672,
            35,
            36,
            37,
            103,
            40,
            104,
            42,
            44,
            236,
            45,
            46,
            47,
            625,
            51,
            308,
            54,
            251
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 47,
            "currency": "USD",
            "total": 47,
            "priceItems": [
                {
                    "title": "$33 x 1 night",
                    "amount": 33
                },
                {
                    "title": "Cleaning fee",
                    "amount": 5
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 7
                },
                {
                    "title": "Taxes",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "957324826931313543",
        "url": "https://www.airbnb.com/rooms/957324826931313543",
        "deeplink": "https://www.airbnb.com/rooms/957324826931313543?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 33,
        "name": "Double Porchen best & calm house",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 3,
        "city": "Saint-Ouen-sur-Seine",
        "images": [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/0ffe0fee-45be-4a7f-a2e9-93ecfb249486.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/db3c9db5-e284-4846-a5cf-332be267ee72.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/1b2826be-77a5-406b-8df8-1f9018e7f66c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/d3f3fea5-7b34-4494-a286-dfed62e8ea42.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/fd99bf31-0df3-423e-8bb9-1c4823b44af5.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/c964b1dc-4228-4092-8f2c-5496b16a017c.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/c642162a-4ca6-421e-92c3-c4fd9a264487.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/f8620cd1-f8e4-4f1e-9f0c-9c12056ff841.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/63d2f19d-39bd-4736-a4b1-b6a4eca5dc40.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/572aec12-fa32-46fc-bf7c-60a569a6d633.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/cabb2ef2-d1b2-41e9-8023-271f6b2b0d4e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/529d91ae-e8cf-477c-bbe7-2786e4eb364a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-957324826931313543/original/93bab79a-e9cf-47bb-9066-06045fcba527.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=M&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.90535,
        "lng": 2.33735,
        "persons": 3,
        "reviewsCount": 0,
        "type": "Entire home",
        "userId": 531660144,
        "address": "Saint-Ouen-sur-Seine, Île-de-France, France",
        "amenityIds": [
            4,
            10,
            522,
            77,
            79,
            528,
            145,
            146,
            663,
            89,
            90,
            27,
            92,
            93,
            30,
            415,
            672,
            35,
            611,
            37,
            40,
            104,
            41,
            107,
            44,
            236,
            47,
            51,
            55,
            61
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 64,
            "currency": "USD",
            "total": 64,
            "priceItems": [
                {
                    "title": "$52 x 1 night",
                    "amount": 52
                },
                {
                    "title": "Cleaning fee",
                    "amount": 3
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 9
                }
            ]
        }
    },
    {
        "id": "937746550089162602",
        "url": "https://www.airbnb.com/rooms/937746550089162602",
        "deeplink": "https://www.airbnb.com/rooms/937746550089162602?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 34,
        "name": "Beautiful room 2 people",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 2,
        "city": "Saint-Ouen-sur-Seine",
        "images": [
            "https://a0.muscache.com/im/pictures/e938565a-253f-4ccd-a4d7-c342959d3692.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/51656c4a-4e80-4c7a-b464-802153f610aa.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/595bce03-0cf0-418b-9415-f0c61c11452c.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/8d2af997-f006-4836-be6b-b3d915860b06.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/3333e32d-45b4-4dd0-b64d-1931ea7e128a.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/66609819-cf37-4dfe-aeb1-99636faecd10.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/ee05926b-1fba-42ba-b29d-4452c8de7203.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/d91b6944-6b9a-42e4-b581-ba6df1c53012.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-459190960/original/1f0b58e2-7ac2-48e7-a39b-1ed55709d8cc.jpeg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.90120585372354,
        "lng": 2.325471805777146,
        "persons": 2,
        "reviewsCount": 7,
        "rating": 4.71,
        "type": "Private room in bed and breakfast",
        "userId": 459190960,
        "address": "Saint-Ouen-sur-Seine, Île-de-France, France",
        "amenityIds": [
            129,
            322,
            515,
            4,
            8,
            392,
            9,
            137,
            394,
            11,
            75,
            331,
            459,
            77,
            85,
            663,
            89,
            665,
            90,
            91,
            667,
            93,
            30,
            94,
            95,
            287,
            671,
            33,
            34,
            35,
            36,
            39,
            103,
            40,
            104,
            44,
            236,
            684,
            45,
            46,
            47,
            625,
            689,
            371,
            308,
            251,
            61
        ],
        "previewAmenities": [
            "Wifi",
            "Free parking",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 62,
            "currency": "USD",
            "total": 62,
            "priceItems": [
                {
                    "title": "$42 x 1 night",
                    "amount": 42
                },
                {
                    "title": "Cleaning fee",
                    "amount": 11
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 9
                }
            ]
        }
    },
    {
        "id": "35145045",
        "url": "https://www.airbnb.com/rooms/35145045",
        "deeplink": "https://www.airbnb.com/rooms/35145045?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 35,
        "name": "Private room with balcony",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Fresnes",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-35145045/original/4936b454-5bbe-4d55-89b5-57959e123ae7.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-35145045/original/d8ebda42-bf50-4729-a7f8-f31a39793ebe.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/f2f49888-3702-42df-8094-747589c543e2.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/66ed2401-a430-4dec-83f5-88f501749d29.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-35145045/original/5f739181-279b-4792-a6ad-16460a793931.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-35145045/original/0b12f42d-75d3-413c-adfc-ab27d1ba7383.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-35145045/original/d27b1ea2-8008-4209-97b8-61751c34f1bf.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/2ff0937d-e228-45f5-8f6c-62fd274dfce5.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/257846a7-b963-482a-81c0-592a15b7c20b.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.76621,
        "lng": 2.32465,
        "persons": 2,
        "reviewsCount": 115,
        "rating": 4.71,
        "type": "Private room in condo",
        "userId": 93188130,
        "address": "Fresnes, Île-de-France, France",
        "amenityIds": [
            96,
            1,
            33,
            129,
            35,
            4,
            36,
            100,
            5,
            37,
            8,
            40,
            9,
            45,
            77,
            46,
            21,
            23,
            56,
            89,
            90,
            91,
            30,
            95
        ],
        "previewAmenities": [
            "Wifi",
            "Free parking",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_MODERATE",
        "price": {
            "rate": 39,
            "currency": "USD",
            "total": 39,
            "priceItems": [
                {
                    "title": "$32 x 1 night",
                    "amount": 32
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 5
                },
                {
                    "title": "Taxes",
                    "amount": 2
                }
            ]
        }
    },
    {
        "id": "780247461482440107",
        "url": "https://www.airbnb.com/rooms/780247461482440107",
        "deeplink": "https://www.airbnb.com/rooms/780247461482440107?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 36,
        "name": "Room near subway - secured",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Levallois-Perret",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-780247461482440107/original/fb6235eb-b480-4798-a254-c5f8a9fbe440.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-780247461482440107/original/4d4255d1-7c21-4148-9201-5a5775677eeb.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-780247461482440107/original/9be42aa7-e357-45e5-9f43-d3fbd4d021ec.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-780247461482440107/original/8dd51ab8-8c6b-4ac0-9c4e-591dcebde24e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-780247461482440107/original/c686c275-577f-41c4-ad7a-4936af5dcbe3.jpeg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/Portrait/Avatars/messaging/b3e03835-ade9-4eb7-a0bb-2466ab9a534d.jpg?im_policy=medq_w_text&im_t=M&im_w=240&im_f=airbnb-cereal-medium.ttf&im_c=ffffff",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.89543,
        "lng": 2.28,
        "persons": 1,
        "reviewsCount": 11,
        "rating": 4.27,
        "type": "Private room in rental unit",
        "userId": 491149677,
        "address": "Levallois-Perret, Île-de-France, France",
        "amenityIds": [
            1,
            33,
            4,
            8,
            47
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 69,
            "currency": "USD",
            "total": 69,
            "priceItems": [
                {
                    "title": "$56 x 1 night",
                    "amount": 56
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 9
                },
                {
                    "title": "Taxes",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "911965437207163847",
        "url": "https://www.airbnb.com/rooms/911965437207163847",
        "deeplink": "https://www.airbnb.com/rooms/911965437207163847?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 37,
        "name": "Auber la campagne à Paris",
        "bathrooms": 1.5,
        "bedrooms": 1,
        "beds": 1,
        "city": "Aubervilliers",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-911965437207163847/original/1db9b644-bbde-4b74-b853-5fa455d8643e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-911965437207163847/original/37c80c49-0b44-4a87-88e6-e9d460fa71da.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-911965437207163847/original/90b87401-9fbe-47a4-b46e-dc1c6f63d2b2.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-911965437207163847/original/5e9c4c28-4d54-464b-b031-ba4c018e2a0d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-911965437207163847/original/740b40c5-4958-4684-85a7-293bbd910e41.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-911965437207163847/original/20a68640-e4d1-441b-b62e-672503fa3efb.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-911965437207163847/original/823e20bf-b161-41f3-b028-6c026d1f7a00.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/b7b75420-3fde-4167-b202-08701b5e6a81.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/cac0ae91-5927-46af-8db8-95fa91007df5.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.9025948,
        "lng": 2.3831991,
        "persons": 2,
        "reviewsCount": 13,
        "rating": 4.62,
        "type": "Private room in rental unit",
        "userId": 45561362,
        "address": "Aubervilliers, Île-de-France, France",
        "amenityIds": [
            1,
            33,
            129,
            35,
            4,
            101,
            8,
            9,
            12,
            46,
            47,
            179,
            280,
            90,
            91,
            93,
            30
        ],
        "previewAmenities": [
            "Wifi",
            "Free parking",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_STRICT_14_WITH_GRACE_PERIOD",
        "price": {
            "rate": 79,
            "currency": "USD",
            "total": 79,
            "priceItems": [
                {
                    "title": "$54 x 1 night",
                    "amount": 54
                },
                {
                    "title": "Cleaning fee",
                    "amount": 11
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 11
                },
                {
                    "title": "Taxes",
                    "amount": 3
                }
            ]
        }
    },
    {
        "id": "900795787704596045",
        "url": "https://www.airbnb.com/rooms/900795787704596045",
        "deeplink": "https://www.airbnb.com/rooms/900795787704596045?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 38,
        "name": "Appart t1 in the heart of paris",
        "bathrooms": 1.5,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-900795787704596045/original/77d1c493-53cc-4696-9df6-3064a239623e.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-900795787704596045/original/3b7f3bc6-6cda-459d-b6b8-8f4787f11f22.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-900795787704596045/original/bc7433a7-ff11-46a1-a42b-601a54eeaf94.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-900795787704596045/original/5f43d913-45cb-42b5-94f7-ab29a28fc843.png?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-900795787704596045/original/f31cf7f4-965c-4dfe-923e-ec449453a96f.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-900795787704596045/original/e3d1439b-9e55-4d7d-9f17-cb9c1373ca15.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-900795787704596045/original/1b70f0c7-f46d-45a6-8fb6-5b041e6590df.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-900795787704596045/original/6679f6f7-b528-40ee-8a23-857c063609cc.png?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/3381d0bc-ae85-488a-bafd-afa199dfbd5c.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.88546,
        "lng": 2.38774,
        "persons": 1,
        "reviewsCount": 4,
        "rating": 5,
        "type": "Private room in rental unit",
        "userId": 515695917,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            33,
            129,
            35,
            611,
            36,
            5,
            8,
            40,
            41,
            11,
            236,
            77,
            47,
            79,
            308,
            85,
            89,
            665,
            91,
            93,
            30,
            94
        ],
        "previewAmenities": [
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_MODERATE",
        "price": {
            "rate": 83,
            "currency": "USD",
            "total": 83,
            "priceItems": [
                {
                    "title": "$68 x 1 night",
                    "amount": 68
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 11
                },
                {
                    "title": "Taxes",
                    "amount": 4
                }
            ]
        }
    },
    {
        "id": "749868047142867198",
        "url": "https://www.airbnb.com/rooms/749868047142867198",
        "deeplink": "https://www.airbnb.com/rooms/749868047142867198?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 39,
        "name": "Cozy studio apartment in Paris, Montmartre",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Paris",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-749868047142867198/original/824b322f-eaf3-4bfd-87fc-a1f98d013afa.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/5d4d7f66-a7c7-49f5-ade9-a56278c7dc85.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-749868047142867198/original/7520283d-92e1-4d9b-a38b-663f0076f46d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-749868047142867198/original/f0d58313-f2a2-42ab-93e3-84de7a296474.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-749868047142867198/original/ef888aa2-1c3f-4da7-b014-a089b7f3b094.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-749868047142867198/original/79742d8e-0589-431d-9570-b726a09e4791.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-749868047142867198/original/1e160ec5-acc6-46d4-9116-10a2ab9c9e43.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-749868047142867198/original/7bdf3aca-7e7a-4877-8210-bba08af9c893.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/92efe1c7-74e7-4e3a-ad0a-f5ee21b02271.jpg?im_w=720",
            "https://a0.muscache.com/im/pictures/50227120-9a15-4da3-b71e-453d18659f9d.jpg?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/ef2a9a36-f7e2-43f3-956c-08aad8dcd1f5.jpg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.89194,
        "lng": 2.35064,
        "persons": 2,
        "reviewsCount": 7,
        "rating": 4.14,
        "type": "Entire serviced apartment",
        "userId": 375391850,
        "address": "Paris, Île-de-France, France",
        "amenityIds": [
            1,
            33,
            129,
            34,
            4,
            8,
            90,
            91,
            45,
            93,
            46
        ],
        "previewAmenities": [
            "Wifi",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_BETTER_STRICT_WITH_GRACE_PERIOD",
        "price": {
            "rate": 122,
            "currency": "USD",
            "total": 122,
            "priceItems": [
                {
                    "title": "$92 x 1 night",
                    "amount": 92
                },
                {
                    "title": "Cleaning fee",
                    "amount": 8
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 17
                },
                {
                    "title": "Taxes",
                    "amount": 5
                }
            ]
        }
    },
    {
        "id": "949694327019909461",
        "url": "https://www.airbnb.com/rooms/949694327019909461",
        "deeplink": "https://www.airbnb.com/rooms/949694327019909461?check_in=2023-09-16&check_out=2023-09-17&adults=1&children=0&infants=0&pets=0",
        "position": 40,
        "name": "Nice Studio in the Portes de Paris",
        "bathrooms": 1,
        "bedrooms": 1,
        "beds": 1,
        "city": "Saint-Denis",
        "images": [
            "https://a0.muscache.com/im/pictures/miso/Hosting-949694327019909461/original/6d5747a1-8877-459f-9f7a-769f7f54085d.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-949694327019909461/original/c98391b9-b065-42d3-b93e-b2cb6629954a.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-949694327019909461/original/116173d4-36e2-4cf4-a1bd-9a48e6a590d3.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-949694327019909461/original/ed885807-e08f-4fc5-963a-949e189f0f53.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-949694327019909461/original/f4e72f9b-8995-469c-b719-b04da42618c4.jpeg?im_w=720",
            "https://a0.muscache.com/im/pictures/miso/Hosting-949694327019909461/original/be83ec86-7a78-4f00-9ace-c744812a7aac.png?im_w=720"
        ],
        "hostThumbnail": "https://a0.muscache.com/im/pictures/user/User-90107373/original/ef3ff1cc-753c-40e5-b767-477c3eaee960.jpeg?aki_policy=profile_x_medium",
        "isSuperhost": false,
        "rareFind": false,
        "lat": 48.918061174318765,
        "lng": 2.339091642161071,
        "persons": 2,
        "reviewsCount": 1,
        "type": "Entire rental unit",
        "userId": 90107373,
        "address": "Saint-Denis, Île-de-France, France",
        "amenityIds": [
            35,
            51,
            4,
            54,
            8,
            45,
            46,
            47
        ],
        "previewAmenities": [
            "Wifi",
            "Self check-in",
            "Kitchen"
        ],
        "cancelPolicy": "CANCEL_FLEXIBLE",
        "price": {
            "rate": 86,
            "currency": "USD",
            "total": 86,
            "priceItems": [
                {
                    "title": "$49 x 1 night",
                    "amount": 49
                },
                {
                    "title": "Cleaning fee",
                    "amount": 22
                },
                {
                    "title": "Airbnb service fee",
                    "amount": 12
                },
                {
                    "title": "Taxes",
                    "amount": 3
                }
            ]
        }
    }
]
try {
	const response = await fetch(url, options);
	const result = await response.text();

} catch (error) {
	console.error(error);
}
calc(val)
loadCards(val)
data=val
}

search()