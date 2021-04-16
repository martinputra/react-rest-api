import React from 'react';
import './App.css';
import Navbar from "./component/navbar/Navbar";
import Card from "./component/card/Card";
import Footer from "./component/footer/Footer";

function App() {
  // state / management memory
  let [data, setData] = React.useState([])
  // component lifecycle
  React.useEffect(() => {
    // function fetch
    fetch('http://localhost:8000/api/absen', {
      method : 'GET',
      mode : 'cors',
      headers : {
        "Content-Type" : 'application/json',
        Accept : 'application/json'
      }
    })
    .then(res => res.json())
    .then(hasil => {
      console.log(hasil)
      setData(hasil)
    })
    .catch(err => console.log(err))
    // return ini sebagai fungsi clean up
    return () => {}
  }, [])


  return (
    <div className="App">
      <Navbar />

      <header className="App-header">
      {data.map((e)=>{
          return (
            <Card
            key={e.id}
            id={e.id}
            nama={e.nama}
            email={e.email}
            telepon={e.telepon}
            batch = {e.batch}
            date={e.date}
          />
          )
        })}        
      </header>

      <Footer />

    </div>
  );
}

export default App;