const catalogo = [
  {
    id: 1,
    titolo: "Interstellar: due mondi tra le chiappe",
    categoria: "Fantascienza",
    anno: 2014,
    valutazione: 8.7,
    poster: "https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 2,
    titolo: "John Massimo Ercoli",
    categoria: "Azione",
    anno: 2014,
    valutazione: 7.5,
    poster: "https://m.media-amazon.com/images/I/71OQhop-4DL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 3,
    titolo: "Il Grande Puzzo",
    categoria: "Commedia",
    anno: 1998,
    valutazione: 8.1,
    poster: "https://pad.mymovies.it/filmclub/2002/03/024/locandinapg4.jpg",
  },
  {
    id: 4,
    titolo: "Se7en six",
    categoria: "Thriller",
    anno: 1995,
    valutazione: 8.6,
    poster: "https://m.media-amazon.com/images/M/MV5BY2IzNzMxZjctZjUxZi00YzAxLTk3ZjMtODFjODdhMDU5NDM1XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: 5,
    titolo: "Mad Max: Glory hole",
    categoria: "Azione",
    anno: 2015,
    valutazione: 8.1,
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMHutSyGUQQUzRUkN5qe8TOb3J0Nhzw2Smw&s",
  },
  {
    id: 6,
    titolo: "Arrival: quando?",
    categoria: "Fantascienza",
    anno: 2016,
    valutazione: 7.9,
    poster: "https://www.scegliereunfilm.it/wp-content/uploads/2023/05/Arrival.webp",
  },
  {
    id: 7,
    titolo: "Superbad: MCLOVIN",
    categoria: "Commedia",
    anno: 2007,
    valutazione: 7.6,
    poster: "https://m.media-amazon.com/images/I/71PuxqbE3pL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 8,
    titolo: "Zodiaco non i cavalieri",
    categoria: "Thriller",
    anno: 2007,
    valutazione: 7.7,
    poster: "https://m.media-amazon.com/images/I/91gYQOSys6L._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 9,
    titolo: "Mission: Impossible: L'ora 24",
    categoria: "Azione",
    anno: 2023,
    valutazione: 7.8,
    poster: "https://m.media-amazon.com/images/I/718RVx84VNL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 10,
    titolo: "Blade Runner 2067",
    categoria: "Fantascienza",
    anno: 2017,
    valutazione: 8.0,
    poster: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 11,
    titolo: "Una notte da coglioni: il ritorno degli xenofili",
    categoria: "Commedia",
    anno: 2009,
    valutazione: 7.7,
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Hangoverposter09.jpg/250px-Hangoverposter09.jpg",
  },
  {
    id: 12,
    titolo: "Gone Girl: due puttane per un matrimonio",
    categoria: "Thriller",
    anno: 2014,
    valutazione: 8.1,
    poster: "https://cdn.kobo.com/book-images/395aef2d-44e2-4f98-bb62-33d7130eabcf/1200/1200/False/gone-girl-movie-tie-in-edition-1.jpg",
  },
  {
    id: 13,
    titolo: "Scappellitan America",
    categoria: "Supereroi",
    anno: 2014,
    valutazione: 7.9,
    poster: "https://m.media-amazon.com/images/M/MV5BNzUyM2YyY2MtNzNlMS00MWU5LTgxNjAtNzZlNmI2NjU2NDZlXkEyXkFqcGc@._V1_FMjpgUX1000.jpg",
  },
  {
    id: 14,
    titolo: "Bonicula",
    categoria: "Thriller",
    anno: 1997,
    valutazione: 9.7,
    poster: "https://m.media-amazon.com/images/S/pv-target-images/fe32d8cca9b8a0c0c70ecc47b9c5ceffb1419e47c9e1c2627b9b8b92ceb5789b.jpg",
  },
  {
    id:15,
    titolo:"Il Cacchino: La famigghia è importante",
    categoria:"Thriller",
    anno:1999,
    valutazione:10,
    poster:"https://m.media-amazon.com/images/M/MV5BZDQ1YzU5N2UtYTNlNy00ZmJhLWI4NTAtMjM1YTBkOWFkYTc1XkEyXkFqcGc@._V1_FMjpgUX1000.jpg",
  },
  {
    id:16,
    titolo:"Barbone Italiano ubriaco che fa a botte con altri barboni",
    categoria:"Commedia",
    anno:20,
    valutazione:8.7,
    poster:"https://pad.mymovies.it/filmclub/2006/07/232/locandina.jpg",
  },
  {
    id:17,
    titolo:"Indiana Cock: il teschio del sesso",
    categoria:"Azione",
    anno:1991,
    valutazione:7.6,
    poster:"https://m.media-amazon.com/images/M/MV5BYTFiMDk2NzItZDU5Ni00ZjBjLTkzYWQtYzcwZDIwMWZjMmZiXkEyXkFqcGc@._V1_FMjpgUX1000.jpg",
  },
  {
    id:18,
    titolo:"Bambino di colore che combatte usando mosse speciali insegnate da un uomo di colore più vecchio che mangia solo pollo fritto e cocomero",
    categoria:"Azione",
    anno:2003,
    valutazione:8.67,
    poster:"https://m.media-amazon.com/images/M/MV5BMDExYzk0NDgtNjRmMS00MGJlLWI2NGQtMGY3NzQyZjViNDliXkEyXkFqcGc@.V1.jpg",
  },
  {
    id:19,
    titolo:"Tipica Ragazza dopo aver ascoltato il rap italiano(fottiti kid yugi)",
    categoria:"Anime",
    anno:2016,
    valutazione:9,
    poster:"https://m.media-amazon.com/images/M/MV5BOTFiNzRiOWEtYTQwNy00NmRiLWE0ZWYtNTE0YjExZjFmZjkwXkEyXkFqcGc@._V1_.jpg",
  },
  {
    id:20,
    titolo:"Il Signore della droga: Sauron è andato in Overdose",
    categoria:"Fantascienza",
    anno:1993,
    valutazione:10,
    poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGL9zZ6QvM4a_xBJyru5GoqWn0tnhoj8VCjg&s",
  },
  {
    id:21,
    titolo:"The Punisher: la vendetta di Alex",
    categoria:"Supereroi",
    anno:2012,
    valutazione:7.4,
    poster:"https://m.media-amazon.com/images/M/MV5BM2ExMDVmMzgtZDU0Ni00NzgyLTgxYzEtYThhZGM0MjMyMTljXkEyXkFqcGc@._V1_FMjpgUX1000.jpg",
  },
  {
    id:22,
    titolo:"Porno: Il ritorno dei gay",
    categoria:"Porno",
    anno:2025,
    valutazione:10,
    poster:"https://lh3.googleusercontent.com/proxy/8de_oEgw3m0fzg7sr3o_WTMjKokfvS7fBeFXo0Aih6ggC_JzZPWjIGVjB9ROV6GabwqCqAtLuDnqpG11MUXq7b4LR2p2-W2C8r56HUL5reqDJg",
  },
  {
    id:23,
    titolo:"Cartman ha le poppe oh yes, ah e poi South Park",
    categoria:"Porno",
    anno:2018,
    valutazione:9.9,
    poster:"https://m.media-amazon.com/images/I/61gIZGTtmOL._AC_UF894,1000QL80.jpg",
  },
  {
    id:24,
    titolo:"Star bops: Mannaggia è di 23 centimetri",
    categoria:"Fantascienza",
    anno:1969,
    valutazione:9.69,
    poster:"https://media.glamour.com/photos/5a284b43ec9b1c5996a28fe9/master/w_2560%2Cc_limit/https-%25252F%25252Fblueprint-api-production.s3.amazonaws.com%25252Fuploads%25252Fcard%25252Fimage%25252F669504%25252F9efa0aad-d05d-45d8-adb0-4f4501877348.jpg",
  },
  {
    id:25,
    titolo:"Penisless: da Uomo a Donna",
    categoria:"Fantascienza",
    anno:2011,
    valutazione:8.67,
    poster:"https://m.media-amazon.com/images/M/MV5BMWQ4OTQ4YzYtODlmMi00ZjA0LTg5M2QtZWUzNjA5N2NmODE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id:26,
    titolo:"Seme a catinelle(sulla testa pelata di Checco Zalone)",
    categoria:"Commedia",
    anno:2013,
    valutazione:10,
    poster:"https://pad.mymovies.it/filmclub/2011/09/009/locandina.jpg",
  },
  {
    id:27,
    titolo:"Skrillez Bill",
    categoria:"Azione",
    anno:2067,
    valutazione:6.9,
    poster:"https://upload.wikimedia.org/wikipedia/en/thumb/2/2c/Kill_Bill_Volume_1.png/250px-Kill_Bill_Volume_1.png",
  },
  {
    id:28,
    titolo:"Voglio mangiare la tua pizza fritta",
    categoria:"Anime",
    anno:2013,
    valutazione:9.69,
    poster:"https://www.akibagamers.it/wp-content/uploads/2018/11/voglio-mangiare-il-tuo-pancreas.jpg",
  },
  {
    id:29,
    titolo:"Ispettore Gadget :si è fatto di fent",
    categoria:"Supereroi",
    anno:2002,
    valutazione:8.1,
    poster:"https://i.redd.it/official-posters-for-doctor-strange-in-the-multiverse-of-v0-uj29hqpjrwr81.jpg?width=1080&format=pjpg&auto=webp&s=be5430b221d94cbbb801eddf1e455defda3cf338",
  },
  {
    id:30,
    titolo:"L'uomo sega: L'arco di Rita la donna delle bombe",
    categoria:"Anime",
    anno:2025,
    valutazione:8.9,
    poster:"https://pad.mymovies.it/filmclub/2025/09/031/locandina.jpg",
  },
  {
    id:31,
    titolo:"Mauro Croce: Il film",
    categoria:"Supereroi",
    anno:2008,
    valutazione:10,
    poster:"https://pad.mymovies.it/filmclub/2007/09/069/locandina.jpg",
  },
  {
    id:32,
    titolo:"Taxi driver: il mio taxi è giallo come le banane e lungo come il mio pene",
    categoria:"Thriller",
    anno:2001,
    valutazione:8.5,
    poster:"https://i.ebayimg.com/images/g/i7QAAOSw0R9gVerF/s-l1200.jpg",
  },
  {
    id:33,
    titolo:"Fantozzi: il ritorno dello scopa nubi",
    categoria:"Commedia",
    anno:1993,
    valutazione:9.1,
    poster:"https://pad.mymovies.it/filmclub/2018/09/159/locandina.jpg",
  },
  {
    id:34,
    titolo:"Romanian Man: La tuta di rame",
    categoria:"Supereroi",
    anno:2003,
    valutazione:8.5,
    poster:"https://m.media-amazon.com/images/S/pv-target-images/cee8bddce9208f09b2791078d12997674e0917b2055f68f7998dec18763beb3e.jpg",
  },
  {
    id:35,
    titolo:"Super Mario 2:Il boss dei funghetti e il kink sulle donne giganti",
    categoria:"Supereroi",
    anno:2026,
    valutazione:7.7,
    poster:"https://m.media-amazon.com/images/M/MV5BODFmNmZhZDAtZDMyZC00NGEzLTlmZjktY2MxNjQ4NzViYjBlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id:36,
    titolo:"Iron Slung: Markiplier si beve il sangue del ciclo",
    categoria:"Thriller",
    anno:2025,
    valutazione:9.9,
    poster:"https://m.media-amazon.com/images/M/MV5BOTNhOTk1ZTgtZTgwNy00NDdiLTlkNWItMDIxNjMwZDgxNTc4XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id:37,
    titolo:"I guerrieri della notte: si scopa al buio",
    categoria:"Commedia",
    anno:2017,
    valutazione:8.1,
    poster:"https://m.media-amazon.com/images/I/71e0RF-pgvL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id:38,
    titolo:"Cipolla di vetro: non erà nè un arancia ne mecchanica",
    categoria:"Thriller",
    anno:2022,
    valutazione:9.69,
    poster:"https://m.media-amazon.com/images/M/MV5BMzI2ZDYxZTEtMzVlOC00OTUyLTgyNTAtYWFhNmRhZjAzZWE1XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id:39,
    titolo:"Windstorm: il mio cavallo è nero e anche molto lungo",
    categoria:"Porno",
    anno:2003,
    valutazione:2.67,
    poster:"https://m.media-amazon.com/images/I/51LJ1nLM4BL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id:40,
    titolo:"Godzilla Vs Hatsune miku",
    categoria:"Anime",
    anno:2014,
    valutazione:8.9,
    poster:"https://pad.mymovies.it/filmclub/2010/03/246/locandina.jpg",
  },
  {
    id:41,
    titolo:"La casa 2: La Casa 2(La Casa 1 non esiste)",
    categoria:"Thriller",
    anno:2009,
    valutazione:11,
    poster:"https://play-lh.googleusercontent.com/IsTIo4BwfijgSDC1sI5JKplcntnhHiKrErGgZSbqstoPlBubrAeMTbDYfviuo3rzULhu",
  },
  {
    id:42,
    titolo:"Jesse Pinkman diventa una ragazza degli anime insieme al suo camper della droga",
    categoria:"Anime",
    anno:2019,
    valutazione:10,
    poster:"https://pad.mymovies.it/filmclub/2019/08/065/locandina.jpg",
  },
  {
    id:43,
    titolo:"Shrek I: L'orgia gay con Chuchino",
    categoria:"Commedia",
    anno:2001,
    valutazione:7.7,
    poster:"https://thumbs.dfs.ivi.ru/storage0/contents/1/6/898e9af96a405da94fc011e2fa56af.jpg",
  },
  {
    id:44,
    titolo:"Il codice DaVinci:Parliamo di cazzi qui",
    categoria:"Thriller",
    anno:2011,
    valutazione:8.2,
    poster:"https://www.ibs.it/images/9788804523413_862235931_0_0_0_75.jpg",
  },
  
  
  
  
];

