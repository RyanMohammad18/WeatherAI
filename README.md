# Live Link : 

---

## Project Setup

### 1. Clone the repository

Clone this repository to your local machine.

### 2. Install dependencies

Run the following command:

```bash
npm install
```

```bash
npm run dev
```
---

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
VITE_WEATHER_API_URL=https://api.weather-ai.co/v1
VITE_WEATHER_API_KEY=your_api_key_here
```

### API Endpoint Used:

```
GET /v1/weather
```

Stack used:  **React**, **TypeScript**, **Vite**, and **TanStack Query**.

### Key Implementations

- Built using **reusable React components** with a focus on maintainability and scalability.
- Followed **DRY (Don't Repeat Yourself)** principles to reduce code duplication.
- Implemented **TanStack Query** for efficient server state management, caching, and API synchronization.
- Added **request cancellation** using TanStack Query's built-in `signal` with AbortController.
- Implemented **exponential backoff retry strategy** for handling temporary API failures.
- Added proper **API error handling**, including authentication errors and rate limit handling.
---

## Future Improvements

If I get more times I would:

- Implement pagination with query params in the page
- Add prefetching for proper data retrieve
- More API implementation or graph to visualize and more
