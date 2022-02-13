import './App.css';

const App = () => {
  // Get Date methods for breaking down dates  https://www.w3schools.com/js/js_date_methods.asp
  const today = new Date();
  console.log(today.getDate())
  const currentHour = today.getHours();
  const currentMinutes = today.getMinutes();

  // Set Date methods  https://www.w3schools.com/js/js_date_methods_set.asp

  return (
    <div className="App">
      <header className="App-header">
        {currentHour + ":" + currentMinutes}
      </header>
    </div>
  );
}

export default App;