let categoriaAttiva = "Tutti";
let preferiti = [];

const grigliaCatalogo = document.getElementById("griglia-catalogo");
const messaggioVuoto = document.getElementById("messaggio-vuoto");
const listaPreferiti = document.getElementById("lista-preferiti");
const contatorePreferiti = document.getElementById("contatore-preferiti");
const testoContatore = document.getElementById("testo-contatore");
const listaVuota = document.getElementById("lista-vuota");
const bottoniFiltro = document.querySelectorAll(".filtro");

function filtraCatalogo(categoria) {
  if (categoria === "Tutti") return catalogo;
  return catalogo.filter((item) => item.categoria === categoria);
}

function eInPreferiti(id) {
  return preferiti.some((item) => item.id === id);
}

function creaCard(contenuto) {
  const inLista = eInPreferiti(contenuto.id);
  const card = document.createElement("article");
  card.className = "card";
  card.setAttribute("role", "listitem");
  card.dataset.id = contenuto.id;

  card.innerHTML = `
    <img class="card__poster" src="${contenuto.poster}" alt="Poster di ${contenuto.titolo}" loading="lazy">
    <div class="card__body">
      <h3 class="card__titolo">${contenuto.titolo}</h3>
      <p class="card__meta">Anno: ${contenuto.anno}</p>
      <span class="card__categoria">${contenuto.categoria}</span>
      <p class="card__valutazione">${contenuto.valutazione}</p>
      <button type="button" class="btn-preferito ${inLista ? "btn-preferito--in-lista" : ""}" data-id="${contenuto.id}" ${inLista ? "disabled" : ""}>
        ${inLista ? "Già in lista" : "Aggiungi ai preferiti"}
      </button>
    </div>
  `;

  const btn = card.querySelector(".btn-preferito");
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    aggiungiPreferito(contenuto.id);
  });

  card.addEventListener("click", () => apriScheda(contenuto.id));

  return card;
}

