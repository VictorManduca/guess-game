'use strict'

import { getRank } from './api/request'

export function proceed() {
  if (!this.name) {
    return this.$toast.error('O campo nome não pode ser deixado vazio')
  } else {
    localStorage.setItem('name', this.name)
    this.$router.push({ name: 'guess' })
  }
}

export async function tryShowRank() {
  try {
    const rank = await getRank()
    return rank.data.data
  } catch (error) {
    this.$toast.error('Algo deu errado :(')
    throw new Error(error)
  }
}
