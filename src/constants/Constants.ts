export const WEATHER_CODES: Record<
  number,
  {
    label: string;
    dot: string;
  }
> = {
  0: {
    label: "Clear",
    dot: "bg-yellow-400",
  },

  1: {
    label: "Mostly clear",
    dot: "bg-yellow-300",
  },

  2: {
    label: "Partly cloudy",
    dot: "bg-gray-400",
  },

  3: {
    label: "Overcast",
    dot: "bg-gray-500",
  },

  45: {
    label: "Fog",
    dot: "bg-gray-400",
  },

  48: {
    label: "Fog",
    dot: "bg-gray-400",
  },

  51: {
    label: "Drizzle",
    dot: "bg-blue-300",
  },

  53: {
    label: "Drizzle",
    dot: "bg-blue-400",
  },

  55: {
    label: "Drizzle",
    dot: "bg-blue-500",
  },

  61: {
    label: "Rain",
    dot: "bg-blue-500",
  },

  63: {
    label: "Rain",
    dot: "bg-blue-600",
  },

  65: {
    label: "Heavy Rain",
    dot: "bg-blue-700",
  },

  80: {
    label: "Showers",
    dot: "bg-blue-500",
  },

  81: {
    label: "Showers",
    dot: "bg-blue-600",
  },

  82: {
    label: "Heavy Showers",
    dot: "bg-blue-700",
  },

  95: {
    label: "Thunderstorm",
    dot: "bg-orange-500",
  },

  96: {
    label: "Thunderstorm",
    dot: "bg-orange-600",
  },

  99: {
    label: "Thunderstorm",
    dot: "bg-orange-700",
  },
};