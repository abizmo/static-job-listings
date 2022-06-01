import styled from 'styled-components';

const badgeLabel = {
  new: 'New!',
  feat: 'Featured',
};

type BadgeType = 'new' | 'feat';

interface BadgeProps {
  type: BadgeType;
}

const Badge = styled.div.attrs<BadgeProps>(({ type }) => ({
  children: badgeLabel[type],
}))<BadgeProps>(({ theme, type }) => ({
  backgroundColor: type === 'new' ? theme.colors[500] : theme.colors[800],
  borderRadius: theme.sizes[12],
  color: theme.colors.white,
  display: 'inline-block',
  fontSize: theme.fontSizes[400],
  padding: `${theme.sizes[8]} ${theme.sizes[12]} ${theme.sizes[4]}`,
  textAlign: 'center',
  textTransform: 'uppercase',
}));

export default Badge;
