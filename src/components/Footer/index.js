import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between bg-white py-12 mt-8">
      <div className="flex flex-col text-sm lg:px-12 md:px-12 px-4 lg:w-3/12 md:w-5/12 w-8/12">
        <p className="text-blue-500 font-semibold">A project by <a href="https://github.com/https-github-com-steversonTong" target="_blank" className="cursor-pointer hover:text-blue-600"><strong>BABEL</strong></a>. You're welcome. 😼</p>
        <br/>
        <p className="text-blue-500 font-semibold ">For more information about our code, check out our <a href="https://github.com/https-github-com-steversonTong/BabelBox" target="_blank"><strong className="cursor-pointer hover:text-blue-600">GitHub</strong></a>.</p>
        <br/>
        <p className="text-blue-500 font-semibold">
          Liberal use of <a href="https://twemoji.twitter.com/" target="_blank" className="underline hover:text-blue-600">twemojis</a>
          &nbsp;in this app. We <img draggable="false" className="emoji" alt="💜" src="https://twemoji.maxcdn.com/v/13.0.1/72x72/1f49c.png"/> them.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
