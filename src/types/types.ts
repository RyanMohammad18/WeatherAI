export interface WeatherRequest {
    lat: number;
    lon: number;
    days?: number;
    ai?: boolean;
    units?: "metric" | "imperial";
    lang?: string;
}

export interface CurrentWeather {
  time: string;
  interval: number;
  temperature: number;
  windspeed: number;
  winddirection: number;
  is_day: number;
  weathercode: number;
}


export interface DailyWeather {
  date: string;
  temp_max: number;
  temp_min: number;
  precipitation: number;
  weathercode: number;
}


export interface HourlyWeather {
  time: string;
  temp: number;
  precipitation: number;
  weathercode: number;
}


export interface WeatherResponse {
  lat: number;
  lon: number;
  units: "metric" | "imperial";
  days: number;

  current: CurrentWeather;

  daily: DailyWeather[];

  hourly: HourlyWeather[];

  ai_summary?: string;
}


export interface ApiError {
  status: number;
  message: string;
  code?: string;
}