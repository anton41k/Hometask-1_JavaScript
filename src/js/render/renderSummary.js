import Handlebars from 'handlebars';

import getRefs from '../getRefs';
import { COLUMNS } from '../../CONST';

const refs = getRefs();

export const renderTableSummary = dataNotes => {
  const getDataSummary = dataNotes?.reduce((acc, { category, archived }) => {
    const findNote = acc.find((element, idx) => {
      if (element?.category === category) {
        archived ? (acc[idx].archived += 1) : (acc[idx].active += 1);
        return element?.category === category;
      }
    });
    if (!findNote) {
      acc.push({ category, archived: archived ? 1 : 0, active: !archived ? 1 : 0 });
    }
    return acc;
  }, []);

  getDataSummary.sort((a, b) => {
    if (a.category > b.category) {
      return 1;
    }
    if (a.category < b.category) {
      return -1;
    }
    return 0;
  });

  const sourceBody = refs.bodySummaryTemplate.innerHTML;
  const templateBody = Handlebars.compile(sourceBody);
  const summaryHtmlBody = templateBody(getDataSummary);

  refs.bodyTableSummary.innerHTML = '';
  refs.bodyTableSummary.innerHTML = summaryHtmlBody;
};

const sourceHeader = refs.headerSummaryTemplate.innerHTML;
const templateHeader = Handlebars.compile(sourceHeader);
refs.headerTableSummary.innerHTML = templateHeader(COLUMNS.summary);
