const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const houseId = urlParams.get('id');
console.log(houseId)



const getHouse=async(houseId)=>{
    const url = `https://airbnb19.p.rapidapi.comm/api/v2/getPropertyDetails?propertyId=${houseId}&currency=USD`;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b72b653f85mshface544bffa851fp14f8b4jsn70764afbb428',
            'X-RapidAPI-Host': 'airbnb19.p.rapidapi.com'
        }
    };
    
    const res={
        "title": "Rental unit in Paris · ★4.82 · 1 bedroom · 1 bed · 1 bath",
        "propertyType": "Entire rental unit",
        "location": "Paris",
        "personCapacity": 2,
        "imageUrl": "https://a0.muscache.com/pictures/e8c1b07f-5b20-4968-8888-15279f7ff70b.jpg",
        "descriptionLanguage": "fr",
        "listingLat": 48.886995496327096,
        "listingLng": 2.3531205962388015,
        "homeTier": 1,
        "roomType": "Entire home/apt",
        "visibleReviewCount": "11",
        "valueRating": 4.73,
        "locationRating": 3.91,
        "pictureCount": 9,
        "communicationRating": 5,
        "checkinRating": 4.82,
        "accuracyRating": 4.73,
        "cleanlinessRating": 5,
        "guestSatisfactionOverall": 4.82,
        "bookingData": {
            "allowsChildren": false,
            "allowsInfants": false,
            "allowsPets": true,
            "hostId": "12322143",
            "hostName": "Adrien",
            "hostProfilePhotoUrl": "https://a0.muscache.com/im/pictures/user/a968d8ee-81ff-453f-93f7-cfcf09e0476f.jpg?aki_policy=profile_x_medium",
            "isHotelRatePlanEnabled": false,
            "isSuperhost": false,
            "maxNights": 365,
            "minNights": 3,
            "reviewsCount": "11",
            "reviewsRating": "4.82",
            "roomAndPropertyType": "Entire rental unit",
            "barPrice": null,
            "chinaDiscountModalData": {
                "title": "gift",
                "discountPanels": [
                    {
                        "title": "coupon",
                        "discounts": null
                    },
                    {
                        "title": "promotion",
                        "discounts": null
                    }
                ]
            },
            "canInstantBook": false,
            "price": null,
            "cancellationPolicies": [
                {
                    "cancellationPolicyId": 44,
                    "milestones": [],
                    "cancellationOverrideRules": null,
                    "subtitle": "Add your trip dates to get the cancellation details for this stay.",
                    "subtitles": [
                        "For a full refund of the nightly rate, the guest must cancel within 48 hours of booking and at least 14 full days prior to listing’s local check-in time (shown in the confirmation email).",
                        "For a 50% refund of the nightly rate, the guest must cancel 7 full days before the listing's local check in time (shown in the confirmation email), otherwise no refund. If only 50% of the reservation has been paid, no refund will be issued and the remaining 50% will simply not be charged.",
                        "If the guest cancels less than 7 days in advance or decides to leave early after check-in, the nights not spent are not refunded.",
                        "Cleaning fees are always refunded if the reservation is canceled before check-in.",
                        "The Airbnb service fee is refundable up to 3 times per year if the guest cancels within 48 hours of booking and at least 14 days before check-in. It isn’t refundable if the guest cancels a reservation that overlaps with any part of an existing reservation.",
                        "Accommodation fees (the total nightly rate you’re charged) are refundable in certain circumstances as outlined below.",
                        "If there is a complaint from either party, notice must be given to Airbnb within 24 hours of check-in.",
                        "Airbnb will mediate when necessary, and has the final say in all disputes.",
                        "A reservation is officially canceled when the guest clicks the cancellation button on the cancellation confirmation page, which they can find in Dashboard > Your Trips > Change or Cancel.",
                        "Cancellation policies may be superseded by the Guest Refund Policy, extenuating circumstances, or cancellations by Airbnb for any other reason permitted under the Terms of Service. Please review these exceptions."
                    ],
                    "title": "Add your trip dates to get the cancellation details for this stay.",
                    "localizedCancellationPolicyName": "Strict",
                    "cancellationPolicyPriceType": null,
                    "cancellationPolicyPriceFactor": 0,
                    "highlightedCancellationTip": null
                }
            ],
            "structuredDisplayPrice": null,
            "productItemDetail": null
        },
        "clientLoggingData": {
            "productId": "889559121206652802",
            "hostId": null,
            "photoIds": null,
            "rating": null,
            "utcOffset": null,
            "experiencesData": null
        },
        "productCountry": "FR",
        "sections": {
            "petCounts": {
                "title": "Service animals",
                "titleStyle": null,
                "html": {
                    "htmlText": "Service animals aren’t pets, so there’s no need to add them here.<br><br>Traveling with an emotional support animal? Check out our <a href=\"https://www.airbnb.com/help/article/1869/assistance-animals\" target=\"_blank\">accessibility policy</a>.",
                    "recommendedNumberOfLines": null
                },
                "icon": null,
                "mediaItem": {
                    "baseUrl": "https://a0.muscache.com/pictures/adafb11b-41e9-49d3-908e-049dfd6934b6.jpg"
                },
                "subtitle": null
            },
            "bookIt": {
                "available": null,
                "title": null,
                "cancellationPolicyLoggingEventData": null,
                "calendarTitle": null,
                "calendarSubtitle": null,
                "descriptionItems": null,
                "discountCopy": null,
                "maxGuestCapacity": null,
                "barPrice": null,
                "bookItButtonByPlacement": null,
                "reviewItem": {
                    "accessibilityLabel": "Rated 4.82 out of 5 from 11 reviews.",
                    "title": "4.82"
                },
                "structuredDisplayPrice": null,
                "selectedDatesLink": null,
                "selectedNights": null,
                "productId": null
            },
            "education": {
                "pdpEducationContentData": null
            },
            "plusEducation": {
                "titleMedia": {
                    "id": "SW1hZ2U6MC4zNDUwMDM0MDMyNTI0NDg0",
                    "accessibilityLabel": "Airbnb Plus education modal logo",
                    "baseUrl": "https://a0.muscache.com/4ea/air/v2/pictures/adb4c86d-736b-4feb-936b-bfc9426ce8b9.jpg",
                    "previewEncodedPng": null,
                    "aspectRatio": 1
                },
                "subtitle": "Every Plus home is reviewed for quality",
                "features": [
                    {
                        "title": "Fully equipped",
                        "subtitle": "Count on verified amenities like fast wifi and kitchens ready for cooking."
                    },
                    {
                        "title": "Exceptional hospitality",
                        "subtitle": "Expect easy check-ins, quick responses from your host, and more."
                    },
                    {
                        "title": "One-of-a-kind details",
                        "subtitle": "Each space is beautifully designed and full of character for a memorable stay."
                    }
                ]
            },
            "description": {
                "title": "About this space",
                "subtitle": null,
                "items": [
                    {
                        "title": null,
                        "subtitle": null,
                        "media": null,
                        "accessibilityLabel": null,
                        "icon": null,
                        "image": null,
                        "html": {
                            "htmlText": "Enjoy a stylish place, close to Montmartre. Everything is present: coffee machine, fridge, microwave oven, washing machine, etc. Close to Château Rouge metro (line 4), Barbès-Rochechouart (lines 2 and 4) and Marx Dormoy (line 12). The neighborhood is very lively, especially during the day. The apartment is glued to a restaurant that can sometimes get a little noisy in the evening.",
                            "minimumNumberOfLinesForTruncation": null,
                            "recommendedNumberOfLines": null
                        }
                    },
                    {
                        "title": "The space",
                        "subtitle": null,
                        "media": null,
                        "accessibilityLabel": null,
                        "icon": null,
                        "image": null,
                        "html": {
                            "htmlText": "Room with double bed",
                            "minimumNumberOfLinesForTruncation": null,
                            "recommendedNumberOfLines": null
                        }
                    },
                    {
                        "title": "Registration number",
                        "subtitle": null,
                        "media": null,
                        "accessibilityLabel": null,
                        "icon": null,
                        "image": null,
                        "html": {
                            "htmlText": "7511808525493",
                            "minimumNumberOfLinesForTruncation": null,
                            "recommendedNumberOfLines": null
                        }
                    }
                ],
                "logoData": null,
                "mediaItems": null
            },
            "photoTour": {
                "title": null,
                "mediaItems": [
                    {
                        "accessibilityLabel": "Listing image 1",
                        "baseUrl": "https://a0.muscache.com/pictures/e8c1b07f-5b20-4968-8888-15279f7ff70b.jpg",
                        "id": "1658154542",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Listing image 2",
                        "baseUrl": "https://a0.muscache.com/pictures/a10b6a25-d566-4637-ae5b-bd0996888c95.jpg",
                        "id": "1658154756",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Listing image 3",
                        "baseUrl": "https://a0.muscache.com/pictures/miso/Hosting-889559121206652802/original/cb316047-9e06-4436-b55c-a33d68c1da9e.jpeg",
                        "id": "1649876805",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Listing image 4",
                        "baseUrl": "https://a0.muscache.com/pictures/miso/Hosting-889559121206652802/original/e15fb7ef-dc02-40be-90a9-c51847c81214.jpeg",
                        "id": "1649876633",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Listing image 5",
                        "baseUrl": "https://a0.muscache.com/pictures/miso/Hosting-889559121206652802/original/8e541f4e-056e-498d-9f0e-11adce8ddaac.jpeg",
                        "id": "1649876801",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Listing image 6",
                        "baseUrl": "https://a0.muscache.com/pictures/miso/Hosting-889559121206652802/original/417d417b-cc6c-4667-a3b4-fcd292914700.jpeg",
                        "id": "1649876733",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Listing image 7",
                        "baseUrl": "https://a0.muscache.com/pictures/miso/Hosting-889559121206652802/original/99888ad5-54b7-44c0-9123-41f6b661fa8e.jpeg",
                        "id": "1649876839",
                        "imageMetadata": {
                            "caption": ""
                        }
                    }
                ]
            },
            "availabilityCalendarDefault": {
                "title": "Availability",
                "subtitle": "Add your travel dates for exact pricing",
                "priceDisclaimer": "Prices on calendar do not include taxes and fees",
                "reviewRating": "4.82",
                "reviewCount": "11",
                "reviewAccessibilityLabel": "Rated 4.82 out of 5 from 11 reviews.",
                "descriptionItems": [
                    {
                        "title": "Entire rental unit"
                    },
                    {
                        "title": "1 bed"
                    },
                    {
                        "title": "1 bath"
                    }
                ]
            },
            "hero": {
                "mediaItems": null,
                "previewImages": [
                    {
                        "accessibilityLabel": "Nice app. near Montmartre image 1",
                        "baseUrl": "https://a0.muscache.com/pictures/e8c1b07f-5b20-4968-8888-15279f7ff70b.jpg",
                        "id": "1658154542",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Nice app. near Montmartre image 2",
                        "baseUrl": "https://a0.muscache.com/pictures/a10b6a25-d566-4637-ae5b-bd0996888c95.jpg",
                        "id": "1658154756",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Nice app. near Montmartre image 3",
                        "baseUrl": "https://a0.muscache.com/pictures/miso/Hosting-889559121206652802/original/cb316047-9e06-4436-b55c-a33d68c1da9e.jpeg",
                        "id": "1649876805",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Nice app. near Montmartre image 4",
                        "baseUrl": "https://a0.muscache.com/pictures/miso/Hosting-889559121206652802/original/e15fb7ef-dc02-40be-90a9-c51847c81214.jpeg",
                        "id": "1649876633",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Nice app. near Montmartre image 5",
                        "baseUrl": "https://a0.muscache.com/pictures/miso/Hosting-889559121206652802/original/8e541f4e-056e-498d-9f0e-11adce8ddaac.jpeg",
                        "id": "1649876801",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Nice app. near Montmartre image 6",
                        "baseUrl": "https://a0.muscache.com/pictures/miso/Hosting-889559121206652802/original/417d417b-cc6c-4667-a3b4-fcd292914700.jpeg",
                        "id": "1649876733",
                        "imageMetadata": {
                            "caption": ""
                        }
                    },
                    {
                        "accessibilityLabel": "Nice app. near Montmartre image 7",
                        "baseUrl": "https://a0.muscache.com/pictures/miso/Hosting-889559121206652802/original/99888ad5-54b7-44c0-9123-41f6b661fa8e.jpeg",
                        "id": "1649876839",
                        "imageMetadata": {
                            "caption": ""
                        }
                    }
                ],
                "seePhotosButton": {
                    "accessibilityLabel": null,
                    "icon": null,
                    "title": "Show all photos",
                    "subtitle": null
                },
                "previewImageLoggingEventData": {
                    "loggingId": "pdp.hero.image",
                    "component": "image",
                    "section": "hero",
                    "eventData": null,
                    "eventDataSchemaName": null
                }
            },
            "title": {
                "billboardButton": null,
                "kicker": null,
                "kickerItems": null,
                "actionableIcon": {
                    "accessibilityLabel": "Automatically Translated title: Nice app. near Montmartre",
                    "icon": "TRANSLATION_COLORED",
                    "title": null,
                    "subtitle": null
                },
                "icon": null,
                "title": "Nice app. near Montmartre",
                "overviewItems": [
                    {
                        "accessibilityLabel": "Rated 4.82 out of 5",
                        "icon": "COMPACT_STAR",
                        "title": "4.82",
                        "subtitle": null
                    },
                    {
                        "accessibilityLabel": "11 reviews",
                        "icon": null,
                        "title": "11 reviews",
                        "subtitle": null
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "Paris, Île-de-France, France",
                        "subtitle": null
                    }
                ],
                "subtitle": null
            },
            "overview": {
                "title": "Entire rental unit hosted by Adrien",
                "shortTitle": "hosted by Adrien",
                "subtitle": "Entire rental unit",
                "hostAvatar": {
                    "avatarImage": {
                        "accessibilityLabel": "Learn more about the host, Adrien.",
                        "baseUrl": "https://a0.muscache.com/im/pictures/user/a968d8ee-81ff-453f-93f7-cfcf09e0476f.jpg?aki_policy=profile_x_medium",
                        "id": "a968d8ee-81ff-453f-93f7-cfcf09e0476f"
                    },
                    "badge": null,
                    "userId": "12322143"
                },
                "detailItems": [
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "2 guests",
                        "subtitle": null
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "1 bedroom",
                        "subtitle": null
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "1 bed",
                        "subtitle": null
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "1 bath",
                        "subtitle": null
                    }
                ],
                "hostType": null,
                "collectionName": null,
                "details": [
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "2 guests",
                        "subtitle": null
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "1 bedroom",
                        "subtitle": null
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "1 bed",
                        "subtitle": null
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "1 bath",
                        "subtitle": null
                    }
                ],
                "collectionUrl": null
            },
            "highlights": {
                "title": null,
                "highlights": [
                    {
                        "icon": "SYSTEM_CHECK_IN",
                        "title": "Self check-in",
                        "subtitle": "Check yourself in with the smartlock.",
                        "subtitleHtml": null
                    },
                    {
                        "icon": "SYSTEM_KEY",
                        "title": "Great check-in experience",
                        "subtitle": "91% of recent guests gave the check-in process a 5-star rating.",
                        "subtitleHtml": null
                    },
                    {
                        "icon": "SYSTEM_HOST_MESSAGE_MARK",
                        "title": "Great communication",
                        "subtitle": "100% of recent guests rated Adrien 5-star in communication.",
                        "subtitleHtml": null
                    }
                ]
            },
            "descriptionDefault": {
                "descriptionSummary": {
                    "htmlText": "Enjoy a stylish place, close to Montmartre. Everything is present: coffee machine, fridge, microwave oven, washing machine, etc. Close to Château Rouge metro (line 4), Barbès-Rochechouart (lines 2 and 4) and Marx Dormoy (line 12). The neighborhood is very lively, especially during the day. The apartment is glued to a restaurant that can sometimes get a little noisy in the evening.",
                    "minimumNumberOfLinesForTruncation": 9,
                    "recommendedNumberOfLines": 6
                },
                "hasExtraDescriptionDetails": true,
                "htmlDescription": null,
                "hostQuote": null,
                "title": null
            },
            "amenities": {
                "title": "What this place offers",
                "previewAmenitiesGroups": [
                    {
                        "id": "top_ranked_amenities_889559121206652802",
                        "title": null,
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "pdp_v3_kitchen_dining_8_889559121206652802-0",
                                "title": "Kitchen",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_COOKING_BASICS",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_internet_office_4_889559121206652802-0",
                                "title": "Wifi",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_WI_FI",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_services_12_889559121206652802-0",
                                "title": "Pets allowed",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_PETS",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bedroom_laundry_33_889559121206652802-0",
                                "title": "Washer",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_WASHER",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bedroom_laundry_34_889559121206652802-0",
                                "title": "Free dryer – In unit",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_DRYER",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_unavailable_36_889559121206652802-0",
                                "title": "Carbon monoxide alarm",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_NO_DETECTOR_CO2",
                                "available": false,
                                "images": []
                            }
                        ]
                    }
                ],
                "seeAllAmenitiesGroups": [
                    {
                        "id": "pdp_v3_bathroom_889559121206652802",
                        "title": "Bathroom",
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "pdp_v3_bathroom_45_889559121206652802-0",
                                "title": "Hair dryer",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_HAIRDRYER",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bathroom_665_889559121206652802-0",
                                "title": "Cleaning products",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_CLEANING_SUPPLIES",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bathroom_41_889559121206652802-0",
                                "title": "Shampoo",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_SHAMPOO",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bathroom_79_889559121206652802-0",
                                "title": "Sanex body soap",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_SOAP",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bathroom_77_889559121206652802-0",
                                "title": "Hot water",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_HOT_WATER",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bathroom_611_889559121206652802-0",
                                "title": "Shower gel",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_SOAP",
                                "available": true,
                                "images": []
                            }
                        ]
                    },
                    {
                        "id": "pdp_v3_bedroom_laundry_889559121206652802",
                        "title": "Bedroom and laundry",
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "pdp_v3_bedroom_laundry_33_889559121206652802-0",
                                "title": "Washer",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_WASHER",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bedroom_laundry_34_889559121206652802-0",
                                "title": "Free dryer – In unit",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_DRYER",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bedroom_laundry_40_889559121206652802-0",
                                "title": "Essentials",
                                "subtitle": "Towels, bed sheets, soap, and toilet paper",
                                "image": null,
                                "icon": "SYSTEM_TOILETRIES",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bedroom_laundry_44_889559121206652802-0",
                                "title": "Hangers",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_HANGERS",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bedroom_laundry_85_889559121206652802-0",
                                "title": "Bed linens",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_BLANKETS",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_bedroom_laundry_671_889559121206652802-0",
                                "title": "Clothing storage",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_WARDROBE",
                                "available": true,
                                "images": []
                            }
                        ]
                    },
                    {
                        "id": "pdp_v3_heating_cooling_889559121206652802",
                        "title": "Heating and cooling",
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "pdp_v3_heating_cooling_30_889559121206652802-0",
                                "title": "Portable heater",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_THERMOMETER",
                                "available": true,
                                "images": []
                            }
                        ]
                    },
                    {
                        "id": "pdp_v3_home_safety_889559121206652802",
                        "title": "Home safety",
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "pdp_v3_home_safety_35_889559121206652802-0",
                                "title": "Smoke alarm",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_DETECTOR_SMOKE",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_home_safety_37_889559121206652802-0",
                                "title": "First aid kit",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_FIRST_AID_KIT",
                                "available": true,
                                "images": []
                            }
                        ]
                    },
                    {
                        "id": "pdp_v3_internet_office_889559121206652802",
                        "title": "Internet and office",
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "pdp_v3_internet_office_4_889559121206652802-0",
                                "title": "Wifi",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_WI_FI",
                                "available": true,
                                "images": []
                            }
                        ]
                    },
                    {
                        "id": "pdp_v3_kitchen_dining_889559121206652802",
                        "title": "Kitchen and dining",
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "pdp_v3_kitchen_dining_8_889559121206652802-0",
                                "title": "Kitchen",
                                "subtitle": "Space where guests can cook their own meals",
                                "image": null,
                                "icon": "SYSTEM_COOKING_BASICS",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_kitchen_dining_91_889559121206652802-0",
                                "title": "Refrigerator",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_REFRIGERATOR",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_kitchen_dining_89_889559121206652802-0",
                                "title": "Microwave",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_MICROWAVE",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_kitchen_dining_94_889559121206652802-0",
                                "title": "Cooking basics",
                                "subtitle": "Pots and pans, oil, salt and pepper",
                                "image": null,
                                "icon": "SYSTEM_COOKING_BASICS",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_kitchen_dining_93_889559121206652802-0",
                                "title": "Dishes and silverware",
                                "subtitle": "Bowls, chopsticks, plates, cups, etc.",
                                "image": null,
                                "icon": "SYSTEM_DISHES_AND_SILVERWARE",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_kitchen_dining_146_889559121206652802-0",
                                "title": "Mini fridge",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_MINI_BAR",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_kitchen_dining_308_889559121206652802-0",
                                "title": "Freezer",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_REFRIGERATOR",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_kitchen_dining_95_889559121206652802-0",
                                "title": "Oven",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_OVEN",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_kitchen_dining_137_889559121206652802-0",
                                "title": "Hot water kettle",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_WATER_KETTLE",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_kitchen_dining_251_889559121206652802-0",
                                "title": "Toaster",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_TOASTER",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_kitchen_dining_415_889559121206652802-0",
                                "title": "Coffee",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_COFFEE_MAKER",
                                "available": true,
                                "images": []
                            }
                        ]
                    },
                    {
                        "id": "pdp_v3_location_889559121206652802",
                        "title": "Location features",
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "pdp_v3_location_663_889559121206652802-0",
                                "title": "Laundromat nearby",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_LAUNDRY_SERVICE",
                                "available": true,
                                "images": []
                            }
                        ]
                    },
                    {
                        "id": "pdp_v3_parking_facilities_889559121206652802",
                        "title": "Parking and facilities",
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "pdp_v3_parking_facilities_98_889559121206652802-0",
                                "title": "Single level home",
                                "subtitle": "No stairs in home",
                                "image": null,
                                "icon": "SYSTEM_NO_STAIRS",
                                "available": true,
                                "images": []
                            }
                        ]
                    },
                    {
                        "id": "pdp_v3_services_889559121206652802",
                        "title": "Services",
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "pdp_v3_services_12_889559121206652802-0",
                                "title": "Pets allowed",
                                "subtitle": "Assistance animals are always allowed",
                                "image": null,
                                "icon": "SYSTEM_PETS",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_services_103_889559121206652802-0",
                                "title": "Luggage dropoff allowed",
                                "subtitle": "For guests' convenience when they have early arrival or late departure",
                                "image": null,
                                "icon": "SYSTEM_LUGGAGE_DROP",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_services_104_889559121206652802-0",
                                "title": "Long term stays allowed",
                                "subtitle": "Allow stay for 28 days or more",
                                "image": null,
                                "icon": "SYSTEM_CALENDAR",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_services_51_889559121206652802-0",
                                "title": "Self check-in",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_KEY",
                                "available": true,
                                "images": []
                            },
                            {
                                "id": "pdp_v3_services_52_889559121206652802-0",
                                "title": "Smart lock",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_LOCK_ON_DOOR",
                                "available": true,
                                "images": []
                            }
                        ]
                    },
                    {
                        "id": "pdp_unavailable_889559121206652802",
                        "title": "Not included",
                        "subtitle": null,
                        "amenities": [
                            {
                                "id": "security_camera_9999_889559121206652802",
                                "title": "Security cameras on property",
                                "subtitle": null,
                                "image": null,
                                "icon": "SYSTEM_NO_SURVEILLANCE",
                                "available": false,
                                "images": []
                            },
                            {
                                "id": "pdp_unavailable_1_889559121206652802-0",
                                "title": "TV",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_NO_TV",
                                "available": false,
                                "images": []
                            },
                            {
                                "id": "pdp_unavailable_5_889559121206652802-0",
                                "title": "Air conditioning",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_NO_AIR_CONDITIONING",
                                "available": false,
                                "images": []
                            },
                            {
                                "id": "pdp_unavailable_36_889559121206652802-0",
                                "title": "Carbon monoxide alarm",
                                "subtitle": "There is no carbon monoxide detector on the property.",
                                "image": null,
                                "icon": "SYSTEM_NO_DETECTOR_CO2",
                                "available": false,
                                "images": []
                            },
                            {
                                "id": "pdp_unavailable_57_889559121206652802-0",
                                "title": "Private entrance",
                                "subtitle": "",
                                "image": null,
                                "icon": "SYSTEM_NO_PRIVATE_ENTRANCE",
                                "available": false,
                                "images": []
                            }
                        ]
                    }
                ],
                "seeAllAmenitiesButton": {
                    "accessibilityLabel": null,
                    "icon": null,
                    "title": "Show all 34 amenities",
                    "subtitle": null
                }
            },
            "location": {
                "address": null,
                "homeIcon": "COMPACT_HOUSE",
                "hostGuidebookButton": null,
                "lat": 48.886995496327096,
                "lng": 2.3531205962388015,
                "locationDisclaimer": "Exact location provided after booking.",
                "locationDisclaimerItems": null,
                "previewLocationDetails": [
                    {
                        "id": "TG9jYXRpb25EZXRhaWw6bmVpZ2hib3Job29kLXByZXZpZXdfODg5NTU5MTIxMjA2NjUyODAy",
                        "displayType": "TEXT",
                        "title": "Paris, Île-de-France, France",
                        "content": {
                            "htmlText": "The neighborhood is a lively, very cosmopolitan neighborhood, which can sometimes be a bit loud. Please make sure this works for you:)",
                            "recommendedNumberOfLines": 3
                        },
                        "items": null
                    }
                ],
                "seeAllDetailsButton": {
                    "accessibilityLabel": null,
                    "icon": null,
                    "title": "Show more",
                    "subtitle": null
                },
                "seeAllLocationDetails": [
                    {
                        "id": "TG9jYXRpb25EZXRhaWw6bmVpZ2hib3Job29kLXNlZUFsbF84ODk1NTkxMjEyMDY2NTI4MDI=",
                        "displayType": "TEXT",
                        "title": "Paris, Île-de-France, France",
                        "content": {
                            "htmlText": "The neighborhood is a lively, very cosmopolitan neighborhood, which can sometimes be a bit loud. Please make sure this works for you:)",
                            "recommendedNumberOfLines": 3
                        },
                        "items": null
                    },
                    {
                        "id": "TG9jYXRpb25EZXRhaWw6Z2V0dGluZythcm91bmRfODg5NTU5MTIxMjA2NjUyODAy",
                        "displayType": "TEXT",
                        "title": "Getting around",
                        "content": {
                            "htmlText": "Château Rouge metro station (line 4), Marcadet-Poissonniers (lines 4 and 12) Barbès-Rochechouart (lines 2 and 4) and Marx Dormoy metro station (line 12) nearby on foot",
                            "recommendedNumberOfLines": 3
                        },
                        "items": null
                    }
                ],
                "subtitle": null,
                "title": "Where you’ll be",
                "mapMarkerRadiusInMeters": 152
            },
            "reviewsDefault": {
                "title": null,
                "heading": {
                    "accessibilityLabel": "4.82 out of 5 stars from 11 reviews",
                    "icon": "COMPACT_STAR",
                    "title": "4.82 · 11 reviews",
                    "subtitle": null
                },
                "ratings": [
                    {
                        "localizedRating": "5.0",
                        "percentage": 1,
                        "label": "Cleanliness"
                    },
                    {
                        "localizedRating": "4.7",
                        "percentage": 0.9400000000000001,
                        "label": "Accuracy"
                    },
                    {
                        "localizedRating": "5.0",
                        "percentage": 1,
                        "label": "Communication"
                    },
                    {
                        "localizedRating": "3.9",
                        "percentage": 0.78,
                        "label": "Location"
                    },
                    {
                        "localizedRating": "4.8",
                        "percentage": 0.96,
                        "label": "Check-in"
                    },
                    {
                        "localizedRating": "4.7",
                        "percentage": 0.9400000000000001,
                        "label": "Value"
                    }
                ]
            },
            "hostProfileDefault": {
                "additionalHosts": null,
                "additionalHostsTitle": null,
                "disclaimerItems": null,
                "hostAvatar": {
                    "avatarImage": {
                        "accessibilityLabel": "Learn more about the host, Adrien.",
                        "baseUrl": "https://a0.muscache.com/im/pictures/user/a968d8ee-81ff-453f-93f7-cfcf09e0476f.jpg",
                        "id": "a968d8ee-81ff-453f-93f7-cfcf09e0476f"
                    },
                    "badge": null,
                    "userId": "12322143"
                },
                "hostBasicInfos": [
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "Joined in February 2014",
                        "subtitle": null
                    }
                ],
                "hostFeatures": [
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "Registration number",
                        "subtitle": "7511808525493"
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "Response rate",
                        "subtitle": "100%"
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "Response time",
                        "subtitle": "within an hour"
                    }
                ],
                "hostImage": null,
                "hostInfos": [],
                "hostProfileDescription": null,
                "hostTags": [
                    {
                        "title": "38 Reviews",
                        "icon": "COMPACT_STAR"
                    },
                    {
                        "title": "Identity verified",
                        "icon": "COMPACT_VERIFIED"
                    }
                ],
                "subtitle": "Joined in February 2014",
                "title": "Hosted by Adrien",
                "hostFirstName": null,
                "experienceId": "",
                "disclaimer": {
                    "title": "To protect your payment, never transfer money or communicate outside of the Airbnb website or app.",
                    "icon": "FEATURE_SHIELD_BELO"
                }
            },
            "policies": {
                "additionalHouseRules": null,
                "additionalHouseRulesTitle": null,
                "cancellationPolicyForDisplay": null,
                "cancellationPolicies": [
                    {
                        "id": 44,
                        "milestones": [],
                        "cancellationMilestoneModal": {
                            "title": null,
                            "subtitles": null,
                            "header": null,
                            "entries": null,
                            "actionLinkText": null,
                            "actionLinkUrl": null
                        },
                        "seeDetailsLink": {
                            "accessibilityLabel": null,
                            "icon": null,
                            "title": "Learn more",
                            "subtitle": null
                        },
                        "subtitle": "Add your trip dates to get the cancellation details for this stay.",
                        "subtitles": [
                            "For a full refund of the nightly rate, the guest must cancel within 48 hours of booking and at least 14 full days prior to listing’s local check-in time (shown in the confirmation email).",
                            "For a 50% refund of the nightly rate, the guest must cancel 7 full days before the listing's local check in time (shown in the confirmation email), otherwise no refund. If only 50% of the reservation has been paid, no refund will be issued and the remaining 50% will simply not be charged.",
                            "If the guest cancels less than 7 days in advance or decides to leave early after check-in, the nights not spent are not refunded.",
                            "Cleaning fees are always refunded if the reservation is canceled before check-in.",
                            "The Airbnb service fee is refundable up to 3 times per year if the guest cancels within 48 hours of booking and at least 14 days before check-in. It isn’t refundable if the guest cancels a reservation that overlaps with any part of an existing reservation.",
                            "Accommodation fees (the total nightly rate you’re charged) are refundable in certain circumstances as outlined below.",
                            "If there is a complaint from either party, notice must be given to Airbnb within 24 hours of check-in.",
                            "Airbnb will mediate when necessary, and has the final say in all disputes.",
                            "A reservation is officially canceled when the guest clicks the cancellation button on the cancellation confirmation page, which they can find in Dashboard > Your Trips > Change or Cancel.",
                            "Cancellation policies may be superseded by the Guest Refund Policy, extenuating circumstances, or cancellations by Airbnb for any other reason permitted under the Terms of Service. Please review these exceptions."
                        ],
                        "title": "Add your trip dates to get the cancellation details for this stay.",
                        "localizedCancellationPolicyName": "Strict",
                        "cancellationPolicyPriceType": null,
                        "cancellationPolicyPriceFactor": 0
                    }
                ],
                "cancellationPolicyTitle": "Cancellation policy",
                "discountData": null,
                "houseRules": [
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "Check-in after 4:00 PM",
                        "subtitle": null
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "Checkout before 12:00 PM",
                        "subtitle": null
                    },
                    {
                        "accessibilityLabel": null,
                        "icon": null,
                        "title": "2 guests maximum",
                        "subtitle": null
                    }
                ],
                "houseRulesTitle": "House rules",
                "listingExpectations": null,
                "listingExpectationsTitle": null,
                "reportButton": null,
                "seeAllHouseRulesButton": {
                    "accessibilityLabel": null,
                    "icon": null,
                    "title": "Show more",
                    "subtitle": null
                },
                "seeCancellationPolicyButton": {
                    "accessibilityLabel": null,
                    "icon": null,
                    "title": "Show more",
                    "subtitle": null
                },
                "title": "Things to know",
                "safetyAndPropertyTitle": "Safety & property",
                "previewSafetyAndProperties": [
                    {
                        "title": "No carbon monoxide alarm",
                        "subtitle": null,
                        "icon": null
                    },
                    {
                        "title": "Smoke alarm",
                        "subtitle": null,
                        "icon": null
                    },
                    {
                        "title": "Not suitable for children and infants",
                        "subtitle": null,
                        "icon": null
                    }
                ],
                "seeAllSafetyAndPropertyButton": {
                    "accessibilityLabel": null,
                    "icon": null,
                    "title": "Show more",
                    "subtitle": null
                },
                "safetyExpectationsAndAmenities": null
            }
        }
    }

    try {
        const response = await fetch(url, options);
        const {data} = await response.json()
    
       




    } catch (error) {
        console.error(error);
    }
    const title=document.getElementById("house-title")
    const rating=document.getElementById("rating")
    const gallery=document.getElementById("gallery")
    const details=document.getElementById("small-details")





    console.log(res)
    title.innerHTML=res.title.split('·')[0]
    const startArray = Array.from({
        length: Math.floor(res.checkinRating)
      }, () => `<i class="fas fa-star"></i>`);
      
      if (rating % 1 !== 0) {
        startArray.push(`<i class="fas fa-star-half-alt"></i>`);
      }
      startArray.push(`<span>${res.visibleReviewCount} Reviews</span>`)

console.log(startArray)
      startArray.forEach(item=>{
        console.log(item)
        rating.innerHTML+=`${item}`
      })

const galleryHTML=res.sections.hero.previewImages.splice(2).map((img,ind)=>ind===0?` <div  class="gallery-img-1"><img src=${img.baseUrl}></div>`:` <div><img src=${img.baseUrl}></div>`)
gallery.innerHTML=galleryHTML.reverse().join('')
details.innerHTML=`<h2>${res.roomType}</h2>
<p>${res.title.split('·').slice(2)}</p>
<h4>$ ${res.p} / day</h4>`
      console.log(galleryHTML);
}


getHouse(houseId)