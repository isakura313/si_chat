    
let main_screen = document.querySelector(".main_screen");
//объявление главной оберточной переменной;

var audio2 = document.querySelector(".audio_click");
function play2(){
    audio2.play();
    // тут сообщенька играет
}

    window.onload = first;
    //при загрузке страницы происходит html-контента первой страницы
    function first(){
    main_screen.insertAdjacentHTML("afterBegin", `<div class="greeting">
    <h1 class="greeting__h1">Привет!</h1>
    <p class="greting__p">Я рад приветствовать тебя на странице «Симулятора Переписки». Здесь ты сможешь создать свой симулятор  
        общения нескольких  пользователей!</p>
    <div class="greeting__wrapper">
        <button class="greeting__button">Продолжить</button>
    </div>
</div>`);
let greeting_button = document.querySelector(".greeting__button");


let greetings = document.querySelector(".greeting");

let register = document.querySelector(".register");
greeting_button.onclick = settings;


    

function settings(){
    play2();
    greetings.parentNode.removeChild(greetings);
    main_screen.insertAdjacentHTML("afterbegin", `<div class="settings">
    <h1 class="settings_h1">Первоначальные настройки</h1>
    <div class="settings_wrapper">
    <h1 class="settings_h1">Количество пользователей</h1>
    <select name="" id="" class="settings_select">
        <option value="2" class="settings_select__option2">2</option>
        <option value="3" class="settings_select__option3">3</option>
    </select>    

    <h2 class="settings__h2">Тип чата</h2>
    <select name="social" id="" class="main_screen_settings_select">
        <option value="Telegram" class="settings_select__optionTelegram"> Telegram</option>
        <option value="Viber" disabled class="settings_select__optionViber">Viber</option>
    </select>
</div>
<button class="greeting_button2">Продолжить</button>

</div>`);
let settings_button = document.querySelector(".greeting_button2");
settings_button.onclick = settings2;
let settings = document.querySelector(".settings");
// здесь потом нужно будет дописать условия выбора
// let option = document.querySelector



function settings2(){
    play2();
    settings.parentNode.removeChild(settings);
    main_screen.insertAdjacentHTML("afterbegin",`<div class="register">
    <div class="register_first_form">
        <h2>Первый пользователь</h2>
        <label for="first_name">Имя</label>
        <input type="text" name="first_name" class="first_name">
        <label for="first_lastname">Фамилия</label>
        <input type="text" name="first_lastname" class="first_lastname">
        <label for="first_photo">Ссылка на фотографию</label>
    <input type="text" name="first_photo" class="first_photo">
    </div>
    <div class="register_second_form">
        <h2>Второй пользователь</h2>
        <label for="second_name">Имя</label>
        <input type="text" name="second_name" class="second_name">
        <label for="second_lastname">Фамилия</label>
        <input type="text" name="second_lastname" class="second_lastname">
        <label for="second_photo">Ссылка на фотографию</label>
    <input type="text" name="second_photo" class="second_photo">
    </div>
    <div class="register_third_form">
        <h2>Третий пользователь</h2>
        <label for="third_name">Имя</label>
        <input type="text" name="third_name" class="third_name">
        <label for="third_lastname">Фамилия</label>
        <input type="text" name="third_lastname" class="third_lastname">
        <label for="third_photo">Ссылка на фотографию</label>
    <input type="text" name="third_photo" class="third_photo">
    <button class="greeting_button_3">Продолжить</button>

    </div>`);
    let button_setting2 = document.querySelector(".greeting_button_3");
    button_setting2.onclick = chat;
    let register = document.querySelector(".register");



function chat(){
    play2();
// здесь происходит невероятно мощное ООП, держитесь
    let User1 = new User(document.querySelector(".first_name").value,document.querySelector(".first_lastname").value, document.querySelector(".first_photo").value,1);
    let User2 = new User(document.querySelector(".second_name").value,document.querySelector(".second_lastname").value, document.querySelector(".second_photo").value,2);
    let User3 = new User(document.querySelector(".third_name").value,document.querySelector(".third_lastname").value, document.querySelector(".third_photo").value,3);
    register.parentNode.removeChild(register);
    

    //здесь происходит загрузка чата
    main_screen.insertAdjacentHTML("afterbegin", `<div class="chat">
    <h1 class="chat__h1">
        Время общаться!</h1>
    <div class="chat_wrapper">
        <textarea rows="7" cols="20" placeholder="Введите сообщение..." class="chat__textarea"></textarea>

    </div>
    <div class="chat_button_stack button_stack">
    <button class="chat_button_user1 success">${User1.name}</button>
    <button class="chat_button_user2 warning">${User2.name}</button>
    <button class="chat_button_user3 error">${User3.name}</button>
    </div>
</div>
<div class="main_dialog">

</div>`);
let main_dialog = document.querySelector(".main_dialog");
let user_button_1 = document.querySelector(".chat_button_user1");
let user_button_2 = document.querySelector(".chat_button_user2");
let user_button_3 = document.querySelector(".chat_button_user3");
let text = document.querySelector(".chat__textarea");

var audio = document.querySelector(".audio_telegram");
function play(){
    audio.play();
    // тут сообщенька играет
}
//здесь происходит генерация сообщения
function generic_message(use,id){
    main_dialog.insertAdjacentHTML("beforeEnd", `
    <div class="main_dialog_message">
    <div class="main_dialog_message_ava" style="background-image:url(${use.ava});"  ></div>
    <div class="main_dialog_nick"> <span class="${use.id} main_nick"> ${use.name}${use.lastname}</span>
    <div class="main_dialog_message_text">   ${text.value} </div></div>
</div>`);

main_dialog_message_ava = document.querySelector(".main_dialog_message_ava");
main_nick = document.querySelector(".main_nick");
const array_colors = ["#FF6A00","#9741D7","#FF3740","#4562F0","#00BA99"];
let ava = User1.ava;
play();
}



// просто превосходно написанный обработчик. Плей точно нужно перенести
user_button_1.onclick = function(){
    generic_message(User1);
};


user_button_2.onclick = function(){    
    generic_message(User2);
}
user_button_3.onclick = function(){
    generic_message(User3);
}
}
}
}
}




