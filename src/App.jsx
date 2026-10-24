import { useEffect, useMemo, useState } from "react";
import "./App.css";

const groups = [
  {
    id: "lilac",
    image: "/images/lilacdreamers.jpeg",
    featuredImage: "/images/sheila.jpeg",
    name: "LilacDreamers",
    category: "Dance cover",
    style: "K-pop · Coreografías",
    emoji: "✿",
    color: "lilac",
    featured: "Sheila",
    role: "Bailarina principal",
    description:
      "Un pequeño homenaje a una etapa especial. LilacDreamers representa los recuerdos, la expresión y esa forma tan bonita de conectar con el baile.",
    featuredBio:
      "El baile es una forma de sentirse libre y expresar lo que a veces no cabe en palabras. Este espacio guarda un pedacito de esa historia.",
    note: "Un recuerdo que sigue bailando.",
    presentationUrl:
      "https://youtube.com/shorts/DxPYYYRW1LQ?feature=share",
  },
  {
    id: "just-jerk",
    image: "/images/just-jerk.jpg",
    featuredImage: "/images/young-j.jpg",
    name: "Just Jerk",
    category: "Equipo profesional",
    style: "Hip-hop · Performance",
    emoji: "✦",
    color: "blue",
    featured: "Young J",
    role: "Líder y bailarín destacado",
    description:
      "Equipo surcoreano conocido por sus coreografías precisas, su energía y sus presentaciones grupales.",
    featuredBio:
      "Young J es conocido por su trabajo como líder y coreógrafo de Just Jerk.",
    note: "La precisión también puede tener personalidad.",
    presentationUrl: "https://youtu.be/rvbUwFgDlus",
  },
  {
    id: "1million",
    image: "/images/1million-sance-studio.jpg",
    featuredImage: "/images/lia-kim.jpg",
    name: "1MILLION Dance Studio",
    category: "Estudio de baile",
    style: "Urbano · Coreografía",
    emoji: "↗",
    color: "pink",
    featured: "Lia Kim",
    role: "Coreógrafa destacada",
    description:
      "Estudio surcoreano reconocido por sus coreografías y por compartir contenido de baile con público de todo el mundo.",
    featuredBio:
      "Lia Kim es una reconocida coreógrafa vinculada a 1MILLION Dance Studio.",
    note: "Cada movimiento cuenta una historia diferente.",
    presentationUrl: "https://youtu.be/EUmSur_n3rU",
  },
  {
    id: "jam-republic",
    image: "/images/jam-republic.jpg",
    featuredImage: "/images/kirsten-dodgen.jpg",
    name: "Jam Republic",
    category: "Colectivo de baile",
    style: "Urbano · Internacional",
    emoji: "✧",
    color: "pink",
    featured: "Kirsten Dodgen",
    role: "Bailarina destacada",
    description:
      "Colectivo internacional de bailarines conocido por su versatilidad, presencia escénica y fuerza grupal.",
    featuredBio:
      "Kirsten Dodgen es una bailarina reconocida por su participación en competencias internacionales.",
    note: "Diferentes estilos, una misma energía.",
    presentationUrl: "https://youtu.be/Nh6K29xTBIw?t=15",
  },
  {
    id: "bebe",
    image: "/images/bebe.jpg",
    featuredImage: "/images/bada-lee.jpg",
    name: "BEBE",
    category: "Equipo de baile",
    style: "Hip-hop · Coreografía",
    emoji: "✦",
    color: "blue",
    featured: "Bada Lee",
    role: "Líder y coreógrafa",
    description:
      "Equipo surcoreano conocido por su estilo urbano, sus movimientos potentes y sus coreografías.",
    featuredBio:
      "Bada Lee es conocida por su trabajo como líder y coreógrafa del equipo BEBE.",
    note: "La actitud se demuestra en la pista.",
    presentationUrl: "https://youtu.be/iuIzniSa1Hs",
  },
  {
    id: "la-chica",
    image: "/images/la-chica.jpg",
    featuredImage: "/images/rian.jpg",
    name: "La Chica",
    category: "Equipo de baile",
    style: "Jazz funk · Performance",
    emoji: "✧",
    color: "pink",
    featured: "Rian",
    role: "Bailarina y coreógrafa destacada",
    description:
      "Equipo surcoreano que destaca por su expresividad, musicalidad y trabajo coreográfico.",
    featuredBio:
      "Rian es una de las bailarinas y coreógrafas asociadas al equipo.",
    note: "Expresarse también es una forma de bailar.",
    presentationUrl: "https://youtu.be/CwnuZy3UU8U",
  },
  {
    id: "holybang",
    image: "/images/holybang.jpg",
    featuredImage: "/images/honey-j.jpg",
    name: "HolyBang",
    category: "Equipo de baile",
    style: "Hip-hop · Heels",
    emoji: "✦",
    color: "blue",
    featured: "Honey J",
    role: "Líder y coreógrafa",
    description:
      "Equipo surcoreano con una identidad marcada por el hip-hop, la actitud y la fuerza de sus presentaciones.",
    featuredBio:
      "Honey J es la líder y una de las figuras más reconocidas de HolyBang.",
    note: "Fuerza, confianza y presencia.",
    presentationUrl: "https://youtu.be/q6qQbLqw3dQ?t=13",
  },
  {
    id: "royal-family",
    image: "/images/royal-family.jpg",
    featuredImage: "/images/parris-goebel.jpg",
    name: "Royal Family",
    category: "Mega crew",
    style: "Hip-hop · Mega crew",
    emoji: "♛",
    color: "gold",
    featured: "Parris Goebel",
    role: "Fundadora y coreógrafa",
    description:
      "Crew de baile de Nueva Zelanda reconocida por sus coreografías grupales, formaciones y presencia escénica.",
    featuredBio:
      "Parris Goebel es la fundadora y una figura clave en la identidad coreográfica de Royal Family.",
    note: "Un escenario, muchas voces y una sola fuerza.",
    presentationUrl: "https://youtu.be/Xw6k6Ma0oqo?t=8",
  },
  {
    id: "shadows",
    name: "SHADOWS",
    category: "Dance cover",
    style: "K-pop · Performance intensa",
    emoji: "◈",
    color: "blue",
    featured: "Raven",
    role: "Líder de performance y bailarina principal",
    description:
      "SHADOWS es un grupo ficticio de dance cover que apuesta por las coreografías intensas, las expresiones marcadas y una estética oscura. Sus presentaciones combinan movimientos precisos con formaciones que buscan captar la atención desde el primer segundo.",
    featuredBio:
      "Raven es un personaje ficticio creado para el perfil de demostración de SHADOWS. Se caracteriza por su control corporal, su mirada escénica y su capacidad para destacar en los momentos más intensos de una coreografía.",
    note: "No necesitamos la luz para hacernos notar.",
  },
  {
    id: "ones",
    name: "ONE's",
    category: "Dance cover",
    style: "K-pop · Sincronización",
    emoji: "✧",
    color: "pink",
    featured: "Yuna",
    role: "Capitana y vocalista de apoyo",
    description:
      "ONE's es un grupo ficticio de dance cover que prioriza la sincronización, la limpieza de los movimientos y la conexión entre sus integrantes. Su propuesta combina coreografías detalladas con una imagen fresca y elegante.",
    featuredBio:
      "Yuna es una integrante ficticia que representa el equilibrio entre técnica y expresión. Dentro de ONE's, destaca por su disciplina durante los ensayos y por ayudar al equipo a mantener la coordinación en las formaciones grupales.",
    note: "Un solo equipo, miles de maneras de brillar.",
  },
  {
    id: "bazooga",
    name: "BAZOOGA",
    category: "Dance cover",
    style: "Hip-hop · Energía urbana",
    emoji: "✦",
    color: "blue",
    featured: "Jax",
    role: "Bailarín principal y especialista en freestyle",
    description:
      "BAZOOGA es un grupo ficticio de baile urbano con una identidad enérgica y desenfadada. Sus presentaciones se inspiran en el hip-hop y el freestyle, con cambios de ritmo, movimientos explosivos y una actitud que convierte cada escenario en su propio espacio.",
    featuredBio:
      "Jax es un bailarín ficticio creado para este perfil. Su especialidad es improvisar y adaptar sus movimientos a la música. En BAZOOGA representa la creatividad, la confianza y la libertad de probar algo diferente.",
    note: "Que hable el ritmo.",
  },
  {
    id: "destiny",
    name: "Destiny",
    category: "Dance cover",
    style: "K-pop · Expresión escénica",
    emoji: "✧",
    color: "pink",
    featured: "Mina",
    role: "Capitana y bailarina de formación",
    description:
      "Destiny es un grupo ficticio que combina coreografías de K-pop con una puesta en escena expresiva. Su identidad se basa en la constancia, el trabajo en equipo y la idea de que cada presentación es una oportunidad para superar su propio nivel.",
    featuredBio:
      "Mina es un personaje ficticio que representa la perseverancia del equipo. Como capitana, organiza los ensayos, acompaña a sus compañeros cuando una secuencia se complica y recuerda que mejorar también significa aprender de los errores.",
    note: "El talento empieza, pero la constancia nos lleva más lejos.",
  },
  {
    id: "diamond",
    name: "Diamond Crew",
    category: "Grupo de demostración",
    style: "Urbano · Freestyle",
    emoji: "◇",
    color: "blue",
    featured: "Alex",
    role: "Bailarín principal",
    description:
      "Diamond Crew es un grupo ficticio diseñado para las pruebas de DanceScore. Su estilo mezcla pasos urbanos, freestyle y secuencias grupales. El equipo destaca por su versatilidad y por adaptar sus presentaciones a distintos ritmos.",
    featuredBio:
      "Alex es un personaje ficticio que representa la creatividad de Diamond Crew. Su fuerte es improvisar, experimentar con nuevos movimientos y aportar ideas para que cada presentación tenga una identidad propia.",
    note: "La práctica convierte cada paso en algo especial.",
  },
  {
    id: "urban",
    name: "Urban Motion",
    category: "Grupo de demostración",
    style: "Hip-hop · Urbano",
    emoji: "↗",
    color: "pink",
    featured: "Sam",
    role: "Bailarina principal y coordinadora",
    description:
      "Urban Motion es un grupo ficticio inspirado en la cultura urbana. Sus coreografías combinan movimientos dinámicos, cambios de nivel y formaciones que resaltan la conexión entre sus bailarines. Su objetivo es transmitir energía y seguridad en el escenario.",
    featuredBio:
      "Sam es un personaje ficticio que representa la coordinación y la confianza del equipo. Ayuda a organizar las formaciones y busca que cada integrante tenga espacio para aportar su estilo sin perder la unidad del grupo.",
    note: "El movimiento nos conecta.",
  },
  {
    id: "neon",
    name: "Neon Pulse",
    category: "Grupo de demostración",
    style: "K-pop · Performance",
    emoji: "✦",
    color: "blue",
    featured: "Noa",
    role: "Bailarín principal y especialista en precisión",
    description:
      "Neon Pulse es un grupo ficticio de dance cover con una estética futurista y una propuesta basada en la precisión. Sus presentaciones combinan movimientos definidos, transiciones rápidas y una energía inspirada en las luces de la ciudad.",
    featuredBio:
      "Noa es un personaje ficticio que representa la precisión técnica de Neon Pulse. Disfruta perfeccionando los detalles de cada coreografía y trabajando las transiciones para que el resultado sea limpio y visualmente atractivo.",
    note: "Un pulso, una pista, infinitas posibilidades.",
  },
  {
    id: "shadow-steps",
    name: "Shadow Steps",
    category: "Grupo de demostración",
    style: "Contemporáneo · Urbano",
    emoji: "◈",
    color: "pink",
    featured: "Mika",
    role: "Bailarina principal y encargada de expresión",
    description:
      "Shadow Steps es un grupo ficticio que mezcla la fluidez de la danza contemporánea con la fuerza del estilo urbano. Sus coreografías exploran los contrastes, las pausas y los movimientos expresivos para construir presentaciones con una identidad propia.",
    featuredBio:
      "Mika es un personaje ficticio que representa el lado expresivo de Shadow Steps. Su especialidad es transmitir emociones a través del movimiento y aprovechar los silencios musicales para dar intención a cada secuencia.",
    note: "Hasta el silencio tiene movimiento.",
  },
];

