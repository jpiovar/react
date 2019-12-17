import React, { Component } from 'react'; // let's also import Component
import './Hi.scss';

interface IChildComponentProps extends React.Props<any> {
}

interface PassedProps extends React.Props<any> {
  title: any
}

type states = {
	articles: any,
  text: string
}

export class Hi extends Component<IChildComponentProps & PassedProps, states> {
	constructor(props: any) {
    super(props)
		console.log(props.title)
		this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "TypeScript tutorial for beginners", id: 2 }
			],
			text: 'initial text'
    };
	}
	
  get textContent(): String {
		const { text } = this.state;
    return `${this.props.title} ok hi component ${text}`;
  }

	clickHandle() {
		console.log('clicked');
	}

  componentWillMount() {

  }

  componentDidMount() {
  }

  render() {
    return <p className="hi text"><span onClick={this.clickHandle}>click</span> here <span className="subtext">{this.textContent}</span></p>
  }
}
