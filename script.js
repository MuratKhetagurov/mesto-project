let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');
let content = document.querySelector('.content');
let profileName = content.querySelector('.profile__name');
let profilePosition = content.querySelector('.profile__position');
let saveProfileButton = popup.querySelector('.popup__save-button');



function editProfileForm() {
    popup.classList.add('popup_opened');
}

function closePopup() {
    popup.classList.remove('popup_opened');
}

function editProfile() {
    let name = popup.querySelector('#profile-name');
    let position = popup.querySelector('#profile-position');

    profileName.textContent = name.value;
    profilePosition.textContent = position.value;

    name.value = profileName.textContent;
    position.value = profilePosition.textContent;

}




editButton.addEventListener('click', editProfileForm);

closeButton.addEventListener('click', closePopup);

saveProfileButton.addEventListener('click', editProfile);



