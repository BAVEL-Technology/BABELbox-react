import React, { Component } from 'react';
import DevCard from "../components/AboutUs/DevCard";

class AboutUs extends Component {
  render() {
    return (
      <>
        <h1 className="text-6xl mb-12">The Team</h1>
        <div className="grid grid-cols-4">
          <DevCard name="Steve Tong" gitHubUsername="steversonTong"/>
          <DevCard name="Nick Graffis" gitHubUsername="NickGraffis"/>
          <DevCard name="Dustin Pidcock" gitHubUsername="DustinPiddy"/>
          <DevCard name="Robert Schmahl" gitHubUsername="rschm007"/>
          <DevCard name="Ivan Silvar" gitHubUsername="ifsilvar"/>
          <DevCard name="Christian Payne" gitHubUsername="ChristianPayne"/>
          <DevCard name="Andrew Doka" gitHubUsername="andrewdoka"/>
        </div>
      </>
    );
  }
}

export default AboutUs;
