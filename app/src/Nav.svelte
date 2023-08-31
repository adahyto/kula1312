<script>
  import { Link } from "svelte-navigator";
  import { url } from "./urlstore";
  import Button from "@smui/button";
</script>

<nav>
  <Link
    to="/"
    style="text-decoration: none; display: {!$url.includes('details')
      ? 'none'
      : 'unset'} "
  >
    <Button>Home</Button></Link
  >

  <Link
    to="details"
    style="text-decoration: none; display: {$url.includes('details')
      ? 'none'
      : 'unset'} "
  >
    <Button>Szczegóły</Button></Link
  >
</nav>

<style>
  nav {
    display: flex;
    flex-direction: row;
    border-bottom: 1px lightgrey solid;
  }
</style>
