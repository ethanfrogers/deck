import { ApplicationDataSourceRegistry } from '../application/service/ApplicationDataSourceRegistry';

const angular = require('angular');

module.exports = angular.module('spinnaker.core.builds.dataSource', []).run(function() {
  ApplicationDataSourceRegistry.registerDataSource({
    key: 'builds',
    sref: '.builds',
    category: 'builds',
    lazy: true,
    primary: true,
    icon: 'fa fa-sm fa-fw fa-check-square',
  });
});
