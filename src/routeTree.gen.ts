/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as ProfileImport } from './routes/profile'
import { Route as LoginImport } from './routes/login'
import { Route as AuthenticatedImport } from './routes/_authenticated'
import { Route as IndexImport } from './routes/index'
import { Route as PokemonIndexImport } from './routes/pokemon/index'
import { Route as PokemonIdImport } from './routes/pokemon/$id'

// Create/Update Routes

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const LoginRoute = LoginImport.update({
  path: '/login',
  getParentRoute: () => rootRoute,
} as any)

const AuthenticatedRoute = AuthenticatedImport.update({
  id: '/_authenticated',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIndexRoute = PokemonIndexImport.update({
  path: '/pokemon/',
  getParentRoute: () => rootRoute,
} as any)

const PokemonIdRoute = PokemonIdImport.update({
  path: '/pokemon/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_authenticated': {
      preLoaderRoute: typeof AuthenticatedImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/$id': {
      preLoaderRoute: typeof PokemonIdImport
      parentRoute: typeof rootRoute
    }
    '/pokemon/': {
      preLoaderRoute: typeof PokemonIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  LoginRoute,
  ProfileRoute,
  SearchRoute,
  PokemonIdRoute,
  PokemonIndexRoute,
])

/* prettier-ignore-end */