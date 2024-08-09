document.addEventListener("DOMContentLoaded", function() {
    var animatedBox = document.getElementById('animatedBox');
    var typewriter = document.getElementById('typewriter');
    var text = "ha!?...Who am i ?!!";

    setTimeout(function() {
        animatedBox.style.left = '50px';
    }, 500);

    function type() {
        let i = 0;
        function typing() {
            if (i < text.length) {
                typewriter.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }
        typing();
    }

    setTimeout(type, 1500);
});

document.addEventListener("DOMContentLoaded", function() {
    var animatedBox = document.getElementById('animatedBox-2');
    var typewriter = document.getElementById('typewriter-2');
    var text = "I am TAKING Programmer";

    setTimeout(function() {
        animatedBox.style.left = '50px';
    }, 500);

    function type() {
        let i = 0;
        function typing() {
            if (i < text.length) {
                typewriter.innerHTML += text.charAt(i);
                i++;
                setTimeout(typing, 100);
            }
        }
        typing();
    }

    setTimeout(type, 1500);
});