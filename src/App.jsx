import FormInput from "./FormInput";
import ListNotes from "./ListNotes";
import Navbar from "./Navbar";
import { getInitialData } from "./Data.js";
import { useState } from "react";

function App() {
  const data = getInitialData();
  const [item, setItem] = useState(data);
  const [filterItem, setFilterItem] = useState(data);

  const queryHandler = (query) => {
    //alert(query)
    const filteredItems = item.filter((el) =>
      el.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilterItem(filteredItems);
  };

  const archiveHandler = (id) => {
    const temp = item.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          archived: !el.archived,
        };
      } else return el;
    });

    const temp2 = filterItem.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          archived: !el.archived,
        };
      } else return el;
    });

    setItem(temp);
    setFilterItem(temp2);
    //console.log(temp)
  };

  const deleteHandler = (id) => {
    const temp2 = filterItem.filter((element) => element.id !== id);
    const temp = item.filter((element) => element.id !== id);
    setItem(temp);
    setFilterItem(temp2);
    //console.log(item);
  };

  const addHandler = (obj) => {
    setItem([...item, obj]);
    setFilterItem([...filterItem, obj]);
  };

  return (
    <>
      <div className="container-fluid">
        <Navbar queryHandler={queryHandler} />
        <FormInput addHandler={addHandler} />
        <h2 className="mb-4">Daftar Catatan</h2>
        <ListNotes
          data={filterItem.filter((note) => note.archived === false)}
          archiveHandler={archiveHandler}
          deleteHandler={deleteHandler}
        />

        <h2 className="mb-4">Daftar Arsip</h2>
        <ListNotes
          data={filterItem.filter((note) => note.archived === true)}
          archiveHandler={archiveHandler}
          deleteHandler={deleteHandler}
        />
      </div>
    </>
  );
}

export default App;
