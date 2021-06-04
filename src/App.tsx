import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import List from "./components/List";
import AddList from "./components/AddList";

// interface Programming {
//   languages: {
//     name: string;
//     url: string;
//     epxerienceYear: number;
//     comment: string;
//   }[];
// }

export type Programming = {
  languages: {
    id: number;
    name: string;
    url: string;
    epxerienceYear: number;
    comment: string;
  }[];
};

function App() {
  const [languages, setLanguages] = useState<Programming["languages"]>([
    {
      id: 1,
      name: "JavaScript",
      url: "",
      epxerienceYear: 1,
      comment: "Its difficult",
    },
  ]);

  // // const [languages, setLanguages] = useState([
  // //   {
  // //     name: "JavaScript",
  // //     url: "",
  // //     experienceYear: 1,
  // //     comment: "It's difficult",
  // //   },
  // //   {
  // //     name: "Python",
  // //     url: "",
  // //     experienceYear: 1,
  // //   },
  // // ]);
  languages.map((language) => {
    console.log(language.id);
    console.log(language.name);
    console.log(language.comment);
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>React + TypeScript</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <List languages={languages} />
      {/* After passing languages/setLanguage to AddList, */}
      {/* Makesure to declare after AddList: React.FC<someTypeofProp> */}
      <AddList languages={languages} setLanguages={setLanguages} />
    </div>
  );
}

export default App;
