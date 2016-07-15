/**
 * Created by kgrube on 1/22/2015.
 * @author kgrube
 */

/**
 * @typedef {object} CompanyAPI
 * @property {Companies} Companies
 * @property {Contacts} Contacts
 * @property {Configurations} Configurations
 */

/**
 * @param {CWOptions} options
 * @returns {FinanceAPI}
 */
function CompanyAPI(options) {
  var _Companies = require('./Companies'),
    _Contacts = require('./Contacts'),
    _Configurations = require('./Configurations');
  //_ContactRelationships = require('./ContactRelationships')
  
  return {
    Companies: new _Companies(options),
    Contacts: new _Contacts(options),
    Configurations: new _Configurations(options)
    //ContactRelationships: new _ContactRelationships(options)
  }
}

/**
 *
 * @type {CompanyAPI}
 */
module.exports = CompanyAPI;
