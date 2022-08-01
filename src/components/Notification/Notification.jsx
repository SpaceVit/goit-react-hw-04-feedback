import PropTypes from 'prop-types';
import { Title } from './Notification.styled';

export default function Notification({ text }) {
  return <Title>{text}</Title>;
}

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};
