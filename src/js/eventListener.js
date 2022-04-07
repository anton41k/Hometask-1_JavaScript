import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import Notiflix from 'notiflix';

import { renderTableNotes } from './render/renderNotes';
import getDataNotes from '../data.json';
import { renderTableSummary } from './render/renderSummary';
import getRefs from './getRefs';
import { onCloseModal, openModal } from './modal';
import { renderFormEditNote } from './render/renderFormEditNote';
import { renderConfirmModal } from './render/renderConfirmModal';

const refs = getRefs();
let inital = { isArchived: false, data: getDataNotes };

export const eventListenerIsArchived = () => {
  const onToggleArchived = ev => {
    ev.preventDefault();
    inital.isArchived = !inital.isArchived;
    renderTableNotes(inital);
    const archiveIconUse = ev.currentTarget.lastElementChild.lastElementChild;
    const getHrefIcon = archiveIconUse.getAttribute('href');
    const setHrefIcon = inital.isArchived
      ? getHrefIcon.replace('in_archive', 'out_archive')
      : getHrefIcon.replace('out_archive', 'in_archive');
    archiveIconUse.setAttribute('href', setHrefIcon);
  };

  document.querySelector('.wrrap-archive').addEventListener('click', onToggleArchived);
};

export const eventListenerRemoveNote = idNote => {
  const onRemoveNote = ev => {
    ev.preventDefault();
    const indexNote = getDataNotes.findIndex(({ id }) => id === idNote);
    const nameNote = getDataNotes[indexNote].name;
    getDataNotes.splice(indexNote, 1);
    inital.data = getDataNotes;
    renderTableNotes(inital);
    renderTableSummary(inital.data);
    Notiflix.Notify.info(`Note, ${nameNote} removed!!!`);
    onCloseModal(ev, true);
  };
  document.querySelector('.confirm-yes').addEventListener('click', onRemoveNote);

  const onCloseRemoveNote = ev => {
    onCloseModal(ev, true);
  };
  document.querySelector('.confirm-no').addEventListener('click', onCloseRemoveNote);
};

export const eventListenerOpenRemoveModal = () => {
  const onOpenRemoveModal = ev => {
    ev.preventDefault();
    openModal();
    const idNote = ev.currentTarget.dataset.id;
    renderConfirmModal(idNote);
  };
  document
    .querySelectorAll('.wrrap-icon-delete')
    .forEach(elem => elem.addEventListener('click', onOpenRemoveModal));
};

export const eventListenerArchivedNote = () => {
  const onArchivedNote = ev => {
    ev.preventDefault();
    const idNote = ev.currentTarget.dataset.id;
    const indexNote = getDataNotes.findIndex(({ id }) => id === idNote);
    const nameNote = getDataNotes[indexNote].name;
    const message = getDataNotes[indexNote].archived
      ? `Note, ${nameNote} not archived!!!`
      : `Note, ${nameNote} is archived!!!`;
    getDataNotes[indexNote].archived = !getDataNotes[indexNote].archived;
    inital.data = getDataNotes;
    renderTableNotes(inital);
    renderTableSummary(inital.data);
    Notiflix.Notify.info(message);
  };
  document
    .querySelectorAll('.wrrap-icon-archive')
    .forEach(elem => elem.addEventListener('click', onArchivedNote));
};

export const eventListenerAddNote = () => {
  const onAddNote = ev => {
    ev.preventDefault();
    const { name, category, content } = ev.currentTarget.elements;
    if (name.value && category.value && content.value) {
      const newNote = {
        id: uuidv4(),
        name: name.value,
        category: category.value,
        content: content.value,
        craeted: moment(Date.now()).format('LL'),
        dates: '',
        archived: false,
      };
      inital.data = getDataNotes;
      inital.data.push(newNote);
      renderTableNotes(inital);
      renderTableSummary(inital.data);
      onCloseModal(ev, true);
      Notiflix.Notify.success(`Note, ${newNote.name} added successfully!!!`);
    } else {
      Notiflix.Notify.warning(`Not all fields are filled!!!`);
    }
  };
  document.querySelector('.form-add-note').addEventListener('submit', onAddNote);
};

export const eventListenerEditNote = idNote => {
  const onEditNote = ev => {
    ev.preventDefault();
    const { name, category, content } = ev.currentTarget.elements;
    if (name.value && category.value && content.value) {
      inital.data = getDataNotes;
      const indexNote = inital.data.findIndex(({ id }) => id === idNote);
      inital.data[indexNote].name = name.value;
      inital.data[indexNote].category = category.value;
      inital.data[indexNote].content = content.value;
      renderTableNotes(inital);
      renderTableSummary(inital.data);
      onCloseModal(ev, true);
      Notiflix.Notify.success(`Note, ${name.value} change!!!`);
    } else {
      Notiflix.Notify.warning(`Not all fields are filled!!!`);
    }
  };
  document.querySelector('.form-edit-note').addEventListener('submit', onEditNote);
};

export const eventListenerOpenEditModal = () => {
  const onOpenEditModal = ev => {
    ev.preventDefault();
    openModal();
    const idNote = ev.currentTarget.dataset.id;
    const indexNote = getDataNotes.findIndex(({ id }) => id === idNote);
    renderFormEditNote(getDataNotes[indexNote], idNote);
  };
  document
    .querySelectorAll('.wrrap-icon-edit')
    .forEach(elem => elem.addEventListener('click', onOpenEditModal));
};
