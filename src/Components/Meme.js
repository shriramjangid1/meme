import React from 'react'
import memeData from'../memeData.js'

const Meme = () => {

const [meme, setMeme] = React.useState({
  topText: "",
  bottomText: "",
  randomImage: "https://i.imgflip.com/30b1gx.jpg"
})

const [allMemeImage, setAllMemeImage] = React.useState(memeData)


function getMemeImage(){
    let memesArr = allMemeImage.data.memes
    const randomMeme = Math.floor(Math.random() * memesArr.length)
    let url = memesArr[randomMeme].url

    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
}


  return (
    <main>
        <div className='form'>
            <input type="text" placeholder='Top Text' className='form-input'/>
            <input type="text" placeholder='Bottom Text' className='form-input'/>
            <button className='form--button' onClick={getMemeImage}> Get a New meme image 🏦</button>
        </div>
        <div className="img-holder">
          <img src={meme.randomImage} alt="image here" className='meme-img'/>
        </div>
    </main>
  )
}

export default Meme