import React, { useEffect, useState } from "react";
// import { data } from "./data/data.js";
import { Home } from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import { Favorites } from "./pages/Favorites/Favorites";

const savedLikes = JSON.parse(localStorage.getItem('likedNames')) ?? [];

function App() {
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");
  const [liked, setLiked] = useState(savedLikes);
  const [data, setData] = useState([])

  const like = (name) => setLiked([...liked, name]); // делаем функцию like которая принимает name из data и добавляет его в новый массив имен liked
  const dislike = (name) => setLiked(liked.filter((el) => el !== name)); // делаем функцию dislike которая принимает name и фильтрует новый массив liked - если name нету то в массиве liked не отображает

  useEffect(() => {
    localStorage.setItem('likedNames', JSON.stringify(liked));
  }, [liked]);
  
  useEffect(()=>{
    fetch("https://hp-api.onrender.com/api/characters")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  

  let newData = data
    .filter((el) => el.house.includes(select) || select === "")
    .filter((el) => el.name.toLowerCase().includes(value.toLowerCase().trim()));
  
    let likedData = newData.filter((el) => liked.includes(el.name));


  return (
    // <Layout
    //   inpvalue={value}
    //   setInpvalue={setValue}
    //   select={select}
    //   setSelect={setSelect}
    // >
    //   <Table>
    //     {newData.map((el, ind) => (
    //       <Cards
    //         key={ind}
    //         image={el.image}
    //         nameHero={el.name}
    //         actor={el.actor}
    //         gender={el.gender}
    //         house={el.house}
    //         wandCore={el.wand.core}
    //         alive={el.alive ? "yes" : "no"}
    //         like={like}
    //         dislike={dislike}
    //         isLiked={liked.includes(el.name)} // если в массиве имен liked есть name, то true
    //       />
    //     ))}
    //   </Table>
    // </Layout>
    <Routes>
      <Route
        path="/"
        element={
          <Home
            inpvalue={value}
            setInpvalue={setValue}
            select={select}
            setSelect={setSelect}
            newData={newData}
            like={like}
            dislike={dislike}
            liked={liked}
          />
        }
      />
      <Route
        path="/Favorites"
        element={
          <Favorites
            likedData={likedData}
            like={like}
            dislike={dislike}
            liked={liked}
          />
        }
      />
    </Routes>

    // <Home
    //   inpvalue={value}
    //   setInpvalue={setValue}
    //   select={select}
    //   setSelect={setSelect}
    //   newData={newData}
    //   like={like}
    //   dislike={dislike}
    //   liked={liked}
    // />
  );
}

export default App;
