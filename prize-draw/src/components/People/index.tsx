import * as C from './styles';
interface propsObj {
  id: number;
  valueInput: string;
}

type Props = {
  item: propsObj,
}
export  function People({item}: Props) {
  
  return (
      <C.Content>
          <span>
          <h3>{item.valueInput}</h3>  <button>-</button>
        </span>
       

      </C.Content>
  );
}
