import { FormPrize } from '../FormPrize';
import { People } from '../People';
import { Winner } from '../Winner';
import * as C from './styles';

export function Prize() {
  return (
    <C.Container>
      <C.Content>
        <h1>Sorteio</h1>
        <FormPrize />
        <People />
      </C.Content>
      <Winner />
    </C.Container>
  );
}