function renderCatalogo() {
  const risultati = filtraCatalogo(categoriaAttiva);
  grigliaCatalogo.innerHTML = "";

  if (risultati.length === 0) {
    messaggioVuoto.hidden = false;
    return;
  }

  messaggioVuoto.hidden = true;
  risultati.forEach((contenuto) => {
    grigliaCatalogo.appendChild(creaCard(contenuto));
  });
}

function aggiornaPulsantiCatalogo() {
  document.querySelectorAll(".card").forEach((card) => {
    const id = Number(card.dataset.id);
    const btn = card.querySelector(".btn-preferito");
    const inLista = eInPreferiti(id);

    btn.disabled = inLista;
    btn.textContent = inLista ? "Già in lista" : "Aggiungi ai preferiti";
    btn.classList.toggle("btn-preferito--in-lista", inLista);
  });
}

function aggiungiPreferito(id) {
  if (eInPreferiti(id)) return;

  const contenuto = catalogo.find((item) => item.id === id);
  if (!contenuto) return;

  preferiti.push(contenuto);
  renderListaPreferiti();
  aggiornaContatore();
  aggiornaPulsantiCatalogo();
  aggiornaPulsanteScheda();
}

function rimuoviPreferito(id) {
  preferiti = preferiti.filter((item) => item.id !== id);
  renderListaPreferiti();
  aggiornaContatore();
  aggiornaPulsantiCatalogo();
}

