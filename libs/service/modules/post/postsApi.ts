import { api } from "../../api";
import { PostSchema, type Post } from "./postsSchema";

const postsApi = api.injectEndpoints({
	endpoints: (builder) => ({
		getPosts: builder.query<Post[], void>({
			query: () => "/posts",
			transformResponse: (response: Post[]) => {
				return PostSchema.array().parse(response);
			},
		}),
	}),
});

export const { useGetPostsQuery } = postsApi;
