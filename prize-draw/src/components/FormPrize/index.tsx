import * as C from './styles';

export function FormPrize() {
  return (
  <C.Content>
    <form>
        <input type="text" value=""  placeholder='Digite um nome'/>
        <button type="submit">+</button>
    </form>
        <button className='bt-sortear'>SORTEAR AGORA</button>
  </C.Content>
  
  );
}
