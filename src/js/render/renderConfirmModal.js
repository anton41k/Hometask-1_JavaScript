import getRefs from '../getRefs';
import confirmTemplate from '../../template/confirmTemplate';
import { eventListenerRemoveNote } from '../eventListener';

const refs = getRefs();

export const renderConfirmModal = id => {
  refs.contentModal.innerHTML = confirmTemplate();
  eventListenerRemoveNote(id);
};
