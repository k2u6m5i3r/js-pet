'use strict'
console.log('in JS')

function buildingPage(data) {
  const arrowRigth = document.querySelector('.control__rigth')
  console.log(data);
  let keys = Object.keys(data)

  arrowRigth.addEventListener('click', () => {
    const maxSizeDictionary = keys.length
    const randomNumberWord = randomNumber(maxSizeDictionary)
    const nextWord = keys[randomNumberWord]
    setWord(nextWord, data[nextWord].transcription, data[nextWord].translate)
  })
}

function randomNumber(maxNumber) {
  return Math.floor(Math.random() * maxNumber)
}

function setWord(word, transcription, translate) {
  const wordElem = document.getElementById('content__word')
  const transcriptionElem = document.getElementById('content__transcription')
  const translateElem = document.getElementById('content__translation')
  if (wordElem) {
    wordElem.textContent = word
  }
  if (transcriptionElem) {
    transcriptionElem.textContent = transcription
  }
  if (translateElem) {
    translateElem.textContent = translate
  }
}

async function loadJSON() {
  // const rqs = await fetch('./data/dictionary3500.json')
  //for test dictionary
  const rqs = await fetch('./data/dictionary.json')
  const data = await rqs.json()
  buildingPage(data)
}
loadJSON()
