import GlobalStyle from "./globalStyle";
import Calendar from "./components/Calendar/Calendar";

function App() {
  return (
    <>
      <GlobalStyle/>
      <Calendar
      date={new Date()}
      onChange={(value: [number, string, string]) => console.log(value)}
      />
    </>
  )
}

export default App;
