import React  from 'react';
import './Game2.css';
import image from './images/image.png'

class Game2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const ISOStringDate = this.state.date.toISOString();
    return (
        <div>
            <h5>
              UTC, or Universal Time Coordinated, is the most precise and commonly referred to time standard. Since the 1970s, this time standard has been globally used as the most precise time standard, instead of formerly used GMT standard, which has turned now into a regular time zone. In addition, you can also see a few types of UTC time format, with some being very widespread, and some being less commonly used.
            </h5>  
            <h1>UTC Time Now:</h1>
            <h2>{ISOStringDate.substring(0, 19).replace('T', ' ')}</h2>
            <img src={image} alt=""/>
        </div>
    );
  }
}


export default Game2;