import { renderTableNotes } from './notes';
import getDataNotes from '../data.json';
import { renderTableSummary } from './summary';
import getRefs from './getRefs';

const refs = getRefs();
let inital = { isArchived: false, data: getDataNotes };

export const eventListenerIsArchived = () => {
  const onToggleArchived = ev => {
    ev.stopPropagation();
    inital.isArchived = !inital.isArchived;
    renderTableNotes(inital);
    const archiveIconUse = ev.currentTarget.lastElementChild.lastElementChild;
    const getHrefIcon = archiveIconUse.getAttribute('href');
    const setHrefIcon = inital.isArchived
      ? getHrefIcon.replace('in_archive', 'out_archive')
      : getHrefIcon.replace('out_archive', 'in_archive');
    archiveIconUse.setAttribute('href', setHrefIcon);
  };

  document.querySelector('.wrrap_archive').addEventListener('click', onToggleArchived);
};

export const eventListenerRemoveNote = () => {
  const onRemoveNote = ev => {
    ev.stopPropagation();
    const idNote = ev.currentTarget.dataset.id;
    const indexNote = getDataNotes.findIndex(({ id }) => id === idNote);
    getDataNotes.splice(indexNote, 1);
    inital.data = getDataNotes;
    renderTableNotes(inital);
    renderTableSummary(inital.data);
  };
  document
    .querySelectorAll('.wrrap_icon_delete')
    .forEach(elem => elem.addEventListener('click', onRemoveNote));
};

export const eventListenerArchivedNote = () => {
  const onArchivedNote = ev => {
    ev.stopPropagation();
    const idNote = ev.currentTarget.dataset.id;
    console.log(idNote);
    const indexNote = getDataNotes.findIndex(({ id }) => id === idNote);
    getDataNotes[indexNote].archived = !getDataNotes[indexNote].archived;
    inital.data = getDataNotes;
    renderTableNotes(inital);
    renderTableSummary(inital.data);
  };
  document
    .querySelectorAll('.wrrap_icon_archive')
    .forEach(elem => elem.addEventListener('click', onArchivedNote));
};

export const eventListenerAddNote = () => {
  // const onAddNote = ev => {
  //   ev.stopPropagation();
  //   refs.backdrop.classList.toggle('backdrop--is-hidden');
  //   refs.bodyEl.classList.toggle('toggle_scroll');
  //   document.addEventListener('keydown', onEventKey);
  // const idNote = ev.currentTarget.dataset.id;
  // console.log(idNote);
  // const indexNote = getDataNotes.findIndex(({ id }) => id === idNote);
  // getDataNotes[indexNote].archived = !getDataNotes[indexNote].archived;
  // inital.data = getDataNotes;
  // renderTableNotes(inital);
  // renderTableSummary(inital.data)
  // console.log(123);
  // };
  // refs.btnCreate.addEventListener('click', onAddNote);
};
