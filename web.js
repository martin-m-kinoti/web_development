// page preloader
window.addEventListener('load', function() {
    // hide the preloader and show the content
    document.body.classList.remove('loading');
    document.querySelector('.preloader').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
});

const button = document.getElementById('btn');

// Add event listener
button.addEventListener('click', function() {
    const message = document.getElementById('message');
    message.textContent = "Button clicked!";
});