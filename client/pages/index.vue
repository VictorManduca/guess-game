<template src="../assets/templates/home.html"></template>

<script>
import { proceed, tryShowRank } from "../assets/scripts/home";
import prime from "./prime";

export default {
  components: {
    prime,
  },
  data: () => {
    return {
      name: null,
      fields: [
        {
          key: "time",
          label: "Tempo (ms)",
        },
        {
          key: "name",
          label: "Nome",
        },
        {
          key: "guesses",
          label: "Número de chutes",
        },
        {
          key: "number",
          label: "Número adivinhado",
        },
      ],
      items: [],
    };
  },
  methods: {
    proceed,
  },
  async beforeMount() {
    const rank = await tryShowRank();
    this.items = rank;
  },
};
</script>
