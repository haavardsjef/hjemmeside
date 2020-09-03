import React from "react";
import Project from "./../project";
import "./style.css";

import nba from "./../../assets/nba.png";
import oweIt from "./../../assets/owe-it.png";

export default function Projects() {
  return (
    <div className="projects">
      <Project
        title="Owe-it.com"
        description="Et prosjekt jeg og 2 venner jobber med, min hovedoppgave er utvikling
         av frontend. Vi har bygget en webtjeneste som systematiserer og visualiserer en 
         gruppes fordeling av «straffeprikker». Vi benytter oss av React og Django. Merk 
         at sidens design for øyeblikket gjennomgår store endringer."
        image={oweIt}
        technologies="React, Django, PostgresSQL"
      />
      <Project
        title="NBA Stats app"
        description="En native app for å raskt sjekke statistikker på NBA spillere,
        benytter seg av det åpne balldontlie API'et. Applikasjonen er bygget
        med Electron og React, og er tilgjengelig for Windows, Mac og Linux.
        Prosjektet er bygget hovedsakelig for personlig bruk, ettersom NBAs
        nettsider er svært trege."
        image={nba}
        technologies="React, Electron"
      />
    </div>
  );
}
