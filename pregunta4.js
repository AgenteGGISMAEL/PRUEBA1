var climas = ['clear', 'cloud', 'mist', 'rain', 'snow'];

function generarTarjeta(pais, clima) {
  var temperatura = Math.floor(Math.random() * 30);
  var olas = Math.floor(Math.random() * 100);
  var viento = Math.floor(Math.random() * 100);

  return `
    <div class="tarjeta">
      <img src="img clima/${clima}.png" alt="Icono del clima">
      <div class="pais">${pais}</div>
      <div class="temperatura">${temperatura}°C</div>
      <div class="clima">${clima}</div>
      <div class="olas">${olas}%</div>
      <div class="viento">${viento} km/h</div>
    </div>
  `;
}

function buscarClima() {
  var pais = document.getElementById('paises').value;
  var clima = climas[Math.floor(Math.random() * climas.length)];
  document.getElementById('tarjeta').innerHTML = generarTarjeta(pais, clima);
}

 