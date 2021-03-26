'use strict'

import axios from 'axios'

import environment from '../../../environment/environment.dev'

export function getPrimeNumbers() {
  return axios.get(`${environment.url}/prime`)
}

export function postGame(payload) {
  return axios({
    url: `${environment.url}/game`,
    method: 'post',
    data: {
      name: payload.name,
      time: payload.time,
      guesses: payload.guesses,
      number: payload.number
    }
  })
}
