import React, { useState, useEffect } from 'react';
import './ApiPage.css';

const ApiPage = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedApi, setSelectedApi] = useState('weather');

  const [city, setCity] = useState('Kathmandu');
  const [weatherData, setWeatherData] = useState(null);
  const [newsCategory, setNewsCategory] = useState('technology');
  const [newsData, setNewsData] = useState([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('NPR');
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  useEffect(() => {
    const fetchApiList = async () => {
      try {
        setLoading(true);
        const mockApiList = [
          { id: 'weather', name: 'Weather API', description: 'Get current weather data for any location' },
          { id: 'news', name: 'News API', description: 'Get breaking news headlines and search for articles' },
          { id: 'currency', name: 'Currency Converter', description: 'Convert between different currencies' }
        ];
        setApiData(mockApiList);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch API list');
        setLoading(false);
      }
    };
    fetchApiList();
  }, []);

  const fetchWeatherData = async () => {
    try {
      setLoading(true);
      const mockWeatherResponse = {
        location: city,
        temperature: Math.floor(Math.random() * 30) + 10,
        condition: ['Sunny', 'Cloudy', 'Rainy', 'Partly Cloudy'][Math.floor(Math.random() * 4)],
        humidity: Math.floor(Math.random() * 50) + 30,
        wind_speed: Math.floor(Math.random() * 20) + 5
      };
      setWeatherData(mockWeatherResponse);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch weather data');
      setLoading(false);
    }
  };

  const fetchNewsData = async () => {
    try {
      setLoading(true);
      const mockNewsResponse = [
        {
          id: 1,
          title: `${newsCategory.charAt(0).toUpperCase() + newsCategory.slice(1)} News Headline 1`,
          description: 'Sample news article description.',
          source: 'News Source 1',
          published_at: new Date().toISOString()
        },
        {
          id: 2,
          title: `${newsCategory.charAt(0).toUpperCase() + newsCategory.slice(1)} News Headline 2`,
          description: 'Another sample news article.',
          source: 'News Source 2',
          published_at: new Date(Date.now() - 3600000).toISOString()
        }
      ];
      setNewsData(mockNewsResponse);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch news data');
      setLoading(false);
    }
  };

  const convertCurrency = async () => {
    try {
      setLoading(true);
      const mockRate = {
        'USD-NPR': 132.5,
        'EUR-NPR': 145.8,
        'GBP-NPR': 170.2,
        'USD-EUR': 0.91,
        'EUR-USD': 1.09,
        'GBP-USD': 1.28,
      };
      const rateKey = `${fromCurrency}-${toCurrency}`;
      const rate = mockRate[rateKey] || (Math.random() * 100 + 50);
      setConvertedAmount((amount * rate).toFixed(2));
      setLoading(false);
    } catch (err) {
      setError('Failed to convert currency');
      setLoading(false);
    }
  };

  const handleApiSelection = (apiId) => {
    setSelectedApi(apiId);
    setError(null);
    setWeatherData(null);
    setNewsData([]);
    setConvertedAmount(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedApi === 'weather') fetchWeatherData();
    else if (selectedApi === 'news') fetchNewsData();
    else if (selectedApi === 'currency') convertCurrency();
  };

  const renderApiInterface = () => {
    switch (selectedApi) {
      case 'weather':
        return (
          <div className="api-interface weather-api">
            <h3>Weather API</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>City Name:</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city name" required />
              </div>
              <button type="submit" className="api-button">Get Weather</button>
            </form>
            {weatherData && (
              <div className="api-result weather-result">
                <h4>{weatherData.location} Weather</h4>
                <div className="weather-details">
                  <p className="temperature">{weatherData.temperature}°C</p>
                  <p className="condition">{weatherData.condition}</p>
                  <div className="weather-info">
                    <p>Humidity <span>{weatherData.humidity}%</span></p>
                    <p>Wind <span>{weatherData.wind_speed} km/h</span></p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'news':
        return (
          <div className="api-interface news-api">
            <h3>News API</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Category:</label>
                <select value={newsCategory} onChange={(e) => setNewsCategory(e.target.value)}>
                  <option value="business">Business</option>
                  <option value="technology">Technology</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="sports">Sports</option>
                  <option value="health">Health</option>
                </select>
              </div>
              <button type="submit" className="api-button">Get News</button>
            </form>
            {newsData.length > 0 && (
              <div className="api-result news-result">
                <h4>Latest {newsCategory.charAt(0).toUpperCase() + newsCategory.slice(1)} News</h4>
                <div className="news-list">
                  {newsData.map(article => (
                    <div key={article.id} className="news-item">
                      <h5>{article.title}</h5>
                      <p>{article.description}</p>
                      <div className="news-meta">
                        <span>{article.source}</span>
                        <span>{new Date(article.published_at).toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'currency':
        return (
          <div className="api-interface currency-api">
            <h3>Currency Converter</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Amount:</label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} min="0.01" step="0.01" required />
              </div>
              <div className="currency-selects">
                <div className="form-group">
                  <label>From:</label>
                  <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>To:</label>
                  <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
                    <option value="NPR">NPR</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="api-button">Convert</button>
            </form>
            {convertedAmount && (
              <div className="api-result currency-result">
                <h4>Conversion Result</h4>
                <p className="conversion">
                  {amount} {fromCurrency} = <span className="converted-amount">{convertedAmount}</span> {toCurrency}
                </p>
              </div>
            )}
          </div>
        );

      default:
        return <div>Select an API to get started</div>;
    }
  };

  return (
    <div className="api-page">
      <div className="container">
        <h2 className="page-title">API Playground</h2>
        <p className="page-description">
          Explore different public APIs and see them in action. Select an API from the list below to get started.
        </p>
        {loading && <div className="loading"></div>}
        {error && <div className="error"><strong>Error:</strong> {error}</div>}
        <div className="api-content">
          <div className="api-sidebar">
            <h3>Available APIs</h3>
            <ul className="api-list">
              {apiData.map(api => (
                <li key={api.id} className={`api-item ${selectedApi === api.id ? 'active' : ''}`} onClick={() => handleApiSelection(api.id)}>
                  <h4>{api.name}</h4>
                  <p>{api.description}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="api-main">
            {renderApiInterface()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiPage;
