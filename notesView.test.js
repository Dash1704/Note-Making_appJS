/**
 * @jest-environment jsdom
 */


const fs = require('fs');
const NotesView = require('./notesView');
const NotesModel = require('./notesModel')
const { isTypedArray } = require('util/types');


describe ('Page View', () => {
  it('should create two notes', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const model = new NotesModel;
    const view = new NotesView(model);
    model.addNote('Write letter')
    model.addNote('Learn JS')

    view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(2);

  });
});