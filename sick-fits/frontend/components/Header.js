import Link from 'next/link';
import Nav from './Nav';
import styled from 'styled-components';

const Logo = styled.h1`
  background: red;
  a {
    color: white;
  }
`;

export default function Header() {
  return (
    <header>
      <div className='bar'>
        <Logo>
          <Link href='/'>Sick Fits</Link>
        </Logo>
      </div>
      <div className='sub-bar'>
        <p>Search</p>
      </div>
      <Nav />
    </header>
  );
}
