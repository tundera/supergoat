import type { UrlObject } from 'url'
import type { AppProps as NextAppProps } from 'next/app'
import type {
  NextComponentType as DefaultNextComponentType,
  NextPage as DefaultNextPage,
  NextPageContext,
} from 'next'

export type GetLayoutFunction = (component: JSX.Element) => JSX.Element

export declare type NextComponentType<
  C = NextPageContext,
  IP = Record<string, unknown>,
  P = Record<string, unknown>,
> = DefaultNextComponentType<C, IP, P>

export interface AppProps<P = Record<string, unknown>> extends NextAppProps<P> {
  Component: NextComponentType<NextPageContext, any, P> & {
    getLayout?: GetLayoutFunction
  }
}

export declare type NextPage<P = Record<string, unknown>, IP = P> = DefaultNextPage<P, IP> & {
  getLayout?: GetLayoutFunction
}

export class AuthenticationError extends Error {
  name = 'AuthenticationError'
  statusCode = 401
  constructor(message = 'You must be logged in to access this') {
    super(message)
  }
  get _clearStack() {
    return true
  }
}

export class CSRFTokenMismatchError extends Error {
  name = 'CSRFTokenMismatchError'
  statusCode = 401
  get _clearStack() {
    return true
  }
}

export class AuthorizationError extends Error {
  name = 'AuthorizationError'
  statusCode = 403
  constructor(message = 'You are not authorized to access this') {
    super(message)
  }
  get _clearStack() {
    return true
  }
}

export class NotFoundError extends Error {
  name = 'NotFoundError'
  statusCode = 404
  constructor(message = 'This could not be found') {
    super(message)
  }
  get _clearStack() {
    return true
  }
}

export class PaginationArgumentError extends Error {
  name = 'PaginationArgumentError'
  statusCode = 422
  constructor(message = 'The pagination arguments are invalid') {
    super(message)
  }
}

export class RedirectError extends Error {
  name = 'RedirectError'
  statusCode = 302
  url: UrlObject | string
  constructor(url: UrlObject | string) {
    super(typeof url === 'object' ? (url.href as string) : url)
    this.url = url
  }
  get _clearStack() {
    return true
  }
}

export interface ErrorFallbackProps {
  error: Error & Record<string, unknown>
  resetErrorBoundary: (...args: Array<unknown>) => void
}
