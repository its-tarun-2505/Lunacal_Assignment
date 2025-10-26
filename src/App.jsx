import React from 'react'
import FirstWidget from './components/widgets/FirstWidget'
import GalleryWidget from './components/widgets/GalleryWidget'

const App = () => {
  return (
    <div className="flex min-h-screen bg-[#1e1f23] text-white p-8">
      <div className="flex-1 hidden lg:block"></div>

      <div className="w-full max-w-2xl space-y-8 flex flex-col items-center justify-center">
          <FirstWidget />
          <hr className="bg-gray-700 h-[3px] border-0 rounded-full w-full" />
          <GalleryWidget />
          <hr className="bg-gray-700 h-[3px] border-0 rounded-full w-full" />
      </div>
    </div>
  );
};

export default App
