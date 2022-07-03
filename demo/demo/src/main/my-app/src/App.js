import { useState } from "react";
import "./App.css";
import SearchBody from "./components/SearchBody";
import SearchResults from "./components/SearchResults";

function App() {
  const [results, setResults] = useState([
    {
      name: "aman",
      id: "1",
      associateId: "CTS1034",
      email: "amantaluja53@gmail.com",
      mobNum: 8375092033,
      angular: null,
      aptitude: null,
      aws: null,
      communication: null,
      docker: null,
      git: null,
      hibernate: null,
      html: null,
      jenkins: null,
      react: null,
      restful: null,
      spoken: null,
      spring: null
    },
  ]);
  return (
    <div className="App">
      <div className="title">Admin Functionality</div>
      <SearchBody setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
