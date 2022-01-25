import * as C from './styles';

interface propsForm {
  handleClick: (e: any) => void;
  handleChange:(e: any) => void;
  valueInput: string;
}

export function FormPrize({handleClick, handleChange, valueInput}: propsForm) {


  
  return (
  <C.Content>
    <form onSubmit={handleClick}>
        <input 
        type="text" 
        value={valueInput}
        onChange={handleChange}
        autoComplete='off'  
        placeholder='Escrever nome'
        />
        <button type="submit" >+</button>
    </form>
        <button className='bt-sortear'>SORTEAR AGORA</button>
  </C.Content>
  
  );
}
