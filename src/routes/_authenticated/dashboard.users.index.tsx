import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import React from 'react'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
export const Route = createFileRoute("/_authenticated/dashboard/users/")({
  component:()=><div>Users</div>,
});