function renderListaPreferiti() {
  listaPreferiti.innerHTML = "";

  preferiti.forEach((contenuto) => {
    const li = document.createElement("li");
    li.className = "item-preferito";
    li.innerHTML = `
      <img class="item-preferito__thumb" src="${contenuto.poster}" alt="">
      <div class="item-preferito__info">
        <p class="item-preferito__titolo">${contenuto.titolo}</p>
        <p class="item-preferito__anno">${contenuto.anno} · ${contenuto.categoria}</p>
      </div>
      <button type="button" class="btn-rimuovi" data-id="${contenuto.id}" aria-label="Rimuovi ${contenuto.titolo}">×</button>
    `;

    li.querySelector(".btn-rimuovi").addEventListener("click", () => {
      rimuoviPreferito(contenuto.id);
    });

    listaPreferiti.appendChild(li);
  });

  listaVuota.hidden = preferiti.length > 0;
}

function aggiornaContatore() {
  const totale = preferiti.length;
  contatorePreferiti.textContent = totale;
  testoContatore.textContent =
    totale === 1 ? "1 titolo salvato" : `${totale} titoli salvati`;
}

function impostaFiltro(categoria) {
  categoriaAttiva = categoria;

  bottoniFiltro.forEach((btn) => {
    btn.classList.toggle("filtro--attivo", btn.dataset.categoria === categoria);
  });

  renderCatalogo();
}

