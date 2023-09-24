const main = document.querySelector(".main");
const typeArea = document.querySelector(".typingArea");
const btn = document.querySelector(".btn");

const words = [
  "The @quick brown fox jumps over the lazy #dog 12345.",
  "Life is a journey that must be traveled no matter how %badly.",
  "The $world is full of %wonders, waiting for us to explore!",
  "Nature has a way of %surprising us with its beauty & power.",
  "In every #walk with #nature, one receives far more than he seeks.",
  "The #Earth does not #belong to us; we #belong to the Earth.",
  "Every drop of water %counts in the $ocean of life.",
  "The ^mountains are calling, and I must go.",
  "The $sunrise, of course, doesn't #care if we watch it or not.",
  "Life is like a {camera}. #Focus on what's #important, capture the good times, and if things don't work out, take another shot.",
  "The more you #read, the more things you will know. The more that you learn, the more places you'll go!",
  "The only way to do %great work is to %love what you do.",
  "Believe you can and you're halfway there. - Theodore ^Roosevelt",
  "To #succeed in life, you need two things: $ignorance and confidence. - Mark ^Twain",
  "You miss 100% of the shots you don't take. - Wayne #Gretzky",
];

const game = {
  start: 0,
  end: 0,
  user: "",
  arrText: "",
};

btn.addEventListener("click", () => {
  if (btn.textContent === "Start") {
    play();
    typeArea.value = "";
    typeArea.disabled = false;
  } else if (btn.textContent === "Done") {
    typeArea.disabled = true;
    main.style.borderColor = "white";
    end();
  }
});

function play() {
  let randText = Math.floor(Math.random() * words.length);
  main.textContent = words[randText];
  game.arrText = words[randText];
  main.style.borderColor = "#c8c8c8";
  btn.textContent = "Done";
  const duration = new Date();
  game.start = duration.getTime();
}

function end() {
  const duration = new Date();
  game.end = duration.getTime();
  const totalTime = (game.end - game.start) / 1000;
  game.user = typeArea.value;
  const correct = results();
  main.style.borderColor = "white";
  main.innerHTML = `Time: ${totalTime} Score: ${correct.score} out of ${correct.total}`;
  btn.textContent = "Start";
}

function results() {
  let valueOne = game.arrText.split(" ");
  let valueTwo = game.user.split(" ");
  let score = 0;
  valueOne.forEach((word, idx) => {
    if (word === valueTwo[idx]) {
      score++;
    }
  });

  return { score, total: valueOne.length };
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Check for the Enter key
    if (btn.textContent === "Start") {
      play();
      typeArea.value = "";
      typeArea.disabled = false;
      typeArea.focus(); // Set focus on the typing text area
    } else if (btn.textContent === "Done") {
      typeArea.disabled = true;
      main.style.borderColor = "white";
      end();
    }
  }
});
