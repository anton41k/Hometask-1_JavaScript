import Handlebars from 'handlebars';

import getRefs from './getRefs';
import getDataNotes from '../data.json';
import { COLUMNS } from '../CONST';
import { eventListener, eventListenerArchivedNote, eventListenerRemoveNote } from './eventListener';

const refs = getRefs();

export const renderTableNotes = ({ isArchived, data }) => {
  const dataNotes = data.filter(note => note.archived == isArchived);
  const sourceBody = refs.bodyNotesTemplate.innerHTML;
  const templateBody = Handlebars.compile(sourceBody);
  const notesHtmlBody = templateBody(dataNotes);
  refs.bodyTableNotes.innerHTML = '';
  refs.bodyTableNotes.innerHTML = notesHtmlBody;

  eventListenerRemoveNote();
  eventListenerArchivedNote();
};

const sourceHeader = refs.headerNotesTemplate.innerHTML;
const templateHeader = Handlebars.compile(sourceHeader);
export const notesHtmlHeader = templateHeader(COLUMNS.notes);
