const generateMemeBtn = document.querySelector(".meme-genrator .meme-genrator-btn");
const memeImage = document.querySelector(".meme-genrator img");
const memeTitle = document.querySelector(".meme-genrator .meme-title");
const memeAuthor = document.querySelector(".meme-genrator .meme-author");

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

const generateMeme = () => {
    fetch("https://api.imgflip.com/get_memes") // Using Imgflip API to get meme templates
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            const randomMeme = memes[Math.floor(Math.random() * memes.length)];

            updateDetails(randomMeme.url, randomMeme.name, "Imgflip");
        })
        .catch(error => console.error("Error fetching meme:", error));
};

generateMemeBtn.addEventListener("click", generateMeme);

generateMeme(); // Generate a meme on page load
