import { FormPrize } from '../FormPrize';
import * as C from './styles';

export function Prize() {
  return (
    <C.Container>
      <C.Content>
        <h1>Sorteio</h1>
        <FormPrize />
      </C.Content>
    </C.Container>
  );
}
