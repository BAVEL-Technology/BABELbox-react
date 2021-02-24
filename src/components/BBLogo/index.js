import BBLogoLetters from "./BBLogoLetters";

const BBLogo = (props) => {
    if(props.small === true)
    {
        return (
            <button onClick={()=>{window.location = "/";}} className="focus:outline-none brand-small text-center text-gray-700 font-semibold hidden lg:block md:block">
                <BBLogoLetters charColor="text-yellow-600" character="B"/>
                <BBLogoLetters charColor="text-indigo-600" character="B"/>
            </button>
        );
    }
    else
    {
        return (
            <div className="brand text-center text-gray-700 font-bold hidden lg:block md:block">
                <BBLogoLetters charColor="text-yellow-600" character="B" hover={true}/>
                <BBLogoLetters charColor="text-green-600" character="A" hover={true}/>
                <BBLogoLetters charColor="text-indigo-600" character="B" hover={true}/>
                <BBLogoLetters charColor="text-purple-600" character="E" hover={true}/>
                <BBLogoLetters charColor="text-blue-600" character="L" hover={true}/>
                <BBLogoLetters charColor="text-red-600" character="B" hover={true}/>
                <BBLogoLetters charColor="text-yellow-600" character="O" hover={true}/>
                <BBLogoLetters charColor="text-indigo-800" character="X" hover={true}/>
            </div>
        );
    }
};

export default BBLogo;
