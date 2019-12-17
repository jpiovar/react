import React, { Component } from 'react'; // let's also import Component
import './Hello.scss';

// the clock's state has one field: The current time, based upon the
// JavaScript class Date
type ClockState = {
  time: Date
}

interface IChildComponentProps extends React.Props<any> {
}

interface PassedProps extends React.Props<any> {
  title: any
}

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
export class Hello extends Component<IChildComponentProps & PassedProps, ClockState> {
	constructor(props: any) {
    super(props)
    console.log(props.title)
	}
  // The tick function sets the current state. TypeScript will let us know
  // which ones we are allowed to set.
  tick() {
    this.setState({
      time: new Date()
    });
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {
    this.tick();
  }

  // After the component did mount, we set the state each second.
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  // render will know everything!
  render() {
    return <p className="text">The current time is <span className="subtext">{this.state.time.toLocaleTimeString()}</span></p>
  }
}
