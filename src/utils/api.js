const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=";
const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
