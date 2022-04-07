import getRefs from './getRefs';
import { renderFormAddNote } from './render/renderFormAddNote';

const refs = getRefs();

export const onCloseModal = (ev, isSubmit) => {
  ev.stopPropagation();
  if (
    ev.code === 'Escape' ||
    ev.target.classList.contains('backdrop') ||
    ev.currentTarget.classList.contains('wrrap-icon-close') ||
    isSubmit
  ) {
    onToggleClass();
    document.removeEventListener('keydown', onEventKey);
  }
};
refs.closeBtn.addEventListener('click', onCloseModal);
const onToggleClass = () => {
  refs.backdrop.classList.toggle('backdrop--is-hidden');
  refs.bodyEl.classList.toggle('toggle-scroll');
};

export const openModal = () => {
  refs.backdrop.classList.toggle('backdrop--is-hidden');
  refs.bodyEl.classList.toggle('toggle-scroll');
  document.addEventListener('keydown', onEventKey);
};

const onEventKey = ev => {
  if (ev.code === 'Escape') {
    onCloseModal(ev);
  }
};

refs.backdrop.addEventListener('click', onCloseModal);

const onAddNote = ev => {
  ev.stopPropagation();
  openModal();
  renderFormAddNote();
};
refs.btnCreate.addEventListener('click', onAddNote);
