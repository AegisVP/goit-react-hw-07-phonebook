import { Title, Wrapper } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => (
  <Wrapper>
    {title && <Title>{title}</Title>}
    {children}
  </Wrapper>
);