const DataFetcher = (() => {
  const getWeatherData = async function (cityString, units) {
    try {
      const url = 'http://api.openweathermap.org/data/2.5/weather';
      const APIKey = '76df2138d28e29b9db95ca3a883b65ad';
      const request = `${url}?q=${cityString}&APPID=${APIKey}&units=${units}`;
      const response = await fetch(request, { mode: 'cors' });
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getWeatherData };
})();

export default DataFetcher;
