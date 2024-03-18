import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'


export const Route = createFileRoute('/_authenticated/dashboard/')({
  component: DashboardIndexComponent,
})


function DashboardIndexComponent() {
  return (
    <div>dashboard.index</div>
  )
}
