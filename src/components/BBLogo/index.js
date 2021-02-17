import BBLogoLetters from "./BBLogoLetters";

const BBLogo = () => {
    return (
        <div className="brand text-center text-gray-700 font-semibold hidden lg:block md:block">
            <BBLogoLetters charColor="text-yellow-600" character="B" />
            <BBLogoLetters charColor="text-green-600" character="A" />
            <BBLogoLetters charColor="text-indigo-600" character="B" />
            <BBLogoLetters charColor="text-purple-600" character="E" />
            <BBLogoLetters charColor="text-blue-600" character="L" />
            <BBLogoLetters charColor="text-red-600" character="B" />
            <BBLogoLetters charColor="text-yellow-600" character="O" />
            <BBLogoLetters charColor="text-indigo-800" character="X" />
        </div>
    );
};

export default BBLogo;