import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.h1`
  background: red;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  font-size: 4rem;
  a {
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  .sub-bar {
    display: grid;
    display-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, #000);
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
        <Logo>
          <Link href="/">Sick Fits</Link>
        </Logo>
      </div>
      <div className="sub-bar">
        <p>Search</p>
        <Nav />
      </div>
    </HeaderStyles>
  );
}
