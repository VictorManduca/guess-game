'use strict'

import axios from 'axios'

import environment from '../../../environment/environment.dev'

export function getPrimeNumbers() {
  return axios.get(`${environment.url}/prime`)
}
