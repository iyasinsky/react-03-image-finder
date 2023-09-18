import { Btn } from './Button.styled';

export const Button = ({ onClick }) => (
  <div style={{ textAlign: 'center' }}>
    <Btn onClick={onClick}>Load more</Btn>
  </div>
);
