import React from "react";

import { Programming as ProgrammingProps } from "../App";

// type ProgrammingProps = {
//   languages: {
//     id: number;
//     name: string;
//     url: string;
//     epxerienceYear: number;
//     comment: string;
//   }[];
// };

// Tell TypeScript that const List is Functional Component
const List: React.FC<ProgrammingProps> = ({ languages }) => {
  const renderList = (): JSX.Element[] => {
    return languages.map((language) => {
      return (
        <ul key={language.id}>
          <li>Name: {language.name}</li>
          <li>
            Url: <a href={language.url}>{language.url}</a>
          </li>
          <li>Experience Year: {language.epxerienceYear}</li>
          <li>Comments: {language.comment}</li>
        </ul>
      );
    });
  };
  return <div>{renderList()}</div>;
  //   return (
  //     <ul>
  //       {languages.map((language) => {
  //         return <li>{language.name}</li>;
  //       })}
  //     </ul>
  //   );
};

export default List;
