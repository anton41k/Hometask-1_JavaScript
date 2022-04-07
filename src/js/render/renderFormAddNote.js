import getRefs from '../getRefs';
import formTemplat from '../../template/formTemplat';
import { CATEGORY } from '../../CONST';
import { eventListenerAddNote } from '../eventListener';

const refs = getRefs();

export const renderFormAddNote = () => {
  refs.contentModal.innerHTML = formTemplat(CATEGORY);
  eventListenerAddNote();
};
