const DataFetcher = ((cityString) => {
  const getWeatherData = async function () {
    try {
      const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=76df2138d28e29b9db95ca3a883b65ad', { mode: 'cors' });
      if (response.ok) {
        const weatherData = response.json()
          .then((response) => {
            console.log(response);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { getWeatherData };
})();

export default DataFetcher;
