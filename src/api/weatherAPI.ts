import type {
    ApiError,
  WeatherRequest,
  WeatherResponse
} from "../types/types";


export async function getWeather(
  params: WeatherRequest,
  signal?: AbortSignal
): Promise<WeatherResponse> {


  const response = await fetch(
    `${import.meta.env.VITE_WEATHER_API_URL}/weather`,
    {
      signal,
      headers:{
        Authorization:
        `Bearer ${import.meta.env.VITE_WEATHER_API_KEY}`
      }
    }
  );


 if (!response.ok) {

  const errorData = await response.json().catch(() => null);


  const error: ApiError = {
    status: response.status,
    message:
      errorData?.message ??
      `Weather API failed with status ${response.status}`,
    code:
      errorData?.code,
  };


  throw error;
}

  return response.json();

}