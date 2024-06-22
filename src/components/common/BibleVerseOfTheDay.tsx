import React from 'react'

async function getData() {
    let verse = (
      await (
        await fetch(`https://bible-api.com/?random=verse`)
      ).json()
    );

    console.log(verse)
   
    return {verse};
  }

const BibleVerseOfTheDay = async() => {
    const data = await getData()

  return (
    <div>BibleVerseOfTheDay</div>
  )
}

export default BibleVerseOfTheDay