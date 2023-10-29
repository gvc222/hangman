import './App.css';
import React, { useState, useEffect } from 'react';
import { Header } from './Components/Header';
import { Popup } from './Components/Popup';
import { Letters } from './Components/Letters';
import { Figure } from './Components/Figure';
import { Word } from './Components/Word';
import { Notification } from './Components/Notification';
import { showNotification as show} from './helpers/helpers';

const App = () => {

  const words = ['arrangement',
  'attempt',
  'border',
  'brick',
  'customs',
  'discussion',
  'essential',
  'exchange',
  'explanation',
  'fireplace',
  'floating',
  'garage',
  'grabbed',
  'grandmother',
  'heading',
  'independent',
  'instant',
  'manufacturing',
  'mathematics',
  'memory',
  'mysterious',
  'neighborhood',
  'occasionally',
  'official',
  'policeman',
  'positive',
  'possibly',
  'practical',
  'promised',
  'remarkable',
  'require',
  'satisfied',
  'scared',
  'selection',
  'shaking',
  'shallow',
  'simplest',
  'slight',
  'slope',
  'species',
  'thumb',
  'tobacco',
  'treated',
  'vessels',
'belch',
'bogus',
'blubber',
'nincompoop',
'burp',
'belly button',
'booger',
'hullabaloo',
'bamboozle',
'dollop',
'dipthong',
'gnarly',
'goober',
'lollygag',
'malarkey',
'abruptly',
'absurd',
'abyss',
'affix',
'askew',
'avenue',
'awkward',
'axiom',
'azure',
'bagpipes',
'bandwagon',
'banjo',
'bayou',
'beekeeper',
'bikini',
'blitz',
'blizzard',
'boggle',
'bookworm',
'boxcar',
'boxful',
'buckaroo',
'buffalo',
'buffoon',
'buxom',
'buzzard',
'buzzing',
'buzzwords',
'caliph',
'cobweb',
'cockiness',
'croquet',
'crypt',
'curacao',
'cycle',
'daiquiri',
'dirndl',
'disavow',
'dizzying',
'duplex',
'dwarves',
'embezzle',
'equip',
'espionage',
'euouae',
'exodus',
'faking',
'fishhook',
'fixable',
'fjord',
'flapjack',
'flopping',
'fluffiness',
'flyby',
'foxglove',
'frazzled',
'frizzled',
'fuchsia',
'funny',
'gabby',
'galaxy',
'galvanize',
'gazebo',
'giaour',
'gizmo',
'glowworm',
'glyph',
'gnarly',
'gnostic',
'gossip',
'grogginess',
'haiku',
'haphazard',
'hyphen',
'iatrogenic',
'icebox',
'injury',
'ivory',
'ivy',
'jackpot',
'jaundice',
'jawbreaker',
'jaywalk',
'jazziest',
'jazzy',
'jelly',
'jigsaw',
'jinx',
'jiujitsu',
'jockey',
'jogging',
'joking',
'jovial',
'joyful',
'juicy',
'jukebox',
'jumbo',
'kayak',
'kazoo',
'keyhole',
'khaki',
'kilobyte',
'kiosk',
'kitsch',
'kiwifruit',
'klutz',
'knapsack',
'larynx',
'lengths',
'lucky',
'luxury',
'lymph',
'marquis',
'matrix',
'megahertz',
'microwave',
'mnemonic',
'mystify',
'naphtha',
'nightclub',
'nowadays',
'numbskull',
'nymph',
'onyx',
'ovary',
'oxidize',
'oxygen',
'pajama',
'peekaboo',
'phlegm',
'pixel',
'pizazz',
'pneumonia',
'polka',
'pshaw',
'psyche',
'puppy',
'puzzling',
'quartz',
'queue',
'quips',
'quixotic',
'quiz',
'quizzes',
'quorum',
'razzmatazz',
'rhubarb',
'rhythm',
'rickshaw',
'schnapps',
'scratch',
'shiv',
'snazzy',
'sphinx',
'spritz',
'squawk',
'staff',
'strength',
'strengths',
'stretch',
'stronghold',
'stymied',
'subway',
'swivel',
'syndrome',
'thriftless',
'thumbscrew',
'topaz',
'transcript',
'transgress',
'transplant',
'triphthong',
'twelfth',
'twelfths',
'unknown',
'unworthy',
'unzip',
'uptown',
'vaporize',
'vixen',
'vodka',
'voodoo',
'vortex',
'voyeurism',
'walkway',
'waltz',
'wave',
'wavy',
'waxy',
'wellspring',
'wheezy',
'whiskey',
'whizzing',
'whomever',
'wimpy',
'witchcraft',
'wizard',
'woozy',
'wristwatch',
'wyvern',
'xylophone',
'yachtsman',
'yippee',
'yoked',
'youthful',
'yummy',
'zephyr',
'zigzag',
'zigzagging',
'zilch',
'zipper',
'zodiac',
'zombie',
  ];
  const [ selectedWord, setSelectedWord ] = useState(words[Math.floor(Math.random() * words.length)]);

  const [ playable, setPlayable ] = useState(true);
  const [ correctLetters, setCorrectLetters ] = useState([]);
  const [ wrongLetters, setWrongLetters ] = useState([]);
  const [ showNotification, setShowNotification ] = useState(false);

  useEffect(() => {
    const handleKeyDown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter])
          } else {
            show(setShowNotification);
          }
        } else {
          if (!wrongLetters.includes(letter)) {
            setWrongLetters(currentLetters => [...currentLetters, letter])
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [correctLetters, wrongLetters, playable, selectedWord])

  function playAgain() {
    setPlayable(true);

    setCorrectLetters([])
    setWrongLetters([])

    const random = Math.floor(Math.random() * words.length);
    const newSelectedWord = words[random];
    setSelectedWord(newSelectedWord);
  }
  return (
    <div className="app">
      <Header />
      <div className="game-container">
        <Figure wrongLetters={wrongLetters}/>
        <Letters wrongLetters={wrongLetters}/>
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
      <Notification showNotification={showNotification}/>
    </div>
  )
}

export default App;
