import { Link, Outlet, createFileRoute } from "@tanstack/react-router";
import React from 'react'
import axios from 'axios'
import { useQuery } from "@tanstack/react-query";
export const Route = createFileRoute("/_authenticated/dashboard")({
  component:DashboardComponent,
});

function DashboardComponent() {
    return (
      <>
        <div className="flex items-center border-b">
          <h2 className="text-xl p-2">Dashboard</h2>
        </div>
        {/* <div className="flex flex-wrap divide-x">
          {(
            [
              ['/dashboard', 'Summary', true],
              ['/dashboard/invoices', 'Invoices'],
              ['/dashboard/users', 'Users'],
            ] as const
          ).map(([to, label, exact]) => {
            return (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact }}
                activeProps={{ className: `font-bold` }}
                className="p-2"
              >
                {label}
              </Link>
            )
          })}
        </div> */}
        <hr />
        <Outlet />
      </>
    )
  }
  