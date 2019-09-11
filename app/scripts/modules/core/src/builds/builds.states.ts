import { module } from 'angular';

import { INestedState } from 'core/navigation/state.provider';
import { APPLICATION_STATE_PROVIDER, ApplicationStateProvider } from 'core/application/application.state.provider';

import { Builds } from './Builds';

export const BUILDS_STATES = 'spinnaker.core.builds.states';
module(BUILDS_STATES, [APPLICATION_STATE_PROVIDER]).config([
  'applicationStateProvider',
  (applicationStateProvider: ApplicationStateProvider) => {
    const builds: INestedState = {
      name: 'builds',
      url: '/builds',
      views: {
        pipelines: { component: Builds, $type: 'react' },
      },
      params: {
        q: { dynamic: true, value: null },
      },
      data: {
        pageTitleSection: {
          title: 'Builds',
        },
      },
      children: [],
    };

    applicationStateProvider.addChildState(builds);
  },
]);
