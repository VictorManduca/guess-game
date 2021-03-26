'use strict'

export function proceed() {
  if (!this.name) {
    return this.$toast.error('O campo nome não pode ser deixado vazio')
  } else {
    localStorage.setItem('name', this.name)
    this.$router.push({ name: 'guess' })
  }
}
