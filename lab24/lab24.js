document.addEventListener("DOMContentLoaded", function() {
    const myDiv = document.querySelector('.myDiv');

    myDiv.addEventListener('mouseover', function() {
        myDiv.style.backgroundColor = 'lightgreen';
    });

    myDiv.addEventListener('mouseout', function() {
        myDiv.style.backgroundColor = 'lightblue';
    });
});