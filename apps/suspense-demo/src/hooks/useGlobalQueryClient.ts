import type { QueryCache, MutationCache, DefaultOptions } from 'react-query'
import type { PersistQueryClientOptions } from 'react-query/types/persistQueryClient-experimental'

import { useState } from 'react'
import { QueryClient, useQueryErrorResetBoundary } from 'react-query'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'

interface QueryClientConfig {
  queryCache?: QueryCache
  mutationCache?: MutationCache
  defaultOptions?: DefaultOptions
  persistOptions?: Omit<PersistQueryClientOptions, 'queryClient' | 'persistor'>
}

export const useGlobalQueryClient = ({
  queryCache,
  mutationCache,
  defaultOptions,
  persistOptions,
}: QueryClientConfig) => {
  const { reset } = useQueryErrorResetBoundary()

  const [queryClient] = useState(
    () => new QueryClient({ queryCache, mutationCache, defaultOptions }),
  )

  if (typeof window !== 'undefined') {
    const localStoragePersistor = createWebStoragePersistor({ storage: window.localStorage })

    persistQueryClient({
      queryClient,
      persistor: localStoragePersistor,
      ...persistOptions,
    })
  }

  return { queryClient, reset }
}
