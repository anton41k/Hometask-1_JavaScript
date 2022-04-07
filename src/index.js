import getRefs from './js/getRefs';
import './js/registersHelper';
import { notesHtmlHeader, renderTableNotes } from './js/render/renderNotes';
import getDataNotes from './data.json';
import { renderTableSummary, summaryHtmlHeader } from './js/render/renderSummary';
import { eventListenerIsArchived } from './js/eventListener';

import './js/modal';

import './sass/main.scss';

renderTableNotes({ isArchived: false, data: getDataNotes });
eventListenerIsArchived();

renderTableSummary(getDataNotes);
