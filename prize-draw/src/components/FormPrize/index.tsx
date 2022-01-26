import * as C from './styles';

interface propsForm {
  handleClick: (e: any) => void;
  handleChange:(e: any) => void;
  valueInput: string;
  handlePrizeDraw:() => void;
}

export function FormPrize({handleClick, handleChange, valueInput, handlePrizeDraw}: propsForm) {


  
  return (
  <C.Content>
    <form onSubmit={handleClick}>
        <input 
        type="text" 
        value={valueInput}
        onChange={handleChange}
        autoComplete='off'  
        placeholder='Nome'
        />
        <button type="submit" >+</button>
    </form>
        <button className='bt-sortear' onClick={handlePrizeDraw} >SORTEAR AGORA</button>
  </C.Content>
  
  );
}
