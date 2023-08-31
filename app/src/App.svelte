<script>
  import Home from "./Home.svelte";
  import Nav from "./Nav.svelte";
  import Footer from "./Footer.svelte";
  import Details from "./Details.svelte";
  import { Router, Route } from "svelte-navigator";
</script>

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0/bare.min.css"
/>
<!-- Material Icons -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
<!-- Roboto -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
/>
<!-- Roboto Mono -->
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto+Mono"
/>
<Router>
  <Nav />
  <Route path="/">
    <Home />
  </Route>
  <Route path="/details">
    <Details />
  </Route>
  <Footer />
</Router>

<style>
</style>
