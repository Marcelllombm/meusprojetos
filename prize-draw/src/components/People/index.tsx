import * as C from './styles';
interface propsObj {
  id: number;
  valueInput: string;
}

type Props = {
  item: propsObj,
  handleRemove:(id: number) => (event: any ) => void;
}
export  function People({item, handleRemove}: Props) {
  
  return (
      <C.Content>
          <span>
          <h3>{item.valueInput}</h3>  <button onClick={handleRemove(item.id)}>-</button>
        </span>
       

      </C.Content>
  );
}
