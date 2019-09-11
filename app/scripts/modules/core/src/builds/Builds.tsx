import * as React from 'react';

import { IBuild, IInstanceCounts, IServerGroup } from 'core/domain';

export interface IBuildServerGroups {
  build: IBuild;
  serverGroups: IServerGroup[];
}
export class Builds extends React.Component {
  public getApplicationBuilds(): IBuildServerGroups[] {
    const build: IBuild = {
      number: 43,
      result: '0488d5162',
      building: false,
      duration: 20,
      name: 'Some Fake Name',
      timestamp: new Date(),
      url: 'http://www.google.com',
      artifacts: [],
    };

    const instanceCount: IInstanceCounts = {
      up: 10,
      down: 10,
      starting: 1,
      succeeded: 1,
      failed: 1,
      unkown: 1,
      outOfService: 1,
      unknown: 1,
    };

    const serverGroup: IServerGroup = {
      account: 'Fake Account',
      cloudProvider: 'AWS',
      cluster: 'prod',
      instanceCounts: instanceCount,
      instances: [],
      name: 'prod-myapp-cluster-001',
      region: 'us-west-1',
      type: 'aws',
    };

    const buildSG: IBuildServerGroups = {
      build: build,
      serverGroups: [serverGroup],
    };

    return [buildSG];
  }
  public render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="well alert alert-info">
            <a target="_blank" href="">
              Look at all these builds...?
            </a>
          </div>
        </div>
      </div>
    );
  }
}
