import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import People from '../models/people';
import InfoDisplay from './info_display';
import CloseButton from './component/close_button';

interface PilotDetailProps {
  model: People | null;
  closeCallback: () => void;
}

interface PilotDetailState {
}

interface ContainerProps {
  fullSize: boolean;
}

const Container = Styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px 0 0 20px;
  width: calc(100% - 250px);
  height: ${props => props.fullSize ? '150px' : '0px'};
  white-space: nowrap;
  overflow: hidden;
  transition: all 300ms ease;
`;

export default class PilotDetail extends PureComponent<PilotDetailProps, PilotDetailState> {
  constructor(props: PilotDetailProps) {
    super(props);

    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
  }

  handleCloseButtonClick(): void {
    this.props.closeCallback();
  }

  render(): JSX.Element {
    const { model } = this.props;

    return (
      <Container fullSize={!!model}>
        <CloseButton onClick={this.handleCloseButtonClick} />
        <InfoDisplay
          title={'Name'}
          text={model?.Name || '--'}
        />
        <InfoDisplay
          title={'Birth Year'}
          text={model?.BirthYear || '--'}
        />
        <InfoDisplay
          title={'Gender'}
          text={model?.Gender || '--'}
        />
        <InfoDisplay
          title={'Eye Color'}
          text={model?.Eyecolor || '--'}
        />
        <InfoDisplay
          title={'Hair Color'}
          text={model?.HairColor || '--'}
        />
        <InfoDisplay
          title={'Skin Color'}
          text={model?.SkinColor || '--'}
        />
        <InfoDisplay
          title={'Mass'}
          text={`${model?.Mass || '--'}`}
        />
        <InfoDisplay
          title={'Height'}
          text={`${model?.Height || '--'}`}
        />
      </Container>
    );
  }
}
