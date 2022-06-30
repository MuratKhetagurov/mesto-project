const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 


const popupProfile = document.querySelector('#popup-profile');
const buttonEdit = document.querySelector('.profile__edit-button');
const profileEditCloseButton = popupProfile.querySelector('#editProfileCloseButton');
const content = document.querySelector('.content');
const profileForm = popupProfile.querySelector('#popup__profile-form');
const nameInput = profileForm.querySelector('#profile-name');
const jobInput = profileForm.querySelector('#profile-position');
const profileName = content.querySelector('.profile__name');
const profilePosition = content.querySelector('.profile__position');
const popupAddPlace = document.querySelector('#popup-add');
const photoAddButton = document.querySelector('.profile__add-button');
const placeAddCloseButton = popupAddPlace.querySelector('#placeAddCloseButton');
const cardsContainer = document.querySelector('.elements');
const placeName = popupAddPlace.querySelector('#place-name');
const placeLink = popupAddPlace.querySelector('#place-link');

const popup = document.querySelectorAll('.popup');
    const popupImage = document.querySelector('#popup-image');
    const popupImageImage = document.querySelector('.popup__big-image');
    const popupImageDescription = document.querySelector('.popup__description');
  
//функция открытия попап
function openPopup(popup) {
  popup.classList.add('popup_opened')
}

//функция закрытия попап
function closePopup(popup) {
  popup.classList.remove ('popup_opened')
}

//функция открытия модалки с информацией о профиле
function openEditProfileForm() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profilePosition.textContent;
}

//функция закрытия модалки с информацией о профиле
function closeEditProfileForm() {
closePopup(popupProfile);  
}

//функция открытия модалки с формой добавления карточки
function openAddPlaceForm() {
  openPopup(popupAddPlace);
    placeName.value = '';
    placeLink.value = '';  
  }

//функция закрытия модалки с формой добавления карточки
function closeAddPlaceForm() {
closePopup(popupAddPlace); 
}

//функция сохранения информации о профиле
function saveProfileForm (evt) {    
  evt.preventDefault(); 
  profileName.textContent = nameInput.value;
  profilePosition.textContent = jobInput.value; 
  closeEditProfileForm();    
}




initialCards.forEach((elem) => { addCard(cardsContainer, addCard(elem.name, elem.link));
});



  function createCard(cardName, cardLink) {
    const elementTemplate = document.querySelector('#element-template').content;
    const elementPlace = elementTemplate.querySelector("#element").cloneNode(true);
    elementPlace.querySelector('#element__image').src = cardLink;
    elementPlace.querySelector('#element__name').textContent = cardName;
    elementPlace.querySelector('#element__image').alt = cardName;
  
    

    document.querySelector('.element__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like-button_active');});

        const deleteButton = document.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', function () {
        const listelement = deleteButton.closest('.element');
        listelement.remove();
              });

    const placeImage = document.querySelector('#element__image');


    
    
    placeImage.addEventListener('click', function () {
        popupImage.classList.add('popup_opened');
        popupImageImage.src = cardLink;
        popupImageImage.alt = cardName;
        popupImageDescription.textContent = cardName;
              });

    const popupImageCloseButton = document.querySelector('#popup-image-close');
    popupImageCloseButton.addEventListener('click', function () {
        popupImage.classList.remove('popup_opened');
                      });
                      
          return elementPlace;

  }
  


  function addCard(container, element) {
    container.prepend(element);
  }

  
  
 










//Слушатели событий

//Слушатель на добавление новой карточки
popupAddPlace.addEventListener('submit', function(evt) { 
  evt.preventDefault(); 
const name = popupAddPlace.querySelector('#place-name');
const link = popupAddPlace.querySelector('#place-link');
    
    addCard(cardsContainer, createCard(name.value, link.value));
    closeAddPlaceForm();   
});

//Слушатель на открытие модалки с формой добавления фото (карточки)
photoAddButton.addEventListener('click', openAddPlaceForm);

//Слушатель на закрытие модалки с формой добавления фото (карточки)
placeAddCloseButton.addEventListener('click', closeAddPlaceForm);

//Слушатель на закрытие модалки с формой редактирования профиля
profileEditCloseButton.addEventListener('click', closeEditProfileForm);

//Слушатель на открытие модалки с формой редактирования профиля
buttonEdit.addEventListener('click', openEditProfileForm);

//Слушатель на сохранение модалки с формой редактирования профиля
profileForm.addEventListener('submit', saveProfileForm); 



