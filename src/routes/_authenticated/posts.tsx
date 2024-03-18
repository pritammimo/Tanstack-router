import { createFileRoute } from "@tanstack/react-router";
import React from 'react'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
export const Route = createFileRoute("/_authenticated/posts")({
  component:posts,
});

function posts() {
    const { data } = useQuery(
        {
            queryKey: ['allBrandStoreInfo'],
            queryFn: async () => {
                const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts")
                return data
            },
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        }
    );
    return (
      <>
      {data !==undefined && data?.map((item: { id: React.Key ; title: string  })=>(
         <h2 key={item.id}>{item.title}</h2>
      ))}
       
      </>
    );
  }
