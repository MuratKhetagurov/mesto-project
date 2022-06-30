const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const popupProfile = document.querySelector("#popup-profile");
const buttonEdit = document.querySelector(".profile__edit-button");
const profileEditCloseButton = popupProfile.querySelector(
  "#editProfileCloseButton"
);
const content = document.querySelector(".content");
const profileForm = popupProfile.querySelector("#popup__profile-form");
const nameInput = profileForm.querySelector("#profile-name");
const jobInput = profileForm.querySelector("#profile-position");
const profileName = content.querySelector(".profile__name");
const profilePosition = content.querySelector(".profile__position");
const popupAddPlace = document.querySelector("#popup-add");
const photoAddButton = document.querySelector(".profile__add-button");
const placeAddCloseButton = popupAddPlace.querySelector("#placeAddCloseButton");
const cardsContainer = document.querySelector(".elements");
const placeName = popupAddPlace.querySelector("#place-name");
const placeLink = popupAddPlace.querySelector("#place-link");
const popupList = document.querySelectorAll(".popup");
const popupImage = document.querySelector("#popup-image");
const popupImageImage = document.querySelector(".popup__big-image");
const popupImageDescription = document.querySelector(".popup__description");
const popupImageCloseButton = popupImage.querySelector("#popup-image-close");
const elementTemplate = document.querySelector("#element-template").content;

//функция открытия попап
function openPopup(popupList) {
  popupList.classList.add("popup_opened");
}

//функция закрытия попап
function closePopup(popupList) {
  popupList.classList.remove("popup_opened");
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

//функция закрытия модалки с большой картинкой
function closeBigImage() {
  closePopup(popupImage);
}

//функция открытия модалки с формой добавления карточки
function openAddPlaceForm() {
  openPopup(popupAddPlace);
  placeName.value = "";
  placeLink.value = "";
}

//функция закрытия модалки с формой добавления карточки
function closeAddPlaceForm() {
  closePopup(popupAddPlace);
}

//функция сохранения информации о профиле
function saveProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profilePosition.textContent = jobInput.value;
  closeEditProfileForm();
}

initialCards.forEach((elem) => {
  addCard(cardsContainer, createCard(elem.name, elem.link));
});

function createCard(cardName, cardLink) {
  const elementPlace = elementTemplate
    .querySelector("#element")
    .cloneNode(true);
  const elementImage = elementPlace.querySelector("#element__image");
  elementImage.src = cardLink;
  elementPlace.querySelector("#element__name").textContent = cardName;
  elementImage.alt = cardName;

  elementPlace
    .querySelector(".element__like-button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("element__like-button_active");
    });

  const buttonDelete = elementPlace.querySelector(".element__delete-button");
  buttonDelete.addEventListener("click", function () {
    const listElement = buttonDelete.closest(".element");
    listElement.remove();
  });

  elementImage.addEventListener("click", function () {
    openPopup(popupImage);
    popupImageImage.src = cardLink;
    popupImageImage.alt = cardName;
    popupImageDescription.textContent = cardName;
  });

  return elementPlace;
}

function addCard(container, element) {
  container.prepend(element);
}

//Слушатели событий

//Слушатель на добавление новой карточки
popupAddPlace.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const name = placeName;
  const link = placeLink;

  addCard(cardsContainer, createCard(name.value, link.value));
  closeAddPlaceForm();
});

//Слушатель на открытие модалки с формой добавления фото (карточки)
photoAddButton.addEventListener("click", openAddPlaceForm);

//Слушатель на закрытие модалки с формой добавления фото (карточки)
placeAddCloseButton.addEventListener("click", closeAddPlaceForm);

//Слушатель на закрытие модалки с формой редактирования профиля
profileEditCloseButton.addEventListener("click", closeEditProfileForm);

//Слушатель на открытие модалки с формой редактирования профиля
buttonEdit.addEventListener("click", openEditProfileForm);

//Слушатель на сохранение модалки с формой редактирования профиля
profileForm.addEventListener("submit", saveProfileForm);

//слушатель на закрытие модалки с большой картинкой
popupImageCloseButton.addEventListener("click", closeBigImage);
