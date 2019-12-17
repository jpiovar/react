import React, { Component } from 'react'; // let's also import Component
import './Hi.scss';

interface IChildComponentProps extends React.Props<any> {
}

interface PassedProps extends React.Props<any> {
  title: any
}

export class Hi extends Component<IChildComponentProps & PassedProps, {}> {
	constructor(props: any) {
    super(props)
    console.log(props.title)
	}
	
  get textContent(): String {
    return `${this.props.title} ok hi component`;
  }


  componentWillMount() {

  }

  componentDidMount() {
  }

  render() {
    return <p className="hi text">click here <span className="subtext">{this.textContent}</span></p>
  }
}
