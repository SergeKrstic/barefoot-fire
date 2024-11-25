import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { Account } from '@fire/pocketsmith-api'

import { INSTITUTION_ID } from '../BarefootFire.defaults'
import { usePocketsmithApi } from '../hooks/usePocketsmithApi.hook'

export function useAccounts(): UseQueryResult<Account[], Error> {
  const api = usePocketsmithApi()

  return useQuery({
    queryKey: ['accounts'],
    queryFn: async () => {
      if (!api) throw new Error('No API key provided')
      return (await api.accounts.institutionsIdAccountsGet({ id: INSTITUTION_ID })).data
    },
  })
}
