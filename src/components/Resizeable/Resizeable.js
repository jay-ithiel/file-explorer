import * as React from 'react';

import { DEFAULT_WIDTH } from '../../constants';

export default class ResizeableWrapper extends React.Component {
  state = {
    dragEndX: null,
    dragStartX: null,
    isDragging: false,
    startWidth: DEFAULT_WIDTH,
    width: DEFAULT_WIDTH,
  };

  render() {
    const style = { minWidth: DEFAULT_WIDTH, width: this.state.width };
    return (
      <div className="Resizeable" onMouseMove={ this.handleMouseMove } onMouseUp={ this.handleMouseUp }>
        <div className="Resizeable-content" style={ style }>
          { this.props.children }
          <div className="Resize-bar" onMouseDown={ this.handleMouseDown }>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  calculateWidthChange = dragEndX => {
    const { dragStartX, startWidth } = this.state;
    return startWidth + (dragEndX - dragStartX);
  };

  handleMouseDown = event => {
    event.preventDefault();

    this.setState({
      ...this.state,
      dragStartX: event.pageX,
      isDragging: true,
    });
  };

  handleMouseMove = event => {
    event.preventDefault();
    if (!this.state.dragStartX || !this.state.isDragging) return;
    
    this.setState({
      ...this.state,
      dragEndX: event.pageX,
      width: this.calculateWidthChange(event.pageX),
    });
  };

  handleMouseUp = event => {
    event.preventDefault();
    if (!this.state.dragStartX || !this.state.isDragging) return;

    const newWidth = this.calculateWidthChange(event.pageX);
    this.setState({
      ...this.state,
      dragEndX: event.pageX,
      isDragging: false,
      startWidth: newWidth,
      width: newWidth,
    });
  }
}
