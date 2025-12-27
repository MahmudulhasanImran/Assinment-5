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
})
