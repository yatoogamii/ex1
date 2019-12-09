const should = require('chai').should();

import { filterCandidate } from '../functions/filterCandidate';

describe('filterCandidate test', function() {
  it('should be equal to []', () => {
    const filteredCandidate = filterCandidate([{name: 'Elias', languages: [{language: 'english', level: 3}, {language: 'german', level: 2}]}], {language: "english", level: 1})
    filteredCandidate.should.to.eql([]);
  })
});
