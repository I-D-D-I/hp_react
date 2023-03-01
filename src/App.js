import React, { useState } from "react";
import { Layout } from "./Layout/Layout";
import { Cards } from "./components/Cards/Cards";
import { Table } from "./components/Table/Table";
import { data } from "./data/data.js";

function App() {
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");

  let newData = data
    .filter((el) => el.house.includes(select) || select === "")
    .filter((el) => el.name.toLowerCase().includes(value.toLowerCase().trim()));

  return (
    <Layout
      inpvalue={value}
      setInpvalue={setValue}
      select={select}
      setSelect={setSelect}
    >
      <Table>
        {newData.map((el, ind) => (
          <Cards
            key={ind}
            image={el.image}
            nameHero={el.name}
            actor={el.actor}
            gender={el.gender}
            house={el.house}
            wandCore={el.wand.core}
            alive={el.alive ? "yes" : "no"}
          />
        ))}
      </Table>
    </Layout>
  );
}

export default App;

// console.log(value)
// const newData = data.filter((item) =>
//   item.name.toLowerCase().includes(valueInput.toLowerCase().trim())
// );;

// const newData = data
//   .filter(
//     (item) =>
//       item.house.includes(selectLine.value) || selectLine.value == ""
//   )
//   .filter((item) =>
//     item.name.toLowerCase().includes(valueInput.toLowerCase().trim())
//   );
// return newData.forEach((card) => createCard(card));
