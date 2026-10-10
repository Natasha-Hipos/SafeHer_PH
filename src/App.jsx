import { useEffect, useState } from "react";

const navigation = [
  ["The facts", "#facts"],
  ["Forms", "#forms"],
  ["Laws", "#laws"],
  ["Myths", "#myths"],
  ["Take action", "#act"],
  ["Get help", "#help"],
  ["References", "#refs"],
];

const dotOptions = [
  {
    label: "Partner violence",
    number: 17.5,
    text: "About 17 to 18 have experienced physical, sexual or emotional violence from an intimate partner.",
  },
  {
    label: "Physical or sexual",
    number: 14,
    text: "About 14 have experienced physical or sexual violence in their lifetime.",
  },
];

const chartData = {
  total: [13830, 11307, 13213],
  ra: [9385, 7161, 7764],
  rape: [2311, 2103, 2644],
};

const chartLabels = {
  total: "All VAW cases",
  ra: "RA 9262 cases",
  rape: "Rape",
};

const forms = [
  [
    "Physical violence",
    "Acts that cause bodily harm, such as hitting, slapping, choking or threatening with a weapon. [5]",
  ],
  [
    "Sexual violence",
    "Sexual acts committed or forced against a woman or her child, including rape and sexual coercion by a partner. [5]",
  ],
  [
    "Psychological violence",
    "Acts or omissions that cause or are likely to cause mental or emotional suffering, such as threats, stalking, humiliation, controlling behavior. [5]",
  ],
  [
    "Economic abuse",
    "Controlling a woman's money or preventing her from working, such as withholding financial support or taking her earnings. RA 9262 lists economic abuse as a form of violence. [5]",
  ],
  [
    "Online and public harassment",
    "Catcalling, unwanted sexual remarks, stalking and online sexual harassment in streets, workplaces, schools and online fall under the Safe Spaces Act. [7]",
  ],
];

const laws = [
  [
    "RA 9262 (2004)",
    "Anti-Violence Against Women and Their Children Act. Covers abuse by a husband, ex-husband, live-in or former live-in partner, or a person with whom the woman has or had a dating or sexual relationship. Allows protection orders. [5]",
  ],
  [
    "RA 9710 (2009)",
    "Magna Carta of Women. The country's comprehensive women's rights law, aligned with CEDAW. [8]",
  ],
  [
    "RA 8353 (1997)",
    "Anti-Rape Law. Reclassified rape as a crime against persons, not just against chastity. [9]",
  ],
  [
    "RA 7877 (1995)",
    "Anti-Sexual Harassment Act. Covers work, education and training settings. [10]",
  ],
  [
    "RA 11313 (2019)",
    "Safe Spaces Act. Penalizes gender-based sexual harassment in streets, public spaces, online, workplaces and schools. [7]",
  ],
  [
    "RA 11596 (2021)",
    "Prohibits child marriage and penalizes those who facilitate it. [11]",
  ],
];

const myths = [
  [
    'Myth: "It\'s a family problem. Outsiders should not get involved."',
    "Fact: RA 9262 makes violence against a spouse or partner a crime, not just a private dispute. Anyone can report. [5]",
  ],
  [
    'Myth: "Abuse is only real if there are bruises."',
    "Fact: The law covers psychological and economic abuse too. Harm does not have to leave a mark to be a crime. [5]",
  ],
  [
    "Myth: Only poor or uneducated women experience it.",
    "Fact: Violence has been recorded in every region of the country, as the regional figures above show. No woman is automatically safe or immune. [4]",
  ],
  [
    'Myth: "If it were that bad, she would leave."',
    "Fact: Leaving can be unsafe or impossible because of fear, money, children or threats. Support and protection orders exist for this reason. [5]",
  ],
  [
    "Myth: Catcalling is just a compliment.",
    "Fact: Unwanted sexual remarks in public are punishable under the Safe Spaces Act. [7]",
  ],
  [
    "Myth: Men cannot help end this.",
    "Fact: Most violence is committed by men, so men's choices matter. Calling out sexist jokes and respecting consent are real action.",
  ],
];

