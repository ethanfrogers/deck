'use strict';

import { module } from 'angular';

import { BUILDS_DATA_SOURCE } from './builds.dataSource';
import { BUILDS_STATES } from './builds.states';

// import './builds.less';

export const BUILDS_MODULE = 'spinnaker.core.builds';
module(BUILDS_MODULE, [BUILDS_DATA_SOURCE, BUILDS_STATES]);
