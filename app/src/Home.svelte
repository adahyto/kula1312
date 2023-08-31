<script>
  import { onMount } from "svelte";
  import { url } from "./urlstore";

  onMount(() => {
    url.set(window.location.href);
  });
</script>

<header>
  <h1>Witaj na stronce o Kuli1312!</h1>
</header>
<main>
  <img src="./assets/kula1312.jpg" alt="zdjęcie Kuli1312" />
  <h2>
    Dzięki za zainteresowanie - wszystkie informacje znajdziesz w sekcji ze
    szczegółami.
  </h2>
</main>

<style>
</style>