const commitments = [
  "I will believe and listen to survivors without blaming them.",
  "I will not laugh at or share sexist jokes, and I will speak up when I hear them.",
  "I will learn the signs of abuse and how to report it.",
  "I will save the hotline numbers on this page in my phone.",
  "I will respect consent in my relationships, online and offline.",
  "I will share this website with at least one friend or family member.",
];

const references = [
  "Philippine Statistics Authority. (2024). Violence Against Women: Fact Sheet on Women and Men in the Philippines (2022 NDHS; PNP CIRAS data as of February 2024). psa.gov.ph",
  'Philippine Statistics Authority & ICF. (2023). 2022 Philippine National Demographic and Health Survey; as cited by Philippine Commission on Women, "Violence Against Women." pcw.gov.ph',
  "UN Women. Facts and figures: Ending violence against women. unwomen.org; Philippine Commission on Women. (2025). 18-Day Campaign to End VAW.",
  "Philippine Information Agency. (2023, July 14). Declining cases of violence against women, no reason to drop guards down: PCW (2022 NDHS regional data). pia.gov.ph",
  "Republic Act No. 9262, Anti-Violence Against Women and Their Children Act of 2004. Official Gazette of the Philippines.",
  "The DHS Program. Intimate Partner Violence Experiences of Filipino Women: Evidence from the Philippines (Working Paper 205, 2022 NDHS). dhsprogram.com",
  "Republic Act No. 11313, Safe Spaces Act (2019). Official Gazette of the Philippines.",
  "Republic Act No. 9710, Magna Carta of Women (2009). Official Gazette of the Philippines.",
  "Republic Act No. 8353, Anti-Rape Law of 1997. Official Gazette of the Philippines.",
  "Republic Act No. 7877, Anti-Sexual Harassment Act of 1995. Official Gazette of the Philippines.",
  "Republic Act No. 11596, An Act Prohibiting the Practice of Child Marriage (2021). Official Gazette of the Philippines.",
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("safeher-theme") || "light"
  );
  const [selectedDot, setSelectedDot] = useState(dotOptions[0]);
  const [chartType, setChartType] = useState("total");
  const [checkedItems, setCheckedItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("hp_commit") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("safeher-theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("hp_commit", JSON.stringify(checkedItems));
  }, [checkedItems]);

  function toggleCommitment(index) {
    setCheckedItems((current) => {
      const updated = [...current];
      updated[index] = !updated[index];
      return updated;
    });
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="nav">
        <div className="wrap">
          <a
            className="brand"
            href="#top"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <img
              className="brand-logo"
              src="/SafeHerPH%20logo.png"
              alt="SafeHer PH logo"
              style={{
                width: "38px",
                height: "38px",
                objectFit: "contain",
                display: "block",
                flexShrink: 0,
              }}
            />
            <span>SafeHer PH</span>
          </a>

          <div className="navr">
            <nav aria-label="Main">
              <ul id="menu" className={menuOpen ? "open" : ""}>
                {navigation.map(([label, link]) => (
                  <li key={link}>
                    <a
                      href={link}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              className="theme"
              aria-label="Toggle dark mode"
              onClick={() =>
                setTheme((current) =>
                  current === "dark" ? "light" : "dark"
                )
              }
            >
              Theme
            </button>

            <button
              className="menu"
              aria-expanded={menuOpen}
              aria-controls="menu"
              onClick={() => setMenuOpen((current) => !current)}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div>
              <h1>Violence against women is not a private matter.</h1>

              <p>
                SafeHer PH looks at one issue: violence against women in the
                Philippines. See who it affects, what the law says, and what
                each of us can do about it.
              </p>

              <p>
                <a className="btn" href="#facts">
                  See the numbers
                </a>{" "}
                <a className="btn help" href="#help">
                  Get help now
                </a>
              </p>
            </div>

            <div
              className="dotpanel"
              role="group"
              aria-label="Interactive: 100 Filipino women"
            >
              <p style={{ margin: "0 0 6px", fontWeight: 600 }}>
                If we picture 100 Filipino women aged 15 to 49…
              </p>

              <div className="dots" aria-hidden="true">
                {Array.from({ length: 100 }, (_, index) => (
                  <i
                    key={index}
                    className={
                      index < Math.round(selectedDot.number) ? "on" : ""
                    }
                  />
                ))}
              </div>

              <div className="seg">
                {dotOptions.map((option) => (
                  <button
                    key={option.label}
                    aria-pressed={selectedDot.label === option.label}
                    onClick={() => setSelectedDot(option)}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <p className="cap" aria-live="polite">
                {selectedDot.text}
              </p>

              <p className="src">
                Source: PSA, 2022 NDHS [1][2]. Dots are rounded.
              </p>
            </div>
          </div>
        </section>

        <section id="facts">
          <div className="wrap">
            <h2>The facts, with sources</h2>

            <p className="lead">
              The central issue of this site is violence against women (VAW).
              The Philippine Commission on Women defines it as any act of
              gender-based violence that results in physical, sexual or
              psychological harm to women.
            </p>

            <div className="cards" style={{ margin: "28px 0" }}>
              <div className="card">
                <div className="big">17.5%</div>
                Of Filipino women aged 15 to 49 experienced physical, sexual or
                emotional violence from an intimate partner in 2022. [2]
              </div>

              <div className="card">
                <div className="big">1 in 3</div>
                Women worldwide, about 736 million, have faced physical and/or
                sexual violence in their lifetime. [3]
              </div>

              <div className="card">
                <div className="big">13,213</div>
                Violence against women cases reported to the Philippine
                National Police in 2023. [1]
              </div>
            </div>

            <h3>Cases reported to the police</h3>

            <div
              className="tabs"
              role="tablist"
              aria-label="Choose case type"
            >
              {Object.keys(chartData).map((key) => (
                <button
                  key={key}
                  role="tab"
                  aria-selected={chartType === key}
                  onClick={() => setChartType(key)}
                >
                  {chartLabels[key]}
                </button>
              ))}
            </div>

            <div className="panel">
              <BarChart values={chartData[chartType]} />

              <p className="src" style={{ margin: "8px 0 0" }}>
                Source: PNP CIRAS data as of February 2024, in PSA fact sheet
                [1]. Reported cases show only what reaches authorities, so real
                numbers are likely higher.
              </p>
            </div>

            <p className="lead" style={{ marginTop: 20 }}>
              Rates also differ by region. In 2022, Bicol had the highest share
              at 26.5%, followed by Ilocos at 25% and MIMAROPA at 23.7%. [4]
            </p>
          </div>
        </section>

        <section id="forms" style={{ background: "var(--surface)" }}>
          <div className="wrap light">
            <h2>Violence has many forms</h2>

            <p className="lead">
              RA 9262 recognizes that abuse is not only physical. Tap each form
              to learn more.
            </p>

            <div style={{ marginTop: 20 }}>
              {forms.map(([title, description]) => (
                <details key={title}>
                  <summary>{title}</summary>
                  <div>{description}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="laws">
          <div className="wrap">
            <h2>Laws that protect women</h2>

            <p className="lead">
              Know your rights. These Philippine laws address violence and
              discrimination.
            </p>

            <div className="cards" style={{ marginTop: 24 }}>
              {laws.map(([title, description]) => (
                <div className="card" key={title}>
                  <h3>{title}</h3>
                  {description}
                </div>
              ))}
            </div>

            <h3 style={{ marginTop: 32 }}>
              What is a protection order?
            </h3>

            <p className="lead">
              Under RA 9262, a survivor can ask for a Barangay Protection Order
              (BPO) from the barangay, or a Temporary or Permanent Protection
              Order from a court. These orders can direct the abuser to stay
              away from the survivor. Ask the barangay, a Women and Children
              Protection Desk, or a lawyer for the current process. [5]
            </p>
          </div>
        </section>

        <section id="myths" style={{ background: "var(--surface)" }}>
          <div className="wrap">
            <h2>Myth or fact?</h2>

            <p className="lead">Tap a card to reveal the answer.</p>

            <Myths />
          </div>
        </section>

        <section id="act">
          <div className="wrap">
            <h2>What you can do</h2>

            <p className="lead">
              Awareness only matters if it leads to action. Tick the commitments
              you will make. Your choices are saved on this device only.
            </p>

            <Commitments
              checkedItems={checkedItems}
              onToggle={toggleCommitment}
            />
          </div>
        </section>

        <section id="help" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="help-box">
              <h2>Need help or know someone who does?</h2>

              <p>
                If you are in immediate danger, call the national emergency
                number.
              </p>

              <span className="tel">
                <a href="tel:911">911</a>
              </span>

              <p style={{ marginTop: 14 }}>
                You can also reach the Philippine National Police Women and
                Children Protection Center hotline at{" "}
                <a href="tel:177">177</a>, or go to the barangay VAW desk or
                the nearest police Women and Children Protection Desk. Hotline
                numbers can change, so please confirm them with the Philippine
                Commission on Women (
                <a
                  href="https://pcw.gov.ph"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  pcw.gov.ph
                </a>
                ).
              </p>
            </div>
          </div>
        </section>

        <section id="team" style={{ background: "var(--surface)" }}>
          <div className="wrap team">
            <h2>About this project</h2>

            <p className="lead">
              Made for Gender and Society. Replace the placeholders below with
              your group's names and roles.
            </p>

            <div className="cards" style={{ marginTop: 20 }}>
              <div className="card">
                <h3>[Member 1 name]</h3>
                [Role, e.g. Researcher]
              </div>

              <div className="card">
                <h3>[Member 2 name]</h3>
                [Role, e.g. Designer]
              </div>

              <div className="card">
                <h3>[Member 3 name]</h3>
                [Role, e.g. Developer]
              </div>

              <div className="card">
                <h3>[Member 4 name]</h3>
                [Role, optional]
              </div>
            </div>
          </div>
        </section>

        <section id="refs">
          <div className="wrap">
            <h2>References</h2>

            <ol className="refs">
              {references.map((reference, index) => (
                <li key={index}>{reference}</li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          Educational project for Gender and Society. Statistics are from the
          cited sources and may be updated by those agencies. Violence is never
          the survivor's fault.
        </div>
      </footer>
    </>
  );
}

function BarChart({ values }) {
  const years = [2021, 2022, 2023];
  const max = Math.max(...values) * 1.15;

  return (
    <svg
      id="chart"
      viewBox="0 0 400 230"
      width="100%"
      role="img"
      aria-label={`Bar chart of reported cases: ${years
        .map((year, index) => `${year}: ${values[index]}`)
        .join(", ")}`}
    >
      {values.map((value, index) => {
        const height = (value / max) * 170;
        const x = 50 + index * 110;

        return (
          <g key={years[index]}>
            <rect
              className="bar"
              x={x}
              y={200 - height}
              width="80"
              height={height}
              rx="6"
            />

            <text
              x={x + 40}
              y={192 - height}
              textAnchor="middle"
            >
              {value.toLocaleString("en-US")}
            </text>

            <text
              x={x + 40}
              y="222"
              textAnchor="middle"
            >
              {years[index]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function Myths() {
  const [openMyth, setOpenMyth] = useState(null);

  return (
    <div className="cards" style={{ marginTop: 20 }}>
      {myths.map(([myth, fact], index) => {
        const isOpen = openMyth === index;

        return (
          <button
            className={`flip ${isOpen ? "show" : ""}`}
            key={myth}
            aria-expanded={isOpen}
            onClick={() =>
              setOpenMyth(isOpen ? null : index)
            }
          >
            <b>{isOpen ? fact : myth}</b>

            {!isOpen && (
              <span className="src">
                Tap to reveal the fact
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

function Commitments({ checkedItems, onToggle }) {
  const completed = checkedItems.filter(Boolean).length;
  const percentage = (completed / commitments.length) * 100;

  return (
    <div className="panel" style={{ marginTop: 20 }}>
      <div className="checks">
        {commitments.map((text, index) => (
          <label key={text}>
            <input
              type="checkbox"
              checked={Boolean(checkedItems[index])}
              onChange={() => onToggle(index)}
            />
            {text}
          </label>
        ))}
      </div>

      <div className="meter" aria-hidden="true">
        <div style={{ width: `${percentage}%` }} />
      </div>

      <p aria-live="polite" style={{ margin: 0, fontWeight: 600 }}>
        {completed} of {commitments.length} commitments made
        {completed === commitments.length &&
          ". Thank you for taking action."}
      </p>
    </div>
  );
}

export default App;