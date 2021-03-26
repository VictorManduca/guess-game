'use strict'

import { getPrimeNumbers, postGame } from './api/request'

export async function guess() {
  try {
    const start = Date.now()
    if (!this.sum || !this.prod || !this.mod) {
      return this.$toast.error('Todos os campos devem ser preenchidos')
    }

    const primeNumbers = await getPrimeNumbers()
    const guessNumber = primeNumbers.data.data.find(el => el.sum == this.sum && el.prod == this.prod && el.mod == this.mod)
    const end = Date.now()
    const time = Math.floor(end - start)

    if (!guessNumber) {
      this.message = `Por favor, verique se todos os campos estão com os valores corretos para o número imaginado`
    } else {
      this.message = `Pensou no número ${guessNumber.number}?`
      this.isFinished = !this.isFinished
      saveOnLocalStorage(guessNumber.number, time)
    }
  } catch (error) {
    this.$toast.error('Algo deu errado :(')
    throw new Error(error)
  }
}

function saveOnLocalStorage(number, time) {
  localStorage.setItem('number', number)
  localStorage.setItem('time', time)
}

export async function save() {
  try {
    const payload = {
      name: localStorage.getItem('name'),
      time: localStorage.getItem('time'),
      number: localStorage.getItem('number'),
      guesses: 1,
    }

    const responseApi = await postGame(payload)
    if (responseApi.status == 200 || responseApi.status == 201) {
      this.$toast.success('Jogo salvo com sucesso')
      localStorage.clear()
      return this.$router.push({ name: 'index' })
    }
  } catch (error) {
    this.$toast.error('Algo deu errado :(')
    throw new Error(error)
  }
}

export function goBackHome() {
  localStorage.clear()
  return this.$router.push({ name: 'index' })
}