const initialMatches = [
  {
    id: 1,
    first: "lilac",
    second: "bebe",
    firstScore: 87,
    secondScore: 91,
    event: "Showcase de demostración",
    date: "2026-10-10",
  },
  {
    id: 2,
    first: "royal-family",
    second: "just-jerk",
    firstScore: 94,
    secondScore: 89,
    event: "Dance Battle de demostración",
    date: "2026-10-12",
  },
  {
    id: 3,
    first: "1million",
    second: "jam-republic",
    firstScore: 90,
    secondScore: 90,
    event: "Showcase de demostración",
    date: "2026-10-15",
  },
  {
    id: 4,
    first: "shadows",
    second: "ones",
    firstScore: 92,
    secondScore: 86,
    event: "Shadow vs ONE's · Demo",
    date: "2026-10-16",
  },
  {
    id: 5,
    first: "bazooga",
    second: "destiny",
    firstScore: 88,
    secondScore: 91,
    event: "Urban Showcase · Demo",
    date: "2026-10-17",
  },
  {
    id: 6,
    first: "diamond",
    second: "urban",
    firstScore: 85,
    secondScore: 85,
    event: "Freestyle Session · Demo",
    date: "2026-10-18",
  },
  {
    id: 7,
    first: "neon",
    second: "shadow-steps",
    firstScore: 93,
    secondScore: 90,
    event: "Neon Dance Battle · Demo",
    date: "2026-10-18",
  },
  {
    id: 8,
    first: "shadows",
    second: "bazooga",
    firstScore: 89,
    secondScore: 94,
    event: "Urban Clash · Demo",
    date: "2026-10-19",
  },
  {
    id: 9,
    first: "ones",
    second: "destiny",
    firstScore: 90,
    secondScore: 90,
    event: "K-pop Showcase · Demo",
    date: "2026-10-19",
  },
  {
    id: 10,
    first: "diamond",
    second: "neon",
    firstScore: 91,
    secondScore: 87,
    event: "Stage Performance · Demo",
    date: "2026-10-20",
  },
  {
    id: 11,
    first: "urban",
    second: "shadow-steps",
    firstScore: 84,
    secondScore: 89,
    event: "Motion Challenge · Demo",
    date: "2026-10-20",
  },
  {
    id: 12,
    first: "lilac",
    second: "shadows",
    firstScore: 90,
    secondScore: 88,
    event: "Dance Cover Challenge · Demo",
    date: "2026-10-21",
  },
  {
    id: 13,
    first: "just-jerk",
    second: "bazooga",
    firstScore: 95,
    secondScore: 91,
    event: "Performance Battle · Demo",
    date: "2026-10-21",
  },
  {
    id: 14,
    first: "1million",
    second: "destiny",
    firstScore: 92,
    secondScore: 89,
    event: "Choreography Stage · Demo",
    date: "2026-10-22",
  },
  {
    id: 15,
    first: "jam-republic",
    second: "diamond",
    firstScore: 93,
    secondScore: 88,
    event: "International Crew Demo",
    date: "2026-10-22",
  },
  {
    id: 16,
    first: "bebe",
    second: "neon",
    firstScore: 90,
    secondScore: 92,
    event: "Performance League · Demo",
    date: "2026-10-23",
  },
  {
    id: 17,
    first: "la-chica",
    second: "urban",
    firstScore: 91,
    secondScore: 87,
    event: "Stage Expression · Demo",
    date: "2026-10-23",
  },
  {
    id: 18,
    first: "holybang",
    second: "shadow-steps",
    firstScore: 94,
    secondScore: 89,
    event: "Hip-hop Showcase · Demo",
    date: "2026-10-24",
  },
  {
    id: 19,
    first: "royal-family",
    second: "ones",
    firstScore: 96,
    secondScore: 91,
    event: "Mega Crew Demo",
    date: "2026-10-24",
  },
  {
    id: 20,
    first: "shadows",
    second: "destiny",
    firstScore: 87,
    secondScore: 90,
    event: "Final Round · Demo",
    date: "2026-10-24",
  },
];

