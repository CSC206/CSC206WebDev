import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch('http://localhost:8081/csc206')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    };

    fetchData(); // Initial fetch

    const interval = setInterval(fetchData, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup function

  }, []);

  return (
    <div className='app'>
      <h1 style={{ textAlign: 'center', fontFamily:'monospace', fontWeight:'bolder', paddingTop:'50px', paddingBottom:'30px', marginLeft:'130px', marginRight:'130px', marginTop:'50px',border:'3px solid #dbdac5', borderRadius:'15px'}}>DATABASE CARDS</h1>
      <div className="container" style={{ paddingTop: '50px' }}>
        {data.slice(0, 6).map((d, i) => (
          <div className="row" key={i}>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body" style={{backgroundColor:'#e3d8e6'}}>
                  <h5 className="card-title" style={{textAlign:'center'}}>Time</h5>
                  <hr />
                  <p className="card-text" style={{textAlign:'center', paddingTop:'50px'}}>{d.time}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body" style={{backgroundColor:'#b9edd4'}}>
                  <h5 className="card-title" style={{textAlign:'center'}}>Temperature</h5>
                  <hr />
                  <p className="card-text"  style={{textAlign:'center', paddingTop:'50px'}}>{d.temprature}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body" style={{backgroundColor:'#f7f28f',}}>
                  <h5 className="card-title" style={{textAlign:'center'}}>Relative Humidity</h5>
                  <hr />
                  <p className="card-text" style={{textAlign:'center', paddingTop:'50px'}}>{d.relativehumidity}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:'center'}}>Pressure</h5>
                  <hr />
                  <p className="card-text" style={{textAlign:'center', paddingTop:'50px'}}>{d.pressure}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:'center'}}>Altitude</h5>
                  <hr />
                  <p className="card-text" style={{textAlign:'center', paddingTop:'50px'}}>{d.altitude}</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="card" style={{ border: '2px solid black' }}>
                <div className="card-body">
                  <h5 className="card-title" style={{textAlign:'center'}}>Oxygen Level</h5>
                  <hr />
                  <p className="card-text" style={{textAlign:'center', paddingTop:'50px'}}>{d.oxygenlevel}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
