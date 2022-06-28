let popupProfile = document.querySelector('#popup-profile');
let editButton = document.querySelector('.profile__edit-button');
let editProfileCloseButton = popupProfile.querySelector('#editProfileCloseButton');
let content = document.querySelector('.content');
let formElement = popupProfile.querySelector('#popup__profile-form');
let nameInput = formElement.querySelector('#profile-name');
let jobInput = formElement.querySelector('#profile-position');
let profileName = content.querySelector('.profile__name');
let profilePosition = content.querySelector('.profile__position');
let popupAddPlace = document.querySelector('#popup-add');
let addButton = document.querySelector('.profile__add-button');
let placeAddCloseButton = popupAddPlace.querySelector('#placeAddCloseButton');
const places = document.querySelector('.elements');
const placeName = popupAddPlace.querySelector('#place-name');
const placeLink = popupAddPlace.querySelector('#place-link');
const elementTemplate = document.querySelector('#element-template').content;





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

  const placeInfo = initialCards.map(function (element) {
    return {
      name: element.name,
      link: element.link
    };
  });

  function render() {
    placeInfo.forEach(renderCard);
  }

  function renderCard({ name, link }) {
    const elementPlace = elementTemplate.querySelector("#element").cloneNode(true);
    elementPlace.querySelector('#element__image').src = link;
    elementPlace.querySelector('#element__name').textContent = name;
    elementPlace.querySelector('#element__image').alt = name;
  
    places.prepend(elementPlace);
    document.querySelector('.element__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like-button_active');});

        const deleteButton = document.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', function () {
        const listelement = deleteButton.closest('.element');
        listelement.remove();
              });

    const placeImage = document.querySelector('#element__image');
    const popupImage = document.querySelector('.popup-image');
    const popupImageImage = document.querySelector('.popup-image__image');
    const popupImageDescription = document.querySelector('.popup-image__description');
    
    placeImage.addEventListener('click', function () {
        popupImage.classList.add('popup-image__opened');
        popupImageImage.src = link;
        popupImageImage.alt = name;
        popupImageDescription.textContent = name;
              });

    const popupImageCloseButton = document.querySelector('#popup-image-close');
    popupImageCloseButton.addEventListener('click', function () {
        popupImage.classList.remove('popup-image__opened');
                      });

  }
  
  render();


function createPlace (placeLinkValue, placeNameValue) {
    const elementPlace = elementTemplate.querySelector('#element').cloneNode(true);
    elementPlace.querySelector('#element__image').src = placeLinkValue;
    elementPlace.querySelector('#element__name').textContent = placeNameValue;
    elementPlace.querySelector('#element__image').alt = placeNameValue;
    places.prepend(elementPlace);
    document.querySelector('.element__like-button').addEventListener('click', function(evt) {
        evt.target.classList.toggle('element__like-button_active');});

    const deleteButton = document.querySelector('.element__delete-button');
    deleteButton.addEventListener('click', function () {
    const listelement = deleteButton.closest('.element');
    listelement.remove();
          }); 

    const placeImage = document.querySelector('#element__image');
    const popupImage = document.querySelector('.popup-image');
    const popupImageImage = document.querySelector('.popup-image__image');
    const popupImageDescription = document.querySelector('.popup-image__description');
    
    placeImage.addEventListener('click', function () {
        popupImage.classList.add('popup-image__opened');
        popupImageImage.src = placeLinkValue;
        popupImageImage.alt = placeNameValue;
        popupImageDescription.textContent = placeNameValue;
              });

    const popupImageCloseButton = document.querySelector('#popup-image-close');
    popupImageCloseButton.addEventListener('click', function () {
        popupImage.classList.remove('popup-image__opened');
                      });

}

popupAddPlace.addEventListener('submit', function(evt) {
    
    evt.preventDefault();

    createPlace(placeLink.value, placeName.value);
    
    closeAddPlaceForm();

    

});





function editProfileForm() {
    popupProfile.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profilePosition.textContent;

}

function closeProfilePopup() {
    popupProfile.classList.remove('popup_opened');
    
}



function closeAddPlaceForm() {
    popupAddPlace.classList.remove('popup_opened');
    
}


function addPlaceForm() {
    popupAddPlace.classList.add('popup_opened');
    placeName.value = '';
    placeLink.value = '';

}



function editProfile (evt) {
    

    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profilePosition.textContent = jobInput.value;

    nameInput.value = profileName.textContent;
    jobInput.value = profilePosition.textContent;

    
    closeProfilePopup();
    
}



addButton.addEventListener('click', addPlaceForm);

placeAddCloseButton.addEventListener('click', closeAddPlaceForm);

editProfileCloseButton.addEventListener('click', closeProfilePopup);

editButton.addEventListener('click', editProfileForm);

formElement.addEventListener('submit', editProfile); 



