import DatePicker from "./lib/DatePicker/DatePicker";

function App() {
  return (
    <>
      <DatePicker
      name={'datePicker'}
      label="Start Date (yyyy-mm-dd)"
      onChange={(e) => console.log(e.target.value)}
      value=""
      />
    </>
  )
}

export default App;