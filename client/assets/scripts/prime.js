'use strict'

import { getPrimeNumbers } from './api/request'

export async function tryCallPrimeNumbers() {
  try {
    const primeNumbers = await getPrimeNumbers()
    return primeNumbers.data.data.map(el => {
      return { prime: el.number }
    })
  } catch (error) {
    this.$toast.error('Algo deu errado :(')
    throw new Error(error)
  }
}
