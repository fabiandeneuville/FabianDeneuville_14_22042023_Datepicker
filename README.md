# FD React Datepicker


## Basic React + Typescript DatePicker

### Installation :

```
npm i fd-react-datepicker
```

### Use :

```
import DatePicker from 'fd-react-datepicker';
```

```
    <DatePicker
        name={'datePicker'}
        onChange={() => {}}
    />
```

### Props :

#### Required props : 
-   name: string
-   onChange: function

#### Optional props: 
-   required: boolean // false by default
-   label: string
-   style: object
-   className: string
-   id: string
-   value: string (yyyy-mm-dd)
-   placeholder: string // default is yyyy-mm-dd