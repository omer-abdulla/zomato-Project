const restaurantJson = [
      {
          "info": {
              "id": "16560",
              "name": "A2B - Adyar Ananda Bhavan",
              "cloudinaryImageId": "xhwk0mszetl365fdrr0f",
              "locality": "Mogappair",
              "areaName": "Everest Colony",
              "costForTwo": "₹300 for two",
              "cuisines": ["South Indian", "North Indian", "Sweets", "Chinese"],
              "avgRating": 4.5,
              "veg": true,
              "feeDetails": {
                  "restaurantId": "16560",
                  "fees": [
                      {
                          "name": "BASE_DISTANCE",
                          "fee": 3700
                      },
                      {
                          "name": "BASE_TIME"
                      },
                      {
                          "name": "ANCILLARY_SURGE_FEE"
                      }
                  ],
                  "totalFee": 3700
              },
              "parentId": "22",
              "avgRatingString": "4.5",
              "totalRatingsString": "10K+",
              "sla": {
                  "deliveryTime": 16,
                  "lastMileTravel": 1,
                  "serviceability": "SERVICEABLE",
                  "slaString": "16 mins",
                  "lastMileTravelString": "1.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2023-12-13 22:45:00",
                  "opened": true
              },
              "badges": {
                  "imageBadges": [
                      {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                      }
                  ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                  "entityBadges": {
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "pureveg",
                                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                  }
              },
              "aggregatedDiscountInfoV3": {
                  "header": "20% OFF",
                  "subHeader": "UPTO ₹50"
              },
              "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-mogappair-everest-colony-chennai-16560",
              "type": "WEBLINK"
          }
      },
      {
          "info": {
              "id": "34539",
              "name": "Sangeetha Veg Restaurant",
              "cloudinaryImageId": "ibmfd8tpaxgw370bgkwr",
              "locality": "Koyembedu",
              "areaName": "Arumbakkam",
              "costForTwo": "₹600 for two",
              "cuisines": ["South Indian", "North Indian", "Chinese"],
              "avgRating": 4.6,
              "veg": true,
              "feeDetails": {
                  "restaurantId": "34539",
                  "fees": [
                      {
                          "name": "BASE_DISTANCE",
                          "fee": 4600
                      },
                      {
                          "name": "BASE_TIME"
                      },
                      {
                          "name": "ANCILLARY_SURGE_FEE"
                      }
                  ],
                  "totalFee": 4600
              },
              "parentId": "1260",
              "avgRatingString": "4.6",
              "totalRatingsString": "10K+",
              "sla": {
                  "deliveryTime": 29,
                  "lastMileTravel": 3,
                  "serviceability": "SERVICEABLE",
                  "slaString": "29 mins",
                  "lastMileTravelString": "3.0 km",
                  "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                  "nextCloseTime": "2023-12-13 22:45:00",
                  "opened": true
              },
              "badges": {
                  "imageBadges": [
                      {
                          "imageId": "v1695133679/badges/Pure_Veg111.png",
                          "description": "pureveg"
                      }
                  ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                  "entityBadges": {
                      "imageBased": {
                          "badgeObject": [
                              {
                                  "attributes": {
                                      "description": "pureveg",
                                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                                  }
                              }
                          ]
                      },
                      "textBased": {},
                      "textExtendedBadges": {}
                  }
              },
              "aggregatedDiscountInfoV3": {
                  "header": "30% OFF",
                  "subHeader": "UPTO ₹100"
              },
              "differentiatedUi": {
                  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                  "differentiatedUiMediaDetails": {
                      "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                      "lottie": {},
                      "video": {}
                  }
              },
              "reviewsSummary": {},
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {}
          },
          "analytics": {},
          "cta": {
              "link": "https://www.swiggy.com/restaurants/sangeetha-veg-restaurant-koyembedu-arumbakkam-chennai-34539",
              "type": "WEBLINK"
          }
      }
  ];
  function search() {
      const searchInput = document.querySelector(
          ".hero__section_input_search"
      );
      const searchTerm = searchInput.value.toLowerCase();
      const cards = document.querySelectorAll(".we_offer__cards");
  
      cards.forEach((card) => {
          const cardContent = card
              .querySelector(".we_offer__cards_content")
              .textContent.toLowerCase();
          if (cardContent.includes(searchTerm)) {
              card.style.display = "block";
          } else {
              card.style.display = "none";
          }
      });
  }
  
  // Function for filtering cards based on dropdown selection
  function filterCards(selection) {
      const cards = document.querySelectorAll(".we_offer__cards");
      const selectedOption = selection.value;
  
      cards.forEach((card) => {
          const cardType = card.querySelector("h2").textContent.toLowerCase();
          if (selectedOption === "all" || cardType === selectedOption) {
              card.style.display = "block";
          } else {
              card.style.display = "none";
          }
      });
  }
  const loopedRestaraunt = document.getElementById('loopedRestaraunt');
  
  restaurantJson.forEach(data => {
      loopedRestaraunt.innerHTML += `<div class="container_cards">
      <h1>${data.info.name}</h1>
      <p>${data.info.locality}, ${data.info.areaName}</p>
    </div>`
  });
