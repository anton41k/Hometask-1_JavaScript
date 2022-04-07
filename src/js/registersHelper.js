import Handlebars from 'handlebars';
import moment from 'moment';

import sprite from '../images/sprite.svg';

export const idIcon = Handlebars.registerHelper('idIcon', function (category) {
  return `${sprite}#icon-${category.toLowerCase().split(' ').join('_')}`;
});

export const filterdDate = Handlebars.registerHelper('filterdDate', function (content, dates) {
  const regex = /(0?[1-9]|[12][0-9]|3[01])[\/\-\.](0?[1-9]|1[012])[ \/\.\-]([1-2][0-9]{3})?/g;
  const match = content.match(regex);
  const result = match ? match.join(', ') : '';
  return dates ? dates : result;
});

export const firstLetterTitle = Handlebars.registerHelper('firstLetterTitle', function (text) {
  return text
    .split(/\s+/)
    .map(word => word[0].toUpperCase() + word.substring(1))
    .join(' ');
});
