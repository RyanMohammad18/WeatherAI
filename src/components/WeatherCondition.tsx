import { WEATHER_CODES } from "../constants/Constants";


interface ConditionProps {
  weatherCode: number;
}


function Condition({
  weatherCode,
}: ConditionProps) {


  const weather =
    WEATHER_CODES[weatherCode] ?? {
      label: "Unknown",
      dot: "bg-gray-400",
    };


  return (
    <div className="flex items-center gap-2">

      <span
        className={`
          h-3
          w-3
          rounded-full
          ${weather.dot}
        `}
      />

      <span>
        {weather.label}
      </span>

    </div>
  );
}


export default Condition;