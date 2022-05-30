import styled from 'styled-components';

type AvatarProps = {
  $name: string;
};

const Avatar = styled.img.attrs<AvatarProps>(({ $name }) => ({
  src: `./images/${$name}.svg`,
  alt: `${$name}`,
}))<AvatarProps>`
  height: 48px;
  widht: 48px;

  @media (min-width: 50rem) {
    height: 88px;
    width: 88px;
  }
`;

export default Avatar;
