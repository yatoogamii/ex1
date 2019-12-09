const should = require('chai').should();

import { filterCandidate } from '../functions/filterCandidate';

describe('filterCandidate test', function() {
  it('should be equal to []', () => {
    const filteredCandidate = filterCandidate([{name: 'Elias', languages: [{language: 'français', level: 3}, {language: 'Anglais', level: 2}]}], {language: "français", level: 1})
    filteredCandidate.should.to.eql([]);
  })
});
