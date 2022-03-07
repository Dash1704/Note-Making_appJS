const NotesModel = require('./notesModel')

describe(NotesModel, () => {
  describe('getNotes', () => {
    let model = new NotesModel
    it('should return an empty array', () => {
      expect(model.getNotes()).toStrictEqual([])
    }); 
  });
});