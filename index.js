//Анимация мобильного меню
function menuShow() {
    let start = Date.now();

    let coor = document.getElementById('menu').style.right == "-220px" ? -220 : -20;
    let k = coor == -220 ? 1 : -1;
    let timer = setInterval(function() {

        let timePassed = Date.now() - start;


        if (timePassed >= 200) {
            if (k == -1) {
                document.getElementById('menu').style.right = "-220px"
            } else if (k == 1) {
                document.getElementById('menu').style.right = "-20px"
            }

            clearInterval(timer);
            return;
        }

        draw(timePassed, k, coor);

    }, 20);
}

function draw(timePassed, k, coor) {
    document.getElementById('menu').style.right = coor + k * timePassed / 0.9 + 'px';
}

//Анимация заголовков с текстом
let text_one = "Cultural Center";
let text_two = "Parachutes on the Gulf";

function printText(text, el) {
    let newText = text[0] + "";
    print(el, newText);

    let timer = setInterval(function() {

        newText += text[newText.length]

        if (el.innerHTML == text) {
            clearInterval(timer);
            return;
        }

        print(el, newText);

    }, 60);
}

function print(el, text) {
    el.innerHTML = text;
}

//Отловщик показывается ли элемент
const observer = new IntersectionObserver(entries => {
    // перебор записей
    entries.forEach(entry => {
        // если элемент появился
        if (entry.isIntersecting) {

            const el = entry.target
            const id = el.getAttribute('id')
            const text = el.getAttribute('id') == "text__one" ? text_one : text_two
            printText(text, id)
        }
    });
});