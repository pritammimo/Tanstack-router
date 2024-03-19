import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';
import { routeTree } from "./routeTree.gen";
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { useAuth } from './hooks/useAuth.ts';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5*60*1000,
    },
  },
});
const router = createRouter({
  routeTree,
  context: { authentication: undefined!,queryClient },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0,
});
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  const authentication = useAuth();
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} context={{ authentication }} />
    </QueryClientProvider>,
  )
}