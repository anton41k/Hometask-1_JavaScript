import { renderTableNotes } from '../notes';

export const removeNote = () => {
  const onRemoveNote = ev => {
    ev.stopPropagation();
    // isArchived = !isArchived;
    // renderTableNotes(isArchived);
    // ev.currentTarget.style.color = isArchived ? 'black' : 'white';
  };

  document.querySelector('.wrrap_icon_delete').addEventListener('click', onRemoveNote);
};
