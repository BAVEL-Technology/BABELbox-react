import React, { Component } from 'react';
import DevCard from "../components/AboutUs/DevCard";
import BBLogo from "../components/BBLogo";
import Navbar from "../components/Nav";

class AboutUs extends Component {
  render() {
    return (
      <>
        {/* TODO: Insert a BB logo to go home. */}
        <Navbar />
        <div className="flex justify-between">
          <BBLogo small={true} className="py-6 px-5" />
        </div>
        {/* <a href="/">(TEMP)Home</a> */}
        <h1 className="text-6xl m-12">The BABEL Team</h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-2">
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
