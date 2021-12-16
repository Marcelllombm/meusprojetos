import { Container } from "./styles";
import { HeaderNav } from "../HeaderNav";
import { HeaderContainer } from "../HeaderContainer";

export function Header() {
	return (
		<Container>
			<div id="header">
			<HeaderNav />
			<HeaderContainer />
			</div>
		</Container>
	);
}
