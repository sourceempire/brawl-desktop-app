import styled from 'styled-components/macro';
import { rgba } from 'utils/styledUtils';

export const Wrapper = styled.div`
  width: 100%;
`;

export const VisibilityToggle = styled.div`
  ${(props) => props.theme.textStyles.menu}
  margin: 18px 0;

  &:after {
    content: '▾';
    margin-left: 6px;
  }
`;

export const HeroWrapper = styled.div`
  overflow: hidden;
`;

type HeroProps = {
  visible: boolean;
  image: string;
};
export const Hero = styled.div<HeroProps>`
  position: relative;
  height: 166px;
  transition: transform 0.3s;
  transform: translateY(-${(props) => (props.visible ? 0 : 100)}%);
  transform-origin: top;
  background: url(${(props) => props.image});
  background-size: cover;
  text-align: center;
  border-radius: ${(props) => props.theme.borderRadius.default};
`;
export const Info = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
`;
export const Countdown = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.35);
  padding: 12px 24px;
  border-radius: ${(props) => props.theme.borderRadius.default};
  top: 18px;
  left: 18px;
  font-size: 14px;
  text-transform: uppercase;
`;
export const Name = styled.div`
  font-size: 20px;
  font-weight: normal;
  font-family: ${(props) => props.theme.fonts.stylized};
  margin-bottom: 18px;
`;
export const Bullets = styled.div`
  display: flex;
  justify-content: center;
`;
export const Bullet = styled.div`
  display: flex;
  flex-direction: row;
  width: 166px;
  height: 42px;
  border-radius: 21px;
  background-color: ${(props) => rgba(props.theme.colors.secondary, 0.6)};
  margin: 0 9px; // becomes 18 in space between
`;
export const BulletIcon = styled.img`
  height: 42px;
  width: 42px;
  padding: 10px;
  overflow: hidden;
  flex: 0 0 42px;
`;
export const BulletText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-content: center;
`;
export const Title = styled.div`
  font-weight: bold;
  margin-bottom: 2px;
`;
export const Subtitle = styled.div`
  color: ${(props) => props.theme.colors.textSecondaryLight};
`;
