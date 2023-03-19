import { useState } from 'react';
import { initValues } from './modules/init';
import Forms from './components/Forms';
import './App.css';

export interface IData {
  [key: string]: string | null;
}

function App() {
  const [data, setData] = useState<IData>({});

  const handleChange = (key: string, value: string | null) => {
    const newData: IData = {...data};
    newData[key] = value;
    setData(newData);
  }

  const submitDisabled: boolean = initValues.length !== Object.values(data).filter(x => !!x).length;

  return (
    <div className="App">
      <form className="App_forms">
        <Forms forms={initValues} handleChange={handleChange} />
        <input type="submit" value="Войти" className='submitButton' disabled={submitDisabled} />
      </form>
    </div>
  );
}
export default App;
