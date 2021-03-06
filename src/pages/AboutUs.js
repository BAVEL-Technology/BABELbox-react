import React, { Component } from "react";
import DevCard from "../components/AboutUs/DevCard";
import BBLogoLetters from "../components/BBLogo/BBLogoLetters";
import Navbar from "../components/Nav";

class AboutUs extends Component {
  render() {
    return (
      <div className="bg-pink-200">
        <Navbar />
        <header className="brand text-center font-bold block -mt-10">
          <div className="-mb-24">
            <BBLogoLetters
              charColor="text-yellow-600"
              character="T"
              hover={true}
            />
            <BBLogoLetters
              charColor="text-green-600"
              character="H"
              hover={true}
            />
            <BBLogoLetters
              charColor="text-indigo-600"
              character="E"
              hover={true}
            />
          </div>
          <div>
            <BBLogoLetters
              charColor="text-purple-600"
              character="T"
              hover={true}
            />
            <BBLogoLetters
              charColor="text-blue-600"
              character="E"
              hover={true}
            />
            <BBLogoLetters
              charColor="text-red-600"
              character="A"
              hover={true}
            />
            <BBLogoLetters
              charColor="text-indigo-600"
              character="M"
              hover={true}
            />
          </div>
        </header>

        <div className="grid xl:grid-cols-6 md:grid-cols-2 align-items-center gap-4">
          <div className="col-span-1" />
          <div className="col-span-4">
            <DevCard name="Steve Tong" gitHubUsername="steversonTong" />
            <DevCard name="Nick Graffis" gitHubUsername="NickGraffis" />
            <DevCard name="Dustin Pidcock" gitHubUsername="DustinPiddy" />
            <DevCard name="Robert Schmahl" gitHubUsername="rschm007" />
            <DevCard name="Ivan Silvar" gitHubUsername="ifsilvar" />
            <DevCard name="Christian Payne" gitHubUsername="ChristianPayne" />
            <DevCard name="Andrew Doka" gitHubUsername="andrewdoka" />
          </div>
          <div className="col-span-1" />
        </div>
      </div>
    );
  }
}

export default AboutUs;
