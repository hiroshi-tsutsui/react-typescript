import React, { useState } from "react";

import { Programming as ProgrammingProps } from "../App";

// // This is fine but messy and hard to read
// type PProps = {
//   languages: ProgrammingProps["languages"];
//   setLanguages: React.Dispatch<
//     React.SetStateAction<
//       {
//         name: string;
//         url: string;
//         epxerienceYear: number;
//         comment: string;
//       }[]
//     >
//   >;
// };

// This is better!
type PProps = {
  languages: ProgrammingProps["languages"];
  setLanguages: React.Dispatch<
    React.SetStateAction<ProgrammingProps["languages"]>
  >;
};

let counter = 1;
const AddList: React.FC<PProps> = ({ languages, setLanguages }) => {
  const [input, setInput] = useState({
    name: "",
    url: "",
    experienceYear: "",
    comment: "",
  });

  const handleChange = (
    // This can be rewritten like e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (): void => {
    counter++;
    if (!input.name || !input.url || !input.experienceYear) {
      return;
    }

    setLanguages([
      ...languages,
      {
        id: counter,
        name: input.name,
        url: input.url,
        epxerienceYear: parseInt(input.experienceYear),
        comment: input.comment,
      },
    ]);
    setInput({
      name: "",
      url: "",
      experienceYear: "",
      comment: "",
    });
  };

  return (
    <div className="inputFields">
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Url"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <input
        type="number"
        placeholder="ExperienceYear"
        value={input.experienceYear}
        onChange={handleChange}
        name="experienceYear"
      />
      <textarea
        placeholder="Comment"
        value={input.comment}
        onChange={handleChange}
        name="comment"
      />
      <button onClick={handleClick}>Add to List</button>
    </div>
  );
};

export default AddList;
