import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const name = "api";

const customBaseQuery = fetchBaseQuery({
	baseUrl: "https://jsonplaceholder.typicode.com",
	prepareHeaders: (headers) => {
		headers.set("lng", "en");

		return headers;
	},
});

export const api = createApi({
	reducerPath: name,
	baseQuery: customBaseQuery,
	endpoints: () => ({}),
	tagTypes: [],
});
