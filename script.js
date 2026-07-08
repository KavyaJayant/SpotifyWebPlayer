const playButton = document.querySelector(".play-btn");

playButton.addEventListener("click", function () {

    if(playButton.classList.contains("fa-circle-play")){

        playButton.classList.remove("fa-circle-play");
        playButton.classList.add("fa-circle-pause");

    }else{

        playButton.classList.remove("fa-circle-pause");
        playButton.classList.add("fa-circle-play");

    }

});
const likeButton = document.getElementById("likeBtn");

likeButton.addEventListener("click", function () {

    if (likeButton.classList.contains("fa-regular")) {

        likeButton.classList.remove("fa-regular");
        likeButton.classList.add("fa-solid");

        likeButton.style.color = "#1DB954";

    } else {

        likeButton.classList.remove("fa-solid");
        likeButton.classList.add("fa-regular");

        likeButton.style.color = "white";

    }

});