import { Container } from "./styles";
import { HeaderNav } from "../HeaderNav";
import { HeaderContainer } from "../HeaderContainer";

export function Header() {
	return (
		<Container>
			<HeaderNav />
			<HeaderContainer />
		</Container>
	);
}
