import Handlebars from 'handlebars';

import getRefs from '../getRefs';
import { COLUMNS } from '../../CONST';
import {
  eventListenerArchivedNote,
  eventListenerOpenEditModal,
  eventListenerOpenRemoveModal,
} from '../eventListener';

const refs = getRefs();

export const renderTableNotes = ({ isArchived, data }) => {
  const dataNotes = data.filter(note => note.archived == isArchived);
  const sourceBody = refs.bodyNotesTemplate.innerHTML;
  const templateBody = Handlebars.compile(sourceBody);
  const notesHtmlBody = templateBody(dataNotes);
  refs.bodyTableNotes.innerHTML = '';
  refs.bodyTableNotes.innerHTML = notesHtmlBody;

  eventListenerArchivedNote();
  eventListenerOpenEditModal();
  eventListenerOpenRemoveModal();
};

const sourceHeader = refs.headerNotesTemplate.innerHTML;
const templateHeader = Handlebars.compile(sourceHeader);
refs.headerTableNotes.innerHTML = templateHeader(COLUMNS.notes);
