import { useEffect, useState} from 'react';
import { FormPrize } from '../FormPrize';
import { People } from '../People';
import { Winner } from '../Winner';
import * as C from './styles';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

interface propsObj {
  id: number;
  valueInput: string;
}
export function Prize() { 

  const [ valueInput, setValueInput ] = useState('');
  const [nameList, setNameLista] = useState<propsObj[]>([]);
  const [prizeDraw, setPrizeDraw] = useState('');
  const [active, setActive] = useState(false);


  const  handleClick = (e: any): void => {
    e.preventDefault();
    
    if(valueInput === ''){
      toast.error("Por favor digite um nome antes de adicionar");
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

  const handleRemove =(id: number) => () => {
    const removeArr = [...nameList].filter(todo => todo.id !== id);
    setNameLista(removeArr);
  }

  const handlePrizeDraw = () => {
    try {
    const prizeDraw = Math.floor(Math.random() * nameList.length);
    const name = nameList[prizeDraw].valueInput;
    setPrizeDraw(name)
    setActive(true);
    } catch{
      toast.info("Não existe ganhador para ser sorteado, digite um nome");
    }
  }

  useEffect(()=>{
    const removeArr = [...nameList].filter(todo => todo.valueInput !== prizeDraw);
    setNameLista(removeArr)
  },[prizeDraw])

    return (
    <C.Container>
      <ToastContainer/>
      <C.Content>
        <h1>Sorteio</h1>
        <FormPrize handleClick={handleClick} handleChange={handleChange} valueInput={valueInput}
        handlePrizeDraw={handlePrizeDraw}
        />
        {nameList.map((item, index)=>(
            <People
              key={index}
              item={item}
              handleRemove={handleRemove}
            />
          ))}
        
      </C.Content>
      <Winner name={prizeDraw}  active={active}/>
    </C.Container>
  );
}
