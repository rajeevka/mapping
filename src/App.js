import './App.css';
const App = () => {
  
  function checkPrime(n) {
    var i, flag = true;
    if (n < 2) return false;
    
   
    if (i !== 0 || i !== 1) {
      for (i = 2; i <= n - 1; i++)
        if (n % i === 0) {
          flag = false;
          break;
        }
      if (flag === true) {
        return true;
      }
    
    }
    
  }
  return (
    <div className="App">
      <div className="heading">
        <h1>30 Days Of React </h1>
        <h4>Number Generator</h4>
      </div>
      <div className="Boxes">
        {Array(32)
          .fill("")
          .map((e, i) => {
            return (
              <div
                style={{
                  height: "115px",
                  margin: "1px",
                  display: "flex",
                  fontSize:"25px",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "110px",
                  border: "1px solid white",
                  backgroundColor: checkPrime(i)
                    ? "red"
                    : i % 2 === 0
                    ? "green"
                    : "yellow",
                }}
              >
                {i}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
