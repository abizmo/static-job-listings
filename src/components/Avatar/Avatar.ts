import styled from 'styled-components';

interface AvatarProps {
  $name: string;
}

const Avatar = styled.img.attrs(({ $name }: AvatarProps) => ({
  src: `./images/${$name}.svg`,
  alt: `${$name}`,
}))`
  height: 48px;
  widht: 48px;

  @media (min-width: 50rem) {
    height: 88px;
    width: 88px;
  }
`;

export default Avatar;
