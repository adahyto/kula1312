<script>
  import { onMount } from "svelte";
  import { url } from "./urlstore";

  onMount(() => {
    url.set(window.location.href);
  });
</script>

<header>
  <h1>Kula1312</h1>
</header>
<section>
  <h2>Uwagi ogólne</h2>
  <ul>
    <li>
      Jeśli Kula szczeka, a nie ma mnie w domu to śmiało możesz wejść do pokoju,
      aby ją uspokoić, dać przysmak lub chwilę się razem pobawić
    </li>
    <li>
      Komunikując się z Kulą staraj się używać poniższych komend i nie
      wprowadzać nowych.
    </li>
    <li>
      Jak chcesz wyprowadzić ją na spacer, to zachowaj czujność kiedy widzisz
      innego psa. Zdaża się jej być agresywną - czasami pomaga zapowiedzenie
      drugiego psa zanim go obaczy ("A kto to?")
    </li>
  </ul>
</section>
<section>
  <h2>Komendy</h2>
  <p>
    Kula zna kilka komend, które ułatwiają wspólną komunikację. Oto ich lista:
  </p>
  <ul>
    <li>Chodź/Chodź tu</li>
    <li>Tędy</li>
    <li>Wracaj tu</li>
    <li>Zostań (chodzi o zamarznięcie w bezruchu)</li>
    <li>Czekaj (swobodna wersja komendy wyżej)</li>
    <li>Hopa (odwołanie powyższych/zachęcenie do wskoczenia na łóżko)</li>
    <li>Super!</li>
    <li>Już! (wzmocnienie innych komend)</li>
    <li>Szybko (bieg/wzmocnienie innych komend)</li>
    <li>Nie!</li>
    <li>Fu!</li>
    <li>Łapka/Daj łapkę</li>
    <li>Druga (chodzi o podanie drugiej łapki)</li>
    <li>Leżeć</li>
    <li>Śpij sobie śpij (to ją uspokaja)</li>
    <li>A kto to?! (jeśli chcesz, aby cieszyła się, że kogoś zobaczy)</li>
    <li>A co to jest dla Kuli?! (po tym wie, że dostanie jakiś przysmak)</li>
    <li>Idź sobie</li>
    <li>Gdzie jest misio?! (szukanie zabawki)</li>
    <li>Dawaj brzucha (to przy głaskaniu, żeby położyła się na plecach)</li>
  </ul>
</section>
<section>
  <h2>Jedzenie</h2>
  <p>
    Jedzenie trzymam za szafką, na której są głośniki. Kula je 2 razy dziennie:
    około 10 rano i 20 wieczorem, w międzyczasie dostaje jeden większy przysmak
    i czasami mniejsze w zamian za sztuczkę lub uspokojenie się kiedy szczeka.
  </p>
</section>
<section>
  <h2>Spacery</h2>
  <p>
    Najlepiej 3: przed jedzeniem rano, przed jedezeniem wieczorem i jakoś
    pomiędzy. Jeśli nie ma opcji na 3, to 2: rano i wieczorem.
  </p>
</section>
<section>
  <h2>Inne psy</h2>
  <p>
    Bywa róznie. Czasami jest agresywna, czasami się bawi, a czasami omija.
    Trzeba wyczuć i odpowiednio reagować. Jeśli nie masz doświadczenia to raczej
    unikaj innych psów. Pytaniem "a kto to?" zwrócisz jej uwagę na psa i szybko
    zobaczysz jak Kula reaguje.
  </p>
</section>

<style>
</style>
