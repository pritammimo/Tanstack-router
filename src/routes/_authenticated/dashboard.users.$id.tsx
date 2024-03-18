import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import React from 'react'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
export const Route = createFileRoute("/_authenticated/dashboard/users/$id")({
  component:DashboardUsersid,
});
 function DashboardUsersid() {
    const {id}=Route.useParams();
    console.log(id)
  return (
    <div>DashboardUsersid</div>
  )
}
