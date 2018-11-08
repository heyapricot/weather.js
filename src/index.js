import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import DataFetcher from './scenes/Main/components/DataFetcher/DataFetcher';

DataFetcher.getWeatherData('Mexico City', 'imperial').then(data => console.log(data));
DataFetcher.getWeatherData('Mexico City', 'metric').then(data => console.log(data));