bottoniFiltro.forEach((btn) => {
  btn.addEventListener("click", () => {
    impostaFiltro(btn.dataset.categoria);
  });
});

function getDescrizione(contenuto) {
  if (contenuto.descrizione) return contenuto.descrizione;
  return `${contenuto.titolo} è un titolo del ${contenuto.anno} nel genere ${contenuto.categoria}. Valutato ${contenuto.valutazione}/10 dagli utenti di CinemaZone.`;
}

const overlay = document.getElementById("overlay");
const schedaTitolo = document.getElementById("scheda-titolo");
const schedaPoster = document.getElementById("scheda-poster");
const schedaAnno = document.getElementById("scheda-anno");
const schedaCategoria = document.getElementById("scheda-categoria");
const schedaValutazione = document.getElementById("scheda-valutazione");
const schedaDescrizione = document.getElementById("scheda-descrizione");
const schedaPreferito = document.getElementById("scheda-preferito");
const chiudiScheda = document.getElementById("chiudi-scheda");

let filmInScheda = null;

function aggiornaPulsanteScheda() {
  if (!filmInScheda) return;
  const inLista = eInPreferiti(filmInScheda.id);
  schedaPreferito.disabled = inLista;
  schedaPreferito.textContent = inLista ? "Già in lista" : "Aggiungi ai preferiti";
  schedaPreferito.classList.toggle("btn-preferito--in-lista", inLista);
}

function apriScheda(id) {
  const contenuto = catalogo.find((item) => item.id === id);
  if (!contenuto) return;

  filmInScheda = contenuto;
  schedaTitolo.textContent = contenuto.titolo;
  schedaPoster.src = contenuto.poster;
  schedaPoster.alt = `Poster di ${contenuto.titolo}`;
  schedaAnno.textContent = contenuto.anno;
  schedaCategoria.textContent = contenuto.categoria;
  schedaValutazione.textContent = `★ ${contenuto.valutazione}/10`;
  schedaDescrizione.textContent = getDescrizione(contenuto);
  aggiornaPulsanteScheda();

  overlay.classList.add("overlay--aperto");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function chiudiSchedaFilm() {
  overlay.classList.remove("overlay--aperto");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  filmInScheda = null;
}

chiudiScheda.addEventListener("click", chiudiSchedaFilm);

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) chiudiSchedaFilm();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("overlay--aperto")) {
    chiudiSchedaFilm();
  }
});

schedaPreferito.addEventListener("click", () => {
  if (filmInScheda) aggiungiPreferito(filmInScheda.id);
  aggiornaPulsanteScheda();
});

const schedaDialog = overlay.querySelector(".scheda");
schedaDialog.addEventListener("click", (e) => e.stopPropagation());

renderCatalogo();
renderListaPreferiti();
aggiornaContatore();
