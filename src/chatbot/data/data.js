const baseURL = "https://developers.zomato.com/api/v2.1/";

export const getRestaurants = async (
  cuisineType,
  categoryType,
  latitude,
  longitude
) => {
  let data = {}
  // let data = await fetch(
  //   `${baseURL}search?q=${categoryType}&count=5&lat=${latitude}&lon=${longitude}&cuisines=${cuisineType}`,
  //   {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "user-key": "443cebb0c149559671b6093778226894",
  //     },
  //   }
  // );
  // data = await data.json();

  console.log(data);
  return data;
};
