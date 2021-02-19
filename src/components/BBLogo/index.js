import BBLogoLetters from "./BBLogoLetters";

const BBLogo = (props) => {
    if(props.small === true)
    {
        return (
            // TODO: Add small logo
            <div className="brand-small text-center text-gray-700 font-semibold hidden lg:block md:block">
                <BBLogoLetters charColor="text-yellow-600" character="B"/>
                <BBLogoLetters charColor="text-indigo-600" character="B"/>
            </div>
        );
    }
    else
    {
        return (
            <div className="brand text-center text-gray-700 font-semibold hidden lg:block md:block">
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