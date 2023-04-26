import DatePicker from "./lib/DatePicker/DatePicker";

function App() {
  return (
    <>
      <DatePicker
      required={true}
      label="Start Date (yyyy-mm-dd)"
      onChange={(value) => console.log(value)}
      />
    </>
  )
}

export default App;
