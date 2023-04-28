import DatePicker from "./lib/DatePicker/DatePicker";

function App() {
  return (
    <>
      <DatePicker
      required={true}
      label="Start Date (yyyy-mm-dd)"
      onChange={(value) => console.log(value)}
      />
      <DatePicker
      required={true}
      label="Start Date (yyyy-mm-dd)"
      onChange={(value) => console.log(value)}
      style={{color: 'red'}}
      value={'1986-08-29'}
      />
    </>
  )
}

export default App;
