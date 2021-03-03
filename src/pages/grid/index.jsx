import React from "react";
import Title from "../../components/titleHeader";
import Card from "../../components/hotsauceCard";
import hotsauces from "../../hotsauces.json";
import "./style.css";

const Grid = () => {
  //WAS USING A FETCH BUT COULDNT FIGURE IT OUT SO DID AN IMPORT INSTEAD

  // const [data, setData] = useState([]);

  // const getData = () => {
  //   fetch("hotsauces.json")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((hotsauces) => {
  //       console.log(hotsauces);
  //       setData(hotsauces);
  //     });
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <div className="title-container">
        <Title />
      </div>
      <div className="grid-container">
        {hotsauces.list.map((sauce) => {
          return (
            <div className="card-container">
              <Card key={sauce.id} info={sauce} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
