import PropTypes from 'prop-types';
import Header from './Header';

export default function Page({ children, cool }) {
  return (
    <div>
      <Header />
      <h2>{children}</h2>
      <h3>{cool}</h3>
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any,
};
