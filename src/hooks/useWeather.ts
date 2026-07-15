import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api/weatherAPI";
import type { WeatherRequest, WeatherResponse } from "../types/types";


export function useWeather(params: WeatherRequest) {

  return useQuery<WeatherResponse>({
    queryKey: ["weather", params],

    queryFn: ({ signal }) =>
      getWeather(params, signal),

    enabled: Boolean(params.lat && params.lon),

    retry: (failureCount, error) => {

      if (
        error instanceof Error &&
        error.message.includes("401")
      ) {
        return false;
      }

      return failureCount < 3;
    },

    retryDelay: (attempt) =>
      Math.min(1000 * 2 ** attempt, 30000),

    staleTime: 1000 * 60 * 5,
  });

}