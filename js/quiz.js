// DEFINE VARIABLES
const quizCards = document.querySelectorAll('.quiz-card');
const recommendationButton = document.getElementById('recommendation-button');

// Quiz card event listener function
for (let i = 0; i < quizCards.length; i++) {
    quizCards[i].addEventListener("click", function () {
        quizCards[i].classList.toggle('quiz-card-selected');
        displayNextSection(quizCards[i]);
    });
}

function displayNextSection(quizCard) {
    let nextSection = quizCard.parentElement.parentElement.nextElementSibling;
    nextSection.classList.remove('d-none');
}

// Get Recommendation function
recommendationButton.addEventListener("click", getRecommendation);

function getRecommendation() {
    let seasonalBox = 0;
    let caffeineBox = 0;
    let chillaxBox = 0;
    let funBox = 0;
    for (let i = 0; i < quizCards.length; i++) {
        cardClassList = quizCards[i].classList;
        if (cardClassList.contains("type-black") && cardClassList.contains("quiz-card-selected")) {
            caffeineBox += 1;
        } else if (cardClassList.contains("type-green") && cardClassList.contains("quiz-card-selected")) {
            chillaxBox += 1;
            funBox += 1;
        } else if (cardClassList.contains("type-herbal") && cardClassList.contains("quiz-card-selected")) {
            chillaxBox += 1;
        } else if (cardClassList.contains("type-white") && cardClassList.contains("quiz-card-selected")) {
            funBox += 1;
        } else if (cardClassList.contains("type-oolong") && cardClassList.contains("quiz-card-selected")) {
            seasonalBox += 1;
        } else if (cardClassList.contains("type-puerh") && cardClassList.contains("quiz-card-selected")) {
            caffeineBox += 1;
        } else if (cardClassList.contains("type-matcha") && cardClassList.contains("quiz-card-selected")) {
            funBox += 1;
        } else if (cardClassList.contains("not-sure") && cardClassList.contains("quiz-card-selected")) {
            seasonalBox += 1;
        } else if (cardClassList.contains("flavor-pure") && cardClassList.contains("quiz-card-selected")) {
            chillaxBox += 1;
            caffeineBox += 1;
        } else if (cardClassList.contains("flavor-floral") && cardClassList.contains("quiz-card-selected")) {
            funBox += 1;
            chillaxBox += 1;
        } else if (cardClassList.contains("flavor-fruity") && cardClassList.contains("quiz-card-selected")) {
            funBox += 1;
            seasonalBox += 1;
        } else if (cardClassList.contains("flavor-spices") && cardClassList.contains("quiz-card-selected")) {
            seasonalBox += 1;
        } else if (cardClassList.contains("add-honey") && cardClassList.contains("quiz-card-selected")) {
            seasonalBox += 1;
            chillaxBox += 1;
        } else if (cardClassList.contains("add-sugar") && cardClassList.contains("quiz-card-selected")) {
            funBox += 1;
        } else if (cardClassList.contains("add-cream") && cardClassList.contains("quiz-card-selected")) {
            caffeineBox += 1;
        } else if (cardClassList.contains("add-lemon") && cardClassList.contains("quiz-card-selected")) {
            seasonalBox += 1;
            funBox += 1;
        } else if (cardClassList.contains("add-nothing") && cardClassList.contains("quiz-card-selected")) {
            seasonalBox += 1;
            chillaxBox += 1;
        } else if (cardClassList.contains("high-caffeine") && cardClassList.contains("quiz-card-selected")) {
            caffeineBox += 5;
        } else if (cardClassList.contains("medium-caffeine") && cardClassList.contains("quiz-card-selected")) {
            funBox += 1;
            seasonalBox += 1;
            chillaxBox += 1
        } else if (cardClassList.contains("low-caffeine") && cardClassList.contains("quiz-card-selected")) {
            funBox += 1;
            seasonalBox += 1;
            chillaxBox += 1
        } else if (cardClassList.contains("no-caffeine") && cardClassList.contains("quiz-card-selected")) {
            caffeineBox -= 5;
        }
    }

    if (seasonalBox >= Math.max(chillaxBox, funBox, caffeineBox)) {
        loadBoxRecommendation('seasonalBox');
    } else if (chillaxBox > Math.max(seasonalBox, funBox, caffeineBox) || chillaxBox == Math.max(funBox, caffeineBox)) {
        loadBoxRecommendation('chillaxBox');
    } else if (funBox > Math.max(chillaxBox, seasonalBox, caffeineBox) || funBox == caffeineBox) {
        loadBoxRecommendation('funBox');
    } else {
        loadBoxRecommendation('caffeineBox');
    }

    function loadBoxRecommendation(boxName) {
        const recommendationSection = document.getElementById('recommendation');

        if (boxName == 'seasonalBox') {
            imgUrl = 'css/images/subscribe/sampler.jpg';
            document.getElementById('recommendation-img').style.backgroundImage = 'url(' + imgUrl + ')';
            document.getElementById('recommendation-title').textContent = 'Seasonal Sampler Box';
            document.getElementById('recommendation-description').textContent = 'Try something new this month! Our most popular tea subscription box includes a variety of our handpicked seasonal tea blends.';
        } else if (boxName == 'chillaxBox') {
            imgUrl = 'css/images/subscribe/chillax.jpg';
            document.getElementById('recommendation-img').style.backgroundImage = 'url(' + imgUrl + ')';
            document.getElementById('recommendation-title').textContent = 'Chillax Box';
            document.getElementById('recommendation-description').textContent = 'Our most relaxing box yet! We’ve hand-blended several chill vibe teas great for evenings and weekends. Close your eyes and say “Aaahh…”.';
        } else if (boxName == 'funBox') {
            imgUrl = 'css/images/subscribe/fun.jpg';
            document.getElementById('recommendation-img').style.backgroundImage = 'url(' + imgUrl + ')';
            document.getElementById('recommendation-title').textContent = 'Fun in the Sun Box';
            document.getElementById('recommendation-description').textContent = 'Full of fresh and vibrant flavors, our Fun in the Sun box makes a delicious (and healthy!) alternative to high-sugar juices and sodas.';
        } else {
            imgUrl = 'css/images/subscribe/caffeine.jpg';
            document.getElementById('recommendation-img').style.backgroundImage = 'url(' + imgUrl + ')';
            document.getElementById('recommendation-title').textContent = 'Caffeine Lovers\' Box';
            document.getElementById('recommendation-description').textContent = 'High in caffeine and flavor, the caffeine lovers’ box includes potent teas to help you wake up and keep going.';
        }

        recommendationSection.classList.remove('d-none');


    }
}