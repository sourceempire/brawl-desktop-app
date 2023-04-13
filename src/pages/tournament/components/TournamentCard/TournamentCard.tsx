import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Content, Wrapper } from './TournamentCard.styles';
import temporaryBackdrop from 'assets/images/temporary-csgo-backdrop.jpg';

type Props = {
  name: string;
  status: string;
  round: string;
  onClick?: ((event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
};

const TournamentCard = ({ name, status, round, onClick }: Props) => {
  return (
    <Wrapper onClick={onClick}>
      <Content>
        {name}
        {status}
        {round}
      </Content>
    </Wrapper>
  );
};

export default TournamentCard;
