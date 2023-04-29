import DatePicker from "./lib/DatePicker/DatePicker";

function App() {
  return (
    <>
      <DatePicker
      name={'datePicker'}
      label="Start Date (yyyy-mm-dd)"
      onChange={(e) => console.log(e.target)}
      />
      <DatePicker
      required={true}
      name={'datePicker'}
      label="Start Date (yyyy-mm-dd)"
      onChange={(e) => console.log(e.target)}
      value={"2000-07-04"}
      />
    </>
  )
}

export default App;