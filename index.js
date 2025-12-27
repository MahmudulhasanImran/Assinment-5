function getElement(id) {
   const element = document.getElementById(id);
  return element
}

// Parent Container for Delegation
const parentDiv = getElement('parentdiv');

parentDiv.addEventListener('click', function (e) {
    
    const target = e.target;
    const card = target.closest('.bg-white.shadow-md');
    
    if (!card) return;

    // Get Data from the Card
    const cardTitle = card.querySelector('h3.font-semibold').innerText;
    const number = card.querySelector('h3.font-bold').innerText;

    //  heart icon---
    if (target.classList.contains('fa-heart')) {
        const heartCountDisplay = getElement('heart-count');
        heartCountDisplay.innerText = Number(heartCountDisplay.innerText) + 1;
        target.classList.toggle('text-red-500');
    }

    // coppy btn---
    if (target.closest('.copyBtn')) {
        navigator.clipboard.writeText(number).then(() => {
            alert(`Copied: ${number}`);
            const copyCountDisplay = getElement('copy-count');
            copyCountDisplay.innerText = Number(copyCountDisplay.innerText) + 1;
        });
    }

     // call btn---
    if (target.closest('.callBtn')) {
        const coinCountDisplay = getElement('coin-count');
        const currentCoins = Number(coinCountDisplay.innerText);

        if (currentCoins >= 20) {
            coinCountDisplay.innerText = currentCoins - 20;
            alert(`📞 Calling ${cardTitle}: ${number}`);

            // Update History
            const historyCard = getElement('history-card');
            const currentTime = new Date().toLocaleTimeString();
            
            const historyEntry = document.createElement('div');
            historyEntry.className = "bg-gray-100 px-3 py-2 rounded-lg mt-4 flex justify-between items-center";
            historyEntry.innerHTML = `
                <div>
                    <h1 class="font-bold text-sm">${cardTitle}</h1>
                    <h2 class="font-bold text-xs">${number}</h2>
                </div>
                <span class="text-[10px] text-gray-500"><i class="fa-regular fa-clock"></i> ${currentTime}</span>
            `;
            historyCard.prepend(historyEntry); // Adds latest call to top
        } else {
            alert('Insufficient coins! You need 20 coins to make a call.');
        }
    }
})
