import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <section>
      <p className={css.title}>{title}</p>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
