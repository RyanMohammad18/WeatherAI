interface ErrorMessageProps {
  message: string;
  status?: number;
}


function ErrorMessage({
  message,
  status,
}: ErrorMessageProps) {

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

      <div
        className="
          rounded-xl
          border
          border-red-200
          bg-red-50
          p-6
          text-center
        "
      >

        <h2
          className="
            mb-2
            text-xl
            font-bold
            text-red-700
          "
        >
          Something went wrong
        </h2>


        <p className="text-red-600">
          {message}
        </p>


        {
          status && (
            <p className="mt-2 text-sm text-red-500">
              Error Code: {status}
            </p>
          )
        }

      </div>

    </div>
  );
}


export default ErrorMessage;