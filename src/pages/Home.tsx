import { useWeather } from "../hooks/useWeather";

import Table from "../components/Table";
import TableHeader from "../components/TableHeader";
import TableCell from "../components/TableCell";
import WeatherCondition from "../components/WeatherCondition";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";

const unit = (u: string) => (u === "imperial" ? "°F" : "°C");

const windUnit = (u: string) => (u === "imperial" ? "mph" : "km/h");

const formatHour = (time: string) => time.split("T")[1];

const Home = () => {
  const { data, isLoading, isError, error } = useWeather({
    lat: 23.8103,
    lon: 90.4125,
    days: 3,
    ai: true,
    units: "metric",
    lang: "en",
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <ErrorMessage
        message={
          error instanceof Error ? error.message : "Something went wrong"
        }
      />
    );
  }

  if (!data) {
    return null;
  }

  const tempUnit = unit(data.units);

  const speedUnit = windUnit(data.units);

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <h1
            className="
              text-4xl
              font-bold
              text-slate-900
            "
          >
            Weather AI Dashboard
          </h1>

          <p
            className="
              mt-2
              text-slate-500
            "
          >
            Location: {data.lat}, {data.lon}
          </p>
        </div>

     
        <Table title="Current Weather">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <TableHeader>Temperature</TableHeader>

                <TableHeader>Condition</TableHeader>

                <TableHeader>Wind</TableHeader>

                <TableHeader>Direction</TableHeader>

                <TableHeader>Time</TableHeader>
              </tr>
            </thead>

            <tbody>
              <tr>
                <TableCell>
                  {data.current.temperature}
                  {tempUnit}
                </TableCell>

                <TableCell>
                  <WeatherCondition weatherCode={data.current.weathercode} />
                </TableCell>

                <TableCell>
                  {data.current.windspeed} {speedUnit}
                </TableCell>

                <TableCell>{data.current.winddirection}°</TableCell>

                <TableCell>{data.current.is_day ? "Day" : "Night"}</TableCell>
              </tr>
            </tbody>
          </table>
        </Table>

        <Table title="Daily Forecast">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <TableHeader>Date</TableHeader>

                <TableHeader>Maximum</TableHeader>

                <TableHeader>Minimum</TableHeader>

                <TableHeader>Rain</TableHeader>

                <TableHeader>Condition</TableHeader>
              </tr>
            </thead>

            <tbody>
              {data.daily.map((day) => (
                <tr key={day.date} className="hover:bg-slate-50">
                  <TableCell>{day.date}</TableCell>

                  <TableCell>
                    {day.temp_max}
                    {tempUnit}
                  </TableCell>

                  <TableCell>
                    {day.temp_min}
                    {tempUnit}
                  </TableCell>

                  <TableCell>{day.precipitation} mm</TableCell>

                  <TableCell>
                    <WeatherCondition weatherCode={day.weathercode} />
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </table>
        </Table>

        <Table title="Hourly Forecast">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr>
                <TableHeader>Time</TableHeader>

                <TableHeader>Temperature</TableHeader>

                <TableHeader>Rain</TableHeader>

                <TableHeader>Condition</TableHeader>
              </tr>
            </thead>

            <tbody>
              {data.hourly.slice(0, 12).map((hour) => (
                <tr key={hour.time} className="hover:bg-slate-50">
                  <TableCell>{formatHour(hour.time)}</TableCell>

                  <TableCell>
                    {hour.temp}
                    {tempUnit}
                  </TableCell>

                  <TableCell>{hour.precipitation} mm</TableCell>

                  <TableCell>
                    <WeatherCondition weatherCode={hour.weathercode} />
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </table>
        </Table>

        {data.ai_summary && (
          <div
            className="
                mt-8
                rounded-xl
                border
                border-blue-200
                bg-blue-50
                p-6
              "
          >
            <h3
              className="
                  mb-2
                  font-semibold
                  text-blue-900
                "
            >
              AI Weather Summary
            </h3>

            <p className="text-blue-800">{data.ai_summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
