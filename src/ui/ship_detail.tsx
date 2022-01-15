import React, { PureComponent } from 'react';
import Styled from 'styled-components';
import Starship from '../models/starship';
import CloseIcon from './images/close_icon';
import InfoDisplay from './info_display';

interface ShipDetailProps {
  model: Starship | null;
  closeCallback: () => void;
}

interface ShipDetailState {
}

interface ContainerProps {
  fullHeight: boolean;
  heightValue?: number;
}

const Container = Styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 40px;
  overflow: hidden;
  height: ${props => props.fullHeight ? `${props.heightValue}px` : '0px'};
  transition: height 300ms ease;
`;

const CloseButton = Styled(CloseIcon)<any>`
  fill: #e2bf4b;
  position: absolute;
  right: 0;
  cursor: pointer;
  
  &:hover {
    fill: #af8d1d;
  }
  
  &:active {
    fill: #e0bb42;
  }
`;

export default class ShipDetail extends PureComponent<ShipDetailProps, ShipDetailState> {
  private _containerRef = React.createRef<HTMLDivElement>();
  private _firstRenderHeight: number = 0;

  constructor(props: ShipDetailProps) {
    super(props);

    this.handleCloseButtonClick = this.handleCloseButtonClick.bind(this);
  }

  componentDidUpdate(prevProps: Readonly<ShipDetailProps>, prevState: Readonly<ShipDetailState>, snapshot?: any): void {
    if (this._firstRenderHeight !== this._containerRef.current?.scrollHeight) {
      // If some text wrap around, the initial render will have a lower value than desired re-rendering fix the issue
      this.forceUpdate();
    }
  }

  handleCloseButtonClick(): void {
    this.props.closeCallback();
  }

  render(): JSX.Element {
    const { model } = this.props;

    this._firstRenderHeight = this._containerRef.current?.scrollHeight || 0;

    return (
      <Container ref={this._containerRef} fullHeight={!!model} heightValue={this._containerRef.current?.scrollHeight}>
        <CloseButton onClick={this.handleCloseButtonClick} />
        <InfoDisplay
          title={'Name'}
          text={model?.Name || '--'}
        />
        <InfoDisplay
          title={'Model'}
          text={model?.Model || '--'}
        />
        <InfoDisplay
          title={'Starship Class'}
          text={model?.StarshipClass || '--'}
        />
        <InfoDisplay
          title={'Manufacturer'}
          text={model?.Manufacturer || '--'}
        />
        <InfoDisplay
          title={'MGLT'}
          text={model?.MGLT || '--'}
        />
        <InfoDisplay
          title={'Hyperdrive Rating'}
          text={`${model?.HyperdriveRating || '--'}`}
        />
        <InfoDisplay
          title={'Max Atmospheric Speed'}
          text={`${model?.MaxAtmosphericSpeed || '--'}`}
        />
        <InfoDisplay
          title={'Length'}
          text={`${model?.Length || '--'}`}
        />
        <InfoDisplay
          title={'Crew Count'}
          text={`${model?.CrewCount || '--'}`}
        />
        <InfoDisplay
          title={'Passengers Capacity'}
          text={`${model?.Passengers || '--'}`}
        />
        <InfoDisplay
          title={'Cargo Capacity'}
          text={`${model?.CargoCapacity || '--'}`}
        />
        <InfoDisplay
          title={'Consumables'}
          text={model?.Consumables || '--'}
        />
        <InfoDisplay
          title={'Cost'}
          text={`${model?.Cost || '--'}`}
        />
      </Container>
    );
  }
}
