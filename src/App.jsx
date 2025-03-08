/* src/App.jsx */
import React, { useEffect } from 'react';
import { Howl } from 'howler';
import Background from './components/Background';
import PetalsAnimation from './components/PetalsAnimation';
import GreetingCard from './components/GreetingCard';

export default function App() {
  useEffect(() => {
    const sound = new Howl({
      src: [import.meta.env.BASE_URL + 'music/soft-melody.mp3'],
      autoplay: true,
      loop: true,
      volume: 1,
    });
    return () => sound.stop();
  }, []);

  return (
    <div>
      <Background />
      <PetalsAnimation />
      <GreetingCard />
    </div>
  );
}