function getGroup(id) {
  return groups.find((group) => group.id === id);
}

function getOutcome(match) {
  if (match.firstScore > match.secondScore) return match.first;
  if (match.secondScore > match.firstScore) return match.second;
  return null;
}

function formatDate(value) {
  if (!value) return "Sin fecha";

  const [year, month, day] = value.split("-").map(Number);

  if (!year || !month || !day) return value;

  return new Date(year, month - 1, day).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function typeLabel(group) {
  if (group.id === "lilac") return "A LITTLE TRIBUTE";
  return group.presentationUrl ? "REAL" : "MUESTRA";
}

function typeClass(group) {
  return group.presentationUrl ? "real-type" : "sample-type";
}

function Avatar({ group, className = "" }) {
  const [failed, setFailed] = useState(false);

  return (
    <span className={`avatar-circle ${group.color} ${className}`}>
      {group.image && !failed ? (
        <img
          src={group.image}
          alt={`Imagen de ${group.name}`}
          onError={() => setFailed(true)}
        />
      ) : (
        <span>{group.emoji}</span>
      )}
    </span>
  );
}

function ResultRow({ match, onOpenProfile }) {
  const first = getGroup(match.first);
  const second = getGroup(match.second);
  const winner = getOutcome(match);

  if (!first || !second) return null;

  return (
    <div className="result-row">
      <div className="result-date">
        <span>{match.event}</span>
        <small>{formatDate(match.date)}</small>
      </div>

      <button
        type="button"
        className={`result-team ${winner === match.first ? "winner" : ""}`}
        onClick={() => onOpenProfile(match.first)}
      >
        <Avatar group={first} className="result-avatar" />
        <span>{first.name}</span>
      </button>

      <div className="result-score">
        <strong className={winner === match.first ? "score-winner" : ""}>
          {match.firstScore}
        </strong>
        <span>–</span>
        <strong className={winner === match.second ? "score-winner" : ""}>
          {match.secondScore}
        </strong>
      </div>

      <button
        type="button"
        className={`result-team result-team-right ${
          winner === match.second ? "winner" : ""
        }`}
        onClick={() => onOpenProfile(match.second)}
      >
        <span>{second.name}</span>
        <Avatar group={second} className="result-avatar" />
      </button>
    </div>
  );
}

function FeaturedPhoto({ group, initial }) {
  const [failed, setFailed] = useState(false);

  if (group.featuredImage && !failed) {
    return (
      <img
        className="featured-dancer-photo"
        src={group.featuredImage}
        alt={`Fotografía de ${group.featured}`}
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <div className={`featured-fallback ${group.color}`}>
      {initial}
    </div>
  );
}

function App() {
  const [page, setPage] = useState("home");
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [matches, setMatches] = useState(initialMatches);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [form, setForm] = useState({
    first: "lilac",
    second: "bebe",
    firstScore: "",
    secondScore: "",
    event: "",
    date: new Date().toLocaleDateString("en-CA"),
  });
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.scrollTo === "function"
    ) {
      try {
        window.scrollTo({ top: 0 });
      } catch {
        // Entorno sin scroll.
      }
    }
  }, [page, selectedGroup]);

  const standings = useMemo(() => {
    const table = groups.map((group) => ({
      ...group,
      played: 0,
      wins: 0,
      draws: 0,
      losses: 0,
      scored: 0,
      conceded: 0,
      points: 0,
    }));

    matches.forEach((match) => {
      const first = table.find((group) => group.id === match.first);
      const second = table.find((group) => group.id === match.second);

      if (!first || !second) return;

      first.played += 1;
      second.played += 1;

      first.scored += match.firstScore;
      first.conceded += match.secondScore;

      second.scored += match.secondScore;
      second.conceded += match.firstScore;

      if (match.firstScore > match.secondScore) {
        first.wins += 1;
        first.points += 3;
        second.losses += 1;
      } else if (match.secondScore > match.firstScore) {
        second.wins += 1;
        second.points += 3;
        first.losses += 1;
      } else {
        first.draws += 1;
        second.draws += 1;
        first.points += 1;
        second.points += 1;
      }
    });

    return table
      .map((group) => ({
        ...group,
        difference: group.scored - group.conceded,
      }))
      .sort(
        (a, b) =>
          b.points - a.points ||
          b.difference - a.difference ||
          b.scored - a.scored ||
          a.name.localeCompare(b.name)
      );
  }, [matches]);

  const selected = getGroup(selectedGroup);

  const filteredMatches = matches.filter(
    (match) =>
      filter === "all" ||
      match.first === filter ||
      match.second === filter
  );

  const leader =
    standings[0] && standings[0].played > 0 ? standings[0] : null;

  function navigate(nextPage) {
    setPage(nextPage);
    setMessage(null);
  }

  function openProfile(groupId) {
    setSelectedGroup(groupId);
    setPage("profile");
  }

  function startCompetition(groupId) {
    setForm((current) => ({
      ...current,
      first: groupId,
      second:
        current.second === groupId
          ? groups.find((group) => group.id !== groupId).id
          : current.second,
    }));

    navigate("register");
  }

  function updateForm(event) {
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));
    setMessage(null);
  }

  function isValidDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;

    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(year, month - 1, day);

    return (
      date.getFullYear() === year &&
      date.getMonth() === month - 1 &&
      date.getDate() === day
    );
  }

  function submitMatch(event) {
    event.preventDefault();

    if (form.first === form.second) {
      setMessage({
        type: "error",
        text: "Elige dos grupos diferentes para la competencia.",
      });
      return;
    }

    const firstScore = Number(form.firstScore);
    const secondScore = Number(form.secondScore);

    if (
      form.firstScore.trim() === "" ||
      form.secondScore.trim() === "" ||
      !Number.isSafeInteger(firstScore) ||
      !Number.isSafeInteger(secondScore) ||
      firstScore < 0 ||
      secondScore < 0
    ) {
      setMessage({
        type: "error",
        text: "Las puntuaciones deben ser números enteros iguales o mayores que cero.",
      });
      return;
    }

    if (!form.event.trim()) {
      setMessage({
        type: "error",
        text: "Escribe el nombre de la competencia.",
      });
      return;
    }

    if (!isValidDate(form.date)) {
      setMessage({
        type: "error",
        text: "Selecciona una fecha válida para la competencia.",
      });
      return;
    }

    const newMatch = {
      id: Date.now(),
      first: form.first,
      second: form.second,
      firstScore,
      secondScore,
      event: form.event.trim(),
      date: form.date,
    };

    setMatches((current) => [newMatch, ...current]);

    setForm((current) => ({
      ...current,
      firstScore: "",
      secondScore: "",
      event: "",
    }));

    setMessage({
      type: "success",
      text: "Competencia registrada. La clasificación ya se actualizó.",
    });
  }

  function deleteMatch(matchId) {
    setMatches((current) =>
      current.filter((match) => match.id !== matchId)
    );
  }

  function renderHeader() {
    const items = [
      ["home", "Inicio"],
      ["groups", "Grupos"],
      ["register", "Competencias"],
      ["history", "Historial"],
      ["ranking", "Clasificación"],
    ];

    return (
      <header className="site-header">
        <button className="brand" onClick={() => navigate("home")}>
          <span className="brand-mark">
            d<span>.</span>
          </span>
          <span className="brand-name">
            <span>
              <em>Dance</em>Score
            </span>
            <small>DANCE / COMPETE / REPEAT</small>
          </span>
        </button>

        <nav className="main-nav">
          {items.map(([id, label]) => {
            const active =
              page === id || (page === "profile" && id === "groups");

            return (
              <button
                key={id}
                className={active ? "nav-link active" : "nav-link"}
                onClick={() => navigate(id)}
              >
                {label}
              </button>
            );
          })}
        </nav>

        <button
          className="header-cta"
          onClick={() => navigate("register")}
          aria-label="Registrar resultado"
        >
          Registrar resultado <span aria-hidden="true">+</span>
        </button>
      </header>
    );
  }

  function renderGroupCard(group, index) {
    const row = standings.find((item) => item.id === group.id);

    return (
      <article
        className={`group-card ${group.color}`}
        key={group.id}
        role="button"
        tabIndex={0}
        style={{ "--card-index": index }}
        onClick={() => openProfile(group.id)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openProfile(group.id);
          }
        }}
      >
        <div className="group-card-top">
          <span className="card-number">
            {String(groups.indexOf(group) + 1).padStart(2, "0")}
          </span>
          <span className={`group-type ${typeClass(group)}`}>
            {typeLabel(group)}
          </span>
        </div>

        <div className="group-card-main">
          <Avatar group={group} className="group-card-avatar" />
          <div className="group-card-info">
            <p className="eyebrow">{group.category}</p>
            <h3>{group.name}</h3>
            <p>{group.style}</p>
          </div>
        </div>

        <p className="group-card-description">{group.description}</p>

        <div className="group-card-bottom">
          <span>
            {row.played}{" "}
            {row.played === 1 ? "competencia" : "competencias"}
          </span>
          <span className="arrow-link" aria-hidden="true">
            ↗
          </span>
        </div>
      </article>
    );
  }

  function renderHome() {
    const withPresentation = groups.filter(
      (group) => group.presentationUrl
    ).length;

    const totalScore = matches.reduce(
      (total, match) => total + match.firstScore + match.secondScore,
      0
    );

    return (
      <>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow">
              <span className="status-dot" /> THE DANCE FLOOR IS YOURS
            </p>

            <h1>
              Every move
              <br />
              tells a <span>story.</span>
            </h1>

            <p>
              Un espacio para los grupos, las competencias y todo lo que pasa
              cuando la música empieza.
            </p>

            <div className="hero-actions">
              <button
                className="button-primary"
                onClick={() => navigate("groups")}
              >
                Explorar grupos <span>↗</span>
              </button>

              <button
                className="button-secondary"
                onClick={() => navigate("ranking")}
              >
                Ver clasificación
              </button>
            </div>

            <div className="hero-caption">
              <span className="caption-line" /> K-POP · URBAN · DANCE COVER
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-orbit orbit-three" />
            <div className="art-core">
              D<span>S</span>
            </div>
            <span className="art-star star-one">✳</span>
            <span className="art-star star-two">✦</span>
            <span className="art-label label-one">MOVE YOUR WAY</span>
            <span className="art-label label-two">FEEL THE BEAT</span>
            <span className="art-index">DS / 2026</span>
          </div>
        </section>

        <section className="stats-grid">
          <div className="stat-card">
            <span className="stat-label">GRUPOS</span>
            <strong>{groups.length}</strong>
            <span className="stat-foot">Perfiles disponibles</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">COMPETENCIAS</span>
            <strong>{matches.length}</strong>
            <span className="stat-foot">Resultados registrados</span>
          </div>

          <div className="stat-card">
            <span className="stat-label">PUNTUACIÓN TOTAL</span>
            <strong>{totalScore}</strong>
            <span className="stat-foot">
              Puntos anotados en las competencias
            </span>
          </div>

          <div className="stat-card stat-card-accent">
            <span className="stat-label">LÍDER ACTUAL</span>
            <strong className="stat-text">
              {leader ? leader.name : "—"}
            </strong>
            <span className="stat-foot">
              {leader ? `${leader.points} puntos` : "Aún sin resultados"}
            </span>
          </div>

          <div className="stat-card">
            <span className="stat-label">PRESENTACIONES</span>
            <strong>{withPresentation}</strong>
            <span className="stat-foot">Con enlace al video</span>
          </div>
        </section>

        <section className="section-block">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MEET THE CREWS</p>
              <h2>
                Grupos destacados<span>.</span>
              </h2>
            </div>

            <button
              className="text-link"
              onClick={() => navigate("groups")}
            >
              Ver todos <span>↗</span>
            </button>
          </div>

          <div className="groups-grid">
            {groups
              .slice(0, 4)
              .map((group, index) => renderGroupCard(group, index))}
          </div>
        </section>

        <section className="section-block recent-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">LATEST RESULTS</p>
              <h2>
                En la pista<span>.</span>
              </h2>
            </div>

            <button
              className="text-link"
              onClick={() => navigate("history")}
            >
              Ver historial <span>↗</span>
            </button>
          </div>

          {matches.length > 0 ? (
            <div className="results-list">
              {matches.slice(0, 3).map((match) => (
                <ResultRow
                  key={match.id}
                  match={match}
                  onOpenProfile={openProfile}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>✦</span>
              <h3>Todavía no hay resultados</h3>
              <p>¡Registra la primera competencia!</p>
            </div>
          )}

          <p className="demo-note">
            Los resultados iniciales son de demostración, no corresponden a
            competencias oficiales. Cada competencia que registres actualiza
            la clasificación automáticamente.
          </p>
        </section>
      </>
    );
  }

  function renderGroups() {
    const query = normalizeText(search.trim());

    const visible = groups.filter(
      (group) =>
        !query ||
        normalizeText(
          `${group.name} ${group.category} ${group.style} ${group.description}`
        ).includes(query)
    );

    return (
      <section className="page-section">
        <div className="page-intro">
          <p className="eyebrow">THE LINEUP</p>
          <h1>
            Conoce a los <span>grupos.</span>
          </h1>
          <p>
            Entra a cada perfil para conocer su estilo, su figura destacada y
            sus resultados.
          </p>
        </div>

        <div className="directory-tools">
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Buscar grupo, categoría o estilo"
              aria-label="Buscar grupo"
            />
          </label>

          <span className="directory-count">
            {visible.length} de {groups.length} grupos
          </span>
        </div>

        {visible.length > 0 ? (
          <div className="groups-grid directory-grid">
            {visible.map((group, index) => renderGroupCard(group, index))}
          </div>
        ) : (
          <div className="empty-state">
            <span>✧</span>
            <h3>No encontramos ese grupo</h3>
            <p>Prueba con otro nombre, categoría o estilo.</p>
          </div>
        )}
      </section>
    );
  }

  function renderProfile() {
    if (!selected) {
      return (
        <section className="page-section">
          <div className="empty-state">
            <span>✧</span>
            <h3>No se encontró ese perfil</h3>
            <p>Vuelve al listado y elige un grupo.</p>
            <button
              className="button-primary"
              onClick={() => navigate("groups")}
            >
              Volver a grupos
            </button>
          </div>
        </section>
      );
    }

    const groupMatches = matches.filter(
      (match) =>
        match.first === selected.id || match.second === selected.id
    );

    const stats = standings.find((row) => row.id === selected.id);
    const position =
      standings.findIndex((row) => row.id === selected.id) + 1;

    const hasFeaturedName =
      selected.featured && selected.featured !== "Por definir";

    const initial =
      selected.id === "lilac"
        ? "S."
        : hasFeaturedName
          ? selected.featured.charAt(0)
          : selected.emoji;

    return (
      <section className="page-section">
        <button
          className="back-link"
          onClick={() => navigate("groups")}
        >
          ← Volver a grupos
        </button>

        <div className="profile-heading">
          <Avatar group={selected} className="profile-logo" />

          <div className="profile-heading-text">
            <div className="profile-badges">
              <span className={`group-type ${typeClass(selected)}`}>
                {typeLabel(selected)}
              </span>
              <span className="eyebrow">{selected.category}</span>
            </div>

            <h1>
              {selected.name}
              <span>.</span>
            </h1>
            <p>{selected.style}</p>
          </div>
        </div>

        <div className="profile-layout">
          <div className="profile-main">
            <section className="profile-panel">
              <p className="eyebrow">ABOUT THE CREW</p>
              <h2>
                Sobre el grupo<span>.</span>
              </h2>
              <p className="profile-description">{selected.description}</p>

              {selected.note && (
                <blockquote>“{selected.note}”</blockquote>
              )}

              {selected.presentationUrl ? (
                <a
                  className="demo-link"
                  href={selected.presentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="play-icon" aria-hidden="true">
                    ▶
                  </span>
                  Ver presentación
                  <span className="external-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ) : (
                <p className="sample-info">
                  Este es un perfil de demostración. No tiene una presentación
                  vinculada todavía.
                </p>
              )}
            </section>

            <section className="featured-panel">
              <div className="featured-photo-wrap">
                <FeaturedPhoto group={selected} initial={initial} />
              </div>

              <div className="featured-info">
                <p className="eyebrow">THE FACE BEHIND THE MOVES</p>
                <h2>{selected.featured}</h2>
                <p className="featured-role">{selected.role}</p>
                <p>{selected.featuredBio}</p>
              </div>
            </section>

            <section className="profile-panel profile-history">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">MATCH HISTORY</p>
                  <h2>
                    Sus resultados<span>.</span>
                  </h2>
                </div>
              </div>

              {groupMatches.length > 0 ? (
                <div className="results-list">
                  {groupMatches.map((match) => (
                    <ResultRow
                      key={match.id}
                      match={match}
                      onOpenProfile={openProfile}
                    />
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <span>✦</span>
                  <h3>Sin competencias todavía</h3>
                  <p>
                    Este grupo todavía no tiene competencias registradas.
                  </p>
                </div>
              )}
            </section>
          </div>

          <aside className="profile-sidebar">
            <section className="profile-stat-panel">
              <p className="eyebrow">POSICIÓN EN LA TABLA</p>
              <strong className="profile-rank">
                #{String(position).padStart(2, "0")}
              </strong>
              <p className="muted-text">de {groups.length} grupos</p>

              <div className="mini-divider" />

              <div className="sidebar-stat">
                <span>Competencias</span>
                <strong>{stats.played}</strong>
              </div>
              <div className="sidebar-stat">
                <span>Victorias</span>
                <strong>{stats.wins}</strong>
              </div>
              <div className="sidebar-stat">
                <span>Empates</span>
                <strong>{stats.draws}</strong>
              </div>
              <div className="sidebar-stat">
                <span>Derrotas</span>
                <strong>{stats.losses}</strong>
              </div>
              <div className="sidebar-stat">
                <span>Puntos de tabla</span>
                <strong>{stats.points}</strong>
              </div>
              <div className="sidebar-stat">
                <span>Puntos anotados</span>
                <strong>{stats.scored}</strong>
              </div>
              <div className="sidebar-stat">
                <span>Puntos recibidos</span>
                <strong>{stats.conceded}</strong>
              </div>
              <div className="sidebar-stat">
                <span>Diferencia de puntuación</span>
                <strong>
                  {stats.difference > 0 ? "+" : ""}
                  {stats.difference}
                </strong>
              </div>
            </section>

            <section className="profile-stat-panel">
              <p className="eyebrow">NEXT BATTLE</p>
              <p className="sidebar-description">
                Registra un nuevo enfrentamiento de este grupo y mira cómo
                cambia la tabla.
              </p>

              <button
                className="button-primary full-button"
                onClick={() => startCompetition(selected.id)}
              >
                Registrar competencia <span>+</span>
              </button>

              <button
                className="button-secondary full-button"
                onClick={() => navigate("ranking")}
              >
                Ver clasificación
              </button>
            </section>
          </aside>
        </div>
      </section>
    );
  }

  function renderRegister() {
    const firstGroup = getGroup(form.first);
    const secondGroup = getGroup(form.second);

    return (
      <section className="page-section">
        <div className="page-intro">
          <p className="eyebrow">NEW BATTLE</p>
          <h1>
            Registrar una <span>competencia.</span>
          </h1>
          <p>
            Introduce los grupos y sus puntuaciones. La clasificación se
            actualizará automáticamente.
          </p>
        </div>

        <form className="competition-form" onSubmit={submitMatch}>
          <div className="form-heading">
            <p className="eyebrow">MATCH SETUP</p>
            <h2>Nuevo enfrentamiento</h2>
          </div>

          <div className="matchup-grid">
            <div className="team-select-card">
              <label htmlFor="first">
                Grupo 01
                <select
                  id="first"
                  name="first"
                  value={form.first}
                  onChange={updateForm}
                >
                  {groups.map((group) => (
                    <option value={group.id} key={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </label>

              <div className="selected-team">
                <Avatar
                  group={firstGroup}
                  className="selected-team-avatar"
                />
                <strong>{firstGroup.name}</strong>
              </div>

              <label className="score-label" htmlFor="firstScore">
                Puntuación
              </label>
              <input
                id="firstScore"
                type="number"
                min="0"
                step="1"
                name="firstScore"
                value={form.firstScore}
                onChange={updateForm}
                placeholder="0"
                required
              />
            </div>

            <div className="versus-divider" aria-hidden="true">
              <div />
              <span>VS</span>
              <div />
            </div>

            <div className="team-select-card">
              <label htmlFor="second">
                Grupo 02
                <select
                  id="second"
                  name="second"
                  value={form.second}
                  onChange={updateForm}
                >
                  {groups.map((group) => (
                    <option value={group.id} key={group.id}>
                      {group.name}
                    </option>
                  ))}
                </select>
              </label>

              <div className="selected-team">
                <Avatar
                  group={secondGroup}
                  className="selected-team-avatar"
                />
                <strong>{secondGroup.name}</strong>
              </div>

              <label className="score-label" htmlFor="secondScore">
                Puntuación
              </label>
              <input
                id="secondScore"
                type="number"
                min="0"
                step="1"
                name="secondScore"
                value={form.secondScore}
                onChange={updateForm}
                placeholder="0"
                required
              />
            </div>
          </div>

          <div className="form-details">
            <div className="form-fields">
              <label htmlFor="event">
                Nombre de la competencia
                <input
                  id="event"
                  name="event"
                  value={form.event}
                  onChange={updateForm}
                  placeholder="Ej. K-pop Cover Challenge"
                  required
                />
              </label>

              <label htmlFor="date">
                Fecha
                <input
                  id="date"
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={updateForm}
                  required
                />
              </label>
            </div>

            {message && (
              <p
                className={message.type === "error" ? "notice error" : "notice"}
                role="status"
              >
                {message.text}
              </p>
            )}

            <div className="form-footer">
              <p>
                Victoria: 3 puntos · Empate: 1 punto para cada grupo ·
                Derrota: 0 puntos.
              </p>
              <button className="button-primary" type="submit">
                Guardar resultado <span>↗</span>
              </button>
            </div>
          </div>
        </form>
      </section>
    );
  }

  function renderHistory() {
    return (
      <section className="page-section">
        <div className="page-intro">
          <p className="eyebrow">THE ARCHIVE</p>
          <h1>
            Historial de <span>competencias.</span>
          </h1>
          <p>Todos los resultados registrados en DanceScore.</p>
        </div>

        <div className="history-toolbar">
          <div className="filter-tabs" role="group" aria-label="Filtrar por grupo">
            <button
              type="button"
              className={filter === "all" ? "filter-tab active" : "filter-tab"}
              onClick={() => setFilter("all")}
            >
              Todos
            </button>

            {groups.map((group) => (
              <button
                type="button"
                key={group.id}
                className={
                  filter === group.id ? "filter-tab active" : "filter-tab"
                }
                onClick={() => setFilter(group.id)}
              >
                {group.name}
              </button>
            ))}
          </div>
        </div>

        <p className="directory-count">
          {filteredMatches.length}{" "}
          {filteredMatches.length === 1 ? "resultado" : "resultados"}
        </p>

        {filteredMatches.length > 0 ? (
          <div className="history-list">
            {filteredMatches.map((match) => (
              <div className="history-item" key={match.id}>
                <ResultRow
                  match={match}
                  onOpenProfile={openProfile}
                />
                <button
                  type="button"
                  className="delete-result"
                  onClick={() => deleteMatch(match.id)}
                  aria-label={`Eliminar ${match.event}`}
                  title="Eliminar resultado"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>✦</span>
            <h3>Sin resultados</h3>
            <p>No hay resultados para este filtro.</p>
          </div>
        )}

        <div className="history-footer">
          <p>
            Eliminar un resultado actualiza la clasificación y las
            estadísticas de cada perfil.
          </p>
          <button
            className="button-primary"
            onClick={() => navigate("register")}
          >
            Registrar competencia <span>+</span>
          </button>
        </div>
      </section>
    );
  }

  function renderRanking() {
    return (
      <section className="page-section">
        <div className="page-intro">
          <p className="eyebrow">THE LEADERBOARD</p>
          <h1>
            La clasificación<span>.</span>
          </h1>
          <p>
            Los puntos se calculan a partir de las competencias registradas:
            victoria, 3 puntos; empate, 1 punto; derrota, 0 puntos.
          </p>
        </div>

        <div className="ranking-legend">
          <span>
            <i className="legend-dot first" /> Líder de la tabla
          </span>
          <span>
            <i className="legend-dot" /> Desempate: diferencia, puntos
            anotados y nombre
          </span>
        </div>

        <div className="ranking-table-wrap">
          <table className="ranking-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Grupo</th>
                <th>Comp.</th>
                <th>V</th>
                <th>E</th>
                <th>D</th>
                <th>Dif.</th>
                <th>Pts.</th>
              </tr>
            </thead>

            <tbody>
              {standings.map((group, index) => (
                <tr
                  key={group.id}
                  className={
                    index === 0 && group.played > 0 ? "top-ranking" : ""
                  }
                >
                  <td
                    className={
                      index === 0 && group.played > 0
                        ? "rank-number rank-top"
                        : "rank-number"
                    }
                  >
                    {String(index + 1).padStart(2, "0")}
                  </td>

                  <td>
                    <button
                      className="ranking-group"
                      onClick={() => openProfile(group.id)}
                    >
                      <Avatar
                        group={group}
                        className="ranking-avatar"
                      />
                      <span>
                        <strong>{group.name}</strong>
                        <small>{group.style}</small>
                      </span>
                    </button>
                  </td>

                  <td>{group.played}</td>
                  <td>{group.wins}</td>
                  <td>{group.draws}</td>
                  <td>{group.losses}</td>
                  <td>
                    {group.difference > 0 ? "+" : ""}
                    {group.difference}
                  </td>
                  <td className="points-value">{group.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="demo-note">
          Comp. = competencias · V = victorias · E = empates · D = derrotas ·
          Dif. = puntuación a favor menos puntuación en contra. Los resultados
          de demostración no son resultados oficiales.
        </p>
      </section>
    );
  }

  return (
    <div className="app-shell">
      {renderHeader()}

      <main className="main-content">
        {page === "home" && renderHome()}
        {page === "groups" && renderGroups()}
        {page === "profile" && renderProfile()}
        {page === "register" && renderRegister()}
        {page === "history" && renderHistory()}
        {page === "ranking" && renderRanking()}
      </main>

      <footer className="site-footer">
        <button
          className="brand footer-brand"
          onClick={() => navigate("home")}
        >
          DANCESCORE <span>♡</span>
        </button>
        <p>Hecho para quienes sienten la música.</p>
        <span className="footer-year">PERSONAL PROJECT · 2026</span>
      </footer>
    </div>
  );
}

export default App;