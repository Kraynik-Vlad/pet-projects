/* Масив, перечень об'ектов (об'ект - потому что text/image) */
let phrases = [
  { text: 'отправить другу смешную гифку', image: 'https://code.s3.yandex.net/web-code/procrastinate/1.gif' },
  { text: 'посмотреть скидки на авиабилеты', image: 'https://code.s3.yandex.net/web-code/procrastinate/2.png' },
  { text: 'разобраться, о чём поют рэперы', image: 'https://code.s3.yandex.net/web-code/procrastinate/3.png' },
  { text: 'Юрий Дудь', image: 'https://code.s3.yandex.net/web-code/procrastinate/4.png' },
  { text: 'расставить книги на полке по цвету', image: 'https://code.s3.yandex.net/web-code/procrastinate/5.png' },
  { text: 'читать про зарплаты в Сан-Франциско', image: 'https://code.s3.yandex.net/web-code/procrastinate/6.png' },
  { text: 'прочитать новости и ужаснуться в комментариях', image: 'https://code.s3.yandex.net/web-code/procrastinate/7.png' },
  { text: 'попасть в поток грустных песен и вспомнить все ошибки молодости', image: 'https://code.s3.yandex.net/web-code/procrastinate/8.png' },
  { text: 'посмотреть трейлер сериала и заодно первый сезон', image: 'https://code.s3.yandex.net/web-code/procrastinate/9.png' },
  { text: 'проверить непрочитанное в Telegram-каналах', image: 'https://code.s3.yandex.net/web-code/procrastinate/10.png' }
];

/* Создание функции/  Math.floor -большее число от деления/
 Math.random -рандомное число/ * arr.length -умножение на количество эл. в масиве/
  return arr[randIndex] -возврат результата функции(getRandomElement(arr)) */
function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

/*подключение классов html к JS*/
let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

/*Обработка события, тут - клик на иконке "Еще идеи"/
button - к кому обращаемся/.addEventListener - функция/
  'click' - указание события/ function () { - что делаем ....*/
button.addEventListener('click', function () {
  let randomElement = getRandomElement(phrases); /*создаем элемент, резул. функции передаем в элемент*/
  smoothly(phrase, 'textContent', randomElement.text) /*smoothly-фреймворк*/
  smoothly(image, 'src', randomElement.image)/**/

/*условная конструкция, уменьшение шрифта если к-ство занаков превышает 40*/
  if (randomElement.text.length > 40) {
    advice.style.fontSize = '33px';
  } else {
    advice.style.fontSize = '42px';
  }
});

/*Цикл, как 3 проклика на "Еще идеи"*/
for (let i = 0; i <= 2; i = i + 1) {
  smoothly(phrase, 'textContent' , phrases[i].text)
  smoothly(image, 'src', phrases[i].image)
};
