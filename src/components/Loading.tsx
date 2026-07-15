function Loading() {
  return (
    <div
      className="
        flex
        h-screen
        items-center
        justify-center
        bg-slate-100
      "
    >
      <div className="text-center">

        <div
          className="
            mb-4
            h-10
            w-10
            animate-spin
            rounded-full
            border-4
            border-slate-300
            border-t-slate-800
            mx-auto
          "
        />

        <p className="text-lg font-medium text-slate-700">
          Loading weather data...
        </p>

      </div>
    </div>
  );
}

export default Loading;