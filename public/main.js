//Javascrip Client Side Code

// function for alert
function showAlert() {
    alert('Hello from main.js, YAAMPUN MARCILLE CAKEP BENER ');
}


// Button to open modal
const openModalBtn = document.getElementById('openModalBtn');
// Modal element
const modal = document.getElementById('myModal');
// Button to close modal
const closeModalBtn = document.getElementById('closeModalBtn');
const closeModalBtn2 = document.getElementById('closeModalBtn2');

// Image inside the modal
const modalImage = document.getElementById('modalImage');

// Image URL to show in the modal
const imageUrl = 'https://i.redd.it/bc95zcsmp52d1.gif';

// Function to open modal and show image
openModalBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modalImage.src = imageUrl;
});

// Function to close the modal
closeModalBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
});

// Close modal if clicked outside of the image
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.add('hidden');
    }
});

const closeModal = () => {
    modal.classList.add('hidden'); // Hide modal
};

closeModalBtn2.addEventListener('click', closeModal);

