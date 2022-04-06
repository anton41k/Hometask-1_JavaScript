import moment from 'moment';
import Handlebars from 'handlebars';

import dataNotes from './data.json';
import { CATEGORY } from './CONST';
import { COLUMNS } from './CONST';
import getRefs from './js/getRefs';
import { idIcon, filterdDate, onClickDel } from './js/registersHelper';
import { notesHtmlHeader, notesHtmlBody, renderTableNotes } from './js/notes';
import getDataNotes from './data.json';
import sprite from './images/sprite.svg';

import './sass/main.scss';
import { renderTableSummary, summaryHtmlBody, summaryHtmlHeader } from './js/summary';
import { eventListenerAddNote, eventListenerIsArchived } from './js/eventListener';

import './js/modal';

const refs = getRefs();

refs.headerTableNotes.innerHTML = notesHtmlHeader;

refs.headerTableSummary.innerHTML = summaryHtmlHeader;

renderTableNotes({ isArchived: false, data: getDataNotes });
eventListenerIsArchived();

// eventListenerAddNote();

renderTableSummary(getDataNotes);
