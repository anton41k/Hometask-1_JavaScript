export default function getRefs() {
  return {
    notesTable: document.getElementById('notes'),

    headerNotesTemplate: document.getElementById('notes-header-template'),
    bodyNotesTemplate: document.getElementById('notes-body-template'),

    headerTableNotes: document.querySelector('.header-notes'),
    bodyTableNotes: document.querySelector('.body-notes'),

    headerSummaryTemplate: document.getElementById('summary-header-template'),
    bodySummaryTemplate: document.getElementById('summary-body-template'),

    headerTableSummary: document.querySelector('.header-summary'),
    bodyTableSummary: document.querySelector('.body-summary'),

    btnCreate: document.querySelector('.wrrap-btn-create-note'),
    //modal
    contentModal: document.querySelector('.content-modal'),
    backdrop: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('.wrrap-icon-close'),
    bodyEl: document.querySelector('body'),
    mainContainer: document.querySelector('.container'),
  };
}
