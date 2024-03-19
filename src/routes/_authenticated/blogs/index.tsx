import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import { postsQueryOptions } from "./-schema/blog";
import { useSuspenseQuery } from "@tanstack/react-query";


export const Route = createFileRoute("/_authenticated/blogs/")({
  component:BlogsComponent,
  loader: ({ context: { queryClient } }) =>
  queryClient.ensureQueryData(postsQueryOptions),
});

function BlogsComponent() {
    const postsQuery = useSuspenseQuery(postsQueryOptions)
    const posts = postsQuery.data
  
    return (
      <div className="p-2 flex gap-2">
        <ul className="list-disc pl-4">
          {[...posts, { id: 'i-do-not-exist', title: 'Non-existent Post' }]?.map(
            (post) => {
              return (
                <li key={post.id} className="whitespace-nowrap">
                  <Link
                    to="/blogs/$id"
                    params={{
                      id: post.id,
                    }}
                    className="block py-1 text-blue-800 hover:text-blue-600"
                    activeProps={{ className: 'text-black font-bold' }}
                  >
                    <div>{post.title.substring(0, 20)}</div>
                  </Link>
                </li>
              )
            },
          )}
        </ul>
        <hr />
        <Outlet />
      </div>
    )
  }