function respond(response) {
    const face = document.getElementById('face');
    const mouth = document.getElementById('mouth');

    if (response === 'positive') {
        face.style.transform = 'scale(1.1)';
        mouth.classList.remove('sad');
        mouth.classList.add('smile');
    } else {
        face.style.transform = 'scale(0.9)';
        mouth.classList.remove('smile');
        mouth.classList.add('sad');
    }

    setTimeout(() => {
        face.style.transform = 'scale(1)';
    }, 500);
}
