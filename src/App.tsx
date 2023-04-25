import GlobalStyle from "./globalStyle";
import DatePicker from "./components/DatePicker/DatePicker";

function App() {
  return (
    <>
      <GlobalStyle/>
      <DatePicker
      required={true}
      label="Start Date (yyyy-mm-dd)"
      />
    </>
  )
}

export default App;
