// DEFINE VARS
const selectBoxButtons = document.querySelectorAll('.select-button-box');
const selectSubscriptionButtons = document.querySelectorAll('.select-button-subscription');
const boxNameSection = document.getElementById('box-name');
const subscriptionNameSection = document.getElementById('subscription-name');
const subscriptionFrequencySection = document.getElementById('subscription-frequency');

let boxName = 'Seasonal Sampler Box';
let subscriptionName = 'Weekly';
let subscriptionFrequency = 'Makes ~24 cups/week';

// BOX SELECTION EVENT LISTENER
for (let i = 0; i < selectBoxButtons.length; i++) {
    selectBoxButtons[i].addEventListener("click", function () {
        // First remove selected status from all cards
        selectBoxButtons.forEach(removeSelectedStatus);

        function removeSelectedStatus(selectButton) {
            selectButton.parentElement.parentElement.classList.remove('box-card-selected');
            selectButton.textContent = 'Select';
        }

        // Next add selected status to current card
        selectBoxButtons[i].parentElement.parentElement.classList.add('box-card-selected');
        selectBoxButtons[i].textContent = 'Selected';

        // Then change your selection at the bottom
        if (selectBoxButtons[i].parentElement.parentElement.classList.contains('box-card-seasonal')) {
            boxName = 'Seasonal Sampler Box';
        } else if (selectBoxButtons[i].parentElement.parentElement.classList.contains('box-card-chillax')) {
            boxName = 'Chillax Box';
        } else if (selectBoxButtons[i].parentElement.parentElement.classList.contains('box-card-caffeine')) {
            boxName = 'Caffeine Lovers\' Box';
        } else if (selectBoxButtons[i].parentElement.parentElement.classList.contains('box-card-fun')) {
            boxName = 'Fun in the Sun Box';
        }
        boxNameSection.textContent = boxName;
    });

}

// SUBSCRIPTION SELECTION EVENT LISTENER
for (let i = 0; i < selectSubscriptionButtons.length; i++) {
    selectSubscriptionButtons[i].addEventListener("click", function () {
        // First remove selected status from all cards
        selectSubscriptionButtons.forEach(removeSelectedStatus);

        function removeSelectedStatus(selectButton) {
            selectButton.parentElement.classList.remove('subscription-card-selected');
            selectButton.textContent = 'Select';
        }

        // Next add selected status to current card
        selectSubscriptionButtons[i].parentElement.classList.add('subscription-card-selected');
        selectSubscriptionButtons[i].textContent = 'Selected';

        // Then change your selection at the bottom
        if (selectSubscriptionButtons[i].parentElement.classList.contains('subscription-card-weekly')) {
            subscriptionName = 'Weekly';
            subscriptionFrequency = '~24 cups/week';
        } else if (selectSubscriptionButtons[i].parentElement.classList.contains('subscription-card-biweekly')) {
            subscriptionName = 'Bi-Weekly';
            subscriptionFrequency = '~12 cups/week';
        } else if (selectSubscriptionButtons[i].parentElement.classList.contains('subscription-card-monthly')) {
            subscriptionName = 'Monthly';
            subscriptionFrequency = '~6 cups/week';
        }

        console.log(subscriptionName);

        subscriptionNameSection.textContent = subscriptionName;
        subscriptionFrequencySection.textContent = subscriptionFrequency;

    });

}