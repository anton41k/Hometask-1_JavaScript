import getRefs from '../getRefs';
import formTemplat from '../../template/formTemplat.hbs';
import { CATEGORY } from '../../CONST';
import { eventListenerEditNote } from '../eventListener';

const refs = getRefs();

export const renderFormEditNote = (note, idNote) => {
  refs.contentModal.innerHTML = formTemplat(CATEGORY);
  document.getElementById('input-name').setAttribute('value', note.name);
  document.getElementById('select-category').value = note.category;
  document.getElementById('input-content').innerHTML = note.content;
  document.querySelector('.title-form').innerHTML = 'EDIT NODE';
  document.querySelector('.form-add-note').classList.replace('form-add-note', 'form-edit-note');
  document.querySelector('.btn-submit').innerHTML = 'Edit Note';
  eventListenerEditNote(idNote);
};
