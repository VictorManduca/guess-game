<template src="../assets/templates/prime.html"></template>

<script>
import { tryCallPrimeNumbers } from "../assets/scripts/prime";

export default {
  data: () => {
    return {
      fields: [
        {
          key: "prime",
          label: "Número Primo",
        },
      ],
      items: [],
    };
  },
  methods: {
    tryCallPrimeNumbers,
  },
  async beforeMount() {
    const primeNumbers = await tryCallPrimeNumbers();
    this.items = primeNumbers;
  },
};
</script>
