import Rocket from '../../assets/rocket.svg'
import { HeaderContainer } from './styled'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Rocket} alt="logo foguete" />

      <p>
        to<span>do</span>
      </p>
    </HeaderContainer>
  )
}
