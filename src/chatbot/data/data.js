export const getCuisines = async (iata, direction) => {
    let data = await fetch(
      `${baseURL}/${environment}/flights?iata=${iata}&direction=${direction}`
    );
    data = await data.json();
    return data.flights.Flights;
  };