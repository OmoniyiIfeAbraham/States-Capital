import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { Data } from "./data/states&capitals";

function App() {
  const [search, setSearch] = useState("");

  // Filter the data based on the search input
  const filteredData = Data.filter((item) => {
    return search.toLocaleLowerCase() === ""
      ? item
      : item.state.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          item.capital.toLocaleLowerCase().includes(search.toLocaleLowerCase());
  });

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center mt-4">States And Capitals</h1>
        <form>
          <div className="input-group my-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </form>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>S/N</th>
              <th>State</th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id + 1}</td>
                  <td>{item.state}</td>
                  <td>{item.capital}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No result matches your search
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
