import { AuthenticationError, AuthorizationError } from 'types'
import ErrorComponent from 'next/error'
import LoginForm from 'src/components/forms/LoginForm'

export interface ErrorFallbackProps {
  error: Error & Record<any, any>
  resetErrorBoundary: (...args: Array<unknown>) => void
}

const RootErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  if (error instanceof AuthenticationError) {
    return <LoginForm onSuccess={resetErrorBoundary} />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}

export default RootErrorFallback
