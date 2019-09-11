import { ApplicationDataSourceRegistry } from '../application/service/ApplicationDataSourceRegistry';

import { module } from 'angular';

export const BUILDS_DATA_SOURCE = 'spinnaker.core.builds.dataSource';
module(BUILDS_DATA_SOURCE, []).run(function() {
  ApplicationDataSourceRegistry.registerDataSource({
    key: 'builds',
    sref: '.builds',
    category: 'builds',
    lazy: true,
    primary: true,
    icon: 'fa fa-sm fa-fw fa-check-square',
  });
});
