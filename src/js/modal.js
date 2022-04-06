import getRefs from './getRefs';

const refs = getRefs();

refs.closeBtn.addEventListener('click', onCloseModal);

function onCloseModal(ev) {
  ev.stopPropagation();
  if (
    ev.code === 'Escape' ||
    ev.target.classList.contains('backdrop') ||
    ev.currentTarget.classList.contains('wrrap-icon-close')
  ) {
    onToggleClass();
    refs.contentModal.innerHTML = '';
    document.removeEventListener('keydown', onEventKey);
  }
}

function onToggleClass() {
  refs.backdrop.classList.toggle('backdrop--is-hidden');
  refs.bodyEl.classList.toggle('toggle_scroll');
}

const onAddNote = ev => {
  ev.stopPropagation();

  refs.backdrop.classList.toggle('backdrop--is-hidden');
  refs.bodyEl.classList.toggle('toggle_scroll');
  document.addEventListener('keydown', onEventKey);
  console.log(123);
};
refs.btnCreate.addEventListener('click', onAddNote);

function onEventKey(ev) {
  if (ev.code === 'Escape') {
    onCloseModal(ev);
  }
}

refs.backdrop.addEventListener('click', onCloseModal);
