import {
  Link,
  Outlet,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { AuthContext } from "../hooks/useAuth";
import { QueryClient } from "@tanstack/react-query";
const activeProps = {
  style: {
    fontWeight: "bold",
  },
};

type RouterContext = {
  authentication: AuthContext;
  queryClient: QueryClient
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => (
    <>
      <h1>My App</h1>
      <ul>
        <li>
          <Link to="/" activeProps={activeProps}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/profile" activeProps={activeProps}>
            {({ isActive }) => <>Profile {isActive && "~"}</>}
          </Link>
        </li>
        <li>
          <Link to="/pokemon" activeProps={activeProps}>
            Pokemons
          </Link>
        </li>
        <li>
          <Link to="/search" activeProps={activeProps}>
            Search
          </Link>
        </li>
        <li>
          <Link to="/login" activeProps={activeProps}>
            Login
          </Link>
        </li>
        <li>
          <Link to="/posts" activeProps={activeProps}>
            posts
          </Link>
        </li>
        {/* <li>
          <Link to="/settings" activeProps={activeProps}>
            Settings
          </Link>
        </li> */}
      </ul>
      <Outlet />
    </>
  ),
});