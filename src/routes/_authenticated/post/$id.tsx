import { useQuery } from "@tanstack/react-query";
import { createFileRoute } from "@tanstack/react-router";
import React from 'react'
import axios from "axios";


export const Route = createFileRoute("/_authenticated/post/$id")({
  component: PostId,
});


 function PostId() {
  const { id } = Route.useParams();
  const {  data: postdetails } = useQuery(
    {
        queryKey: ['postdetails', id],
        queryFn: async () => {
            const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            return data
        },
    }
);
  console.log(id,postdetails);
  return (
    <div>
      {postdetails?.title} : {postdetails?.body}
    </div>
  )
}
