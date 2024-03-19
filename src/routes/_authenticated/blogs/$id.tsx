import { createFileRoute } from '@tanstack/react-router'
import { postQueryOptions } from './-schema/blog'

export const Route = createFileRoute('/_authenticated/blogs/$id')({
  component: BlogComponent,
  loader: ({ context: { queryClient }, params: { id } }) =>
    queryClient.ensureQueryData(postQueryOptions(id)),
})
function BlogComponent() {
    const post = Route.useLoaderData()
  
    return (
      <div className="space-y-2">
        <h4 className="text-xl font-bold underline">{post.title}</h4>
        <div className="text-sm">{post.body}</div>
          Deep View
       
      </div>
    )
  }