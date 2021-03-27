<template src="../assets/templates/guess.html"></template>

<style>
@import "../assets/styles/default.css";
@import "../assets/styles/guess.css";
</style>

<script>
import { guess, save, goBackHome } from "../assets/scripts/guess";

export default {
  data: () => {
    return {
      sum: null,
      prod: null,
      mod: null,
      message:
        "Inclua as pistas nos campos acima e toque no botão para o bot advinhar",
      isFinished: false,
    };
  },
  methods: {
    guess,
    save,
    goBackHome,
  },
};
</script>
