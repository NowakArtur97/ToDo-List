import DOMClasses from "./DOMClasses";

export default {
  board: document.querySelector(`.${DOMClasses.board.main}`),

  noteDeleteAllTrigger: document.querySelector(
    `.${DOMClasses.noteDeleteAllTrigger.main}`
  ),

  noteFormPopUpTrigger: document.querySelector(
    `.${DOMClasses.noteFormPopUpTrigger.main}`
  ),
  noteFormPopUp: document.querySelector(`.${DOMClasses.noteFormPopUp.main}`),
  noteFormPopUpCloseBtn: document.querySelector(
    `.${DOMClasses.noteFormPopUp.closeBtn}`
  ),

  noteForm: document.querySelector(`.${DOMClasses.noteForm.main}`),
  noteFormSubmitBtn: document.querySelector(
    `.${DOMClasses.noteForm.submitBtn}`
  ),
  noteFormColorPicker: document.querySelector(
    `.${DOMClasses.noteForm.noteColorInput}`
  ),

  noteSearchInput: document.querySelector(
    `.${DOMClasses.noteSearch.searchInput}`
  ),
  noteSearchCancelBtn: document.querySelector(
    `.${DOMClasses.noteSearch.cancelBtn}`
  ),
};
