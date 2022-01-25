import { useState } from 'react';
import { FormPrize } from '../FormPrize';
import { People } from '../People';
import { Winner } from '../Winner';
import * as C from './styles';

interface propsObj {
  id: number;
  valueInput: string;
}
export function Prize() { 

  const [ valueInput, setValueInput ] = useState('');
  const [nameList, setNameLista] = useState<propsObj[]>([]);

  const  handleClick = (e: any): void => {
    e.preventDefault();
    
    if(valueInput === ''){
      console.log('error')
    }else {

      let list = {
        id: Math.floor(Math.random() * 1000),
        valueInput,
      };
      const name =  nameList
      setNameLista([...name, list]);
      setValueInput('');
    }
  }

  const handleChange = ({target}: React.ChangeEvent<any>) =>{
    setValueInput(target.value);
  }

    return (
    <C.Container>
      <C.Content>
        <h1>Sorteio</h1>
        <FormPrize handleClick={handleClick} handleChange={handleChange} valueInput={valueInput}/>
        {nameList.map((item, index)=>(
            <People
              key={index}
              item={item}
            />
          ))}
        
      </C.Content>
      <Winner />
    </C.Container>
  );
}
