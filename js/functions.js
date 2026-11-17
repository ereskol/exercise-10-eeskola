const vastaukset = [
  'Resurssiryhmä on looginen säiliö, johon kootaan saman sovelluksen tai projektin Azure-resurssit, jotta niitä voi hallita, hinnoitella, suojata ja poistaa yhtenä kokonaisuutena.',
  'Azure Functions on palvelimeton (serverless) laskentapalvelu, jossa pieni funktio suoritetaan tapahtuman, esimerkiksi HTTP-kutsun, laukaisemana ilman omaa palvelinta.',
  'Azure CLI (az) on yleiskäyttöinen työkalu resurssien yksityiskohtaiseen hallintaan ja skriptaukseen. Azure Developer CLI (azd) on kehittäjille tarkoitettu työkalu, joka hoitaa sovelluksen koko elinkaaren templaattien ja yksinkertaisten komentojen (kuten azd up) avulla.',
  'Static Web App koostuu staattisista tiedostoista, jotka jaellaan suoraan ilman omaa palvelinta tai konetta. Siksi sillä ei ole käynnistettävää tai sammutettavaa tilaa, vaan palvelu on aina saatavilla.',
  'GitHub Actions ajaa työnkulun aina, kun koodi viedään (push) repositorioon: se rakentaa sovelluksen ja julkaisee sen automaattisesti Static Web App -palveluun (CI/CD).'
];

document.getElementById('nayta-vastaukset').addEventListener('click', () => {
  const kentat = document.querySelectorAll('.vastaus');
  kentat.forEach((kentta, i) => {
    kentta.textContent = vastaukset[i];
    kentta.hidden = false;
  });
});
