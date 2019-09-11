'use strict';

const angular = require('angular');

//import './builds.less';

module.exports = angular.module('spinnaker.core.builds', [require('./builds.dataSource').name]);
