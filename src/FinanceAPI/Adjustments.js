/**
 * Created by kgrube on 1/22/2016.
 */

/**
 * @private
 */
var Q = require('q'),
    inherits = require('util').inherits,
    ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Adjustment
 * @property {number} agreementId
 * @property {number} amount
 * @property {string} description
 * @property {string} effectiveDate
 * @property {number} id
 * @property {object} _info
 * @property {string} _info.lastUpdated
 * @property {string} _info.updatedBy
 *
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function Adjustments(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Adjustments, ConnectWise);

/**
 * GET
 * @param agreementId
 * @param {Params} params
 * @returns {promise|Adjustment[]}
 */
Adjustments.prototype.getAdjustments = function(agreementId, params){
    return this.api('/finance/agreements/' + agreementId + '/adjustments', 'GET', params);
};

/**
 * POST
 * @param agreementId
 * @param {Adjustment} addition
 * @returns {promise|Adjustment}
 */
Adjustments.prototype.createAdjustments = function(agreementId, addition){
    return this.api('/finance/agreements/' + agreementId + '/adjustments', 'POST', addition);
};

/**
 * GET
 * @param agreementId
 * @param {ParamsConditions} params
 * @returns {promise|Count}
 */
Adjustments.prototype.getAdjustmentsCount = function(agreementId, params){
    return this.api('/finance/agreements/' + agreementId + '/adjustments/count', 'GET', params);
};

/**
 * DELETE
 * @param agreementId
 * @param additionId
 * @returns {promise|DeleteResponse}
 */
Adjustments.prototype.deleteAdjustmentById = function(agreementId, additionId){
    return this.api('/finance/agreements/' + agreementId + '/adjustments/' + additionId, 'DELETE');
};

/**
 * GET
 * @param agreementId
 * @param additionId
 * @returns {promise|Adjustment}
 */
Adjustments.prototype.getAdjustmentById = function(agreementId, additionId){
    return this.api('/finance/agreements/' + agreementId + '/adjustments/' + additionId, 'GET');
};

/**
 * PATCH
 * @param agreementId
 * @param additionId
 * @param {Operations operations
 * @returns {promise|Adjustment}
 */
Adjustments.prototype.updateAdjustment = function(agreementId, additionId, operations){
    return this.api('/finance/agreements/' + agreementId + '/adjustments/' + additionId, 'PATCH', operations);
};

/**
 * PUT
 * @param agreementId
 * @param additionId
 * @param {Adjustment} addition
 * @returns {promise|Adjustment}
 */
Adjustments.prototype.replaceAdjustment = function(agreementId, additionId, addition){
    return this.api('/finance/agreements/' + agreementId + '/adjustments/' + additionId, 'PUT', addition);
};

/**
 *
 * @type {Adjustments}
 */
module.exports = Adjustments;
