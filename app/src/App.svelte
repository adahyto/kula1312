<script>
  import Home from "./Home.svelte";
  import Nav from "./Nav.svelte";
  import Footer from "./Footer.svelte";
  import Details from "./Details.svelte";
  import { Router, Route } from "svelte-navigator";
</script>

<!-- Svelte Material UI styles, Material Icons and Roboto fonts: copies on this server (public/vendor, public/fonts) -->
<link rel="stylesheet" href="/vendor/svelte-material-ui-6.0.0-bare.min.css" />
<link rel="stylesheet" href="/fonts/fonts.css" />
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
