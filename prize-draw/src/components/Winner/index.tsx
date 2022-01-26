import * as C from './styles';

interface propName {
  name: string;
  active: boolean;
}

export function Winner({name, active}: propName) {

  return(
  <C.Content>
      <h1>Ganhador(a)</h1>
      <C.ContentDiv active={active}>{name}</C.ContentDiv>
  </C.Content>
  );
}
