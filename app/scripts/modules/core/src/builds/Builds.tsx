import * as React from 'react';

import { IBuild, IInstanceCounts, IServerGroup } from 'core/domain';
import { ServerGroupManagerReader } from 'core/ServerGroupManager';
import { IServerGroupSummary, IServerGroupManager } from 'core/domain/IServerGroupManager';

export interface IBuildServerGroups {
  buildServerGroups: IBuildServerGroup[];
}
export interface IBuildServerGroup {
  build: IBuild;
  serverGroups: IServerGroupSummary[];
}

export interface IBuildsProps {}

export class Builds extends React.Component<IBuildsProps, IBuildServerGroups> {
  public state: IBuildServerGroups = {
    buildServerGroups: [],
  };

  public componentDidMount() {
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

    const serverGroupManagers = ServerGroupManagerReader.getServerGroupManagersForApplication('Kustomize');
    serverGroupManagers.then((sgm: IServerGroupManager[]) => {
      const serverGroups = sgm[0].serverGroups;

      const buildServerGroup: IBuildServerGroup = {
        build: build,
        serverGroups: serverGroups,
      };
      this.setState({
        buildServerGroups: [buildServerGroup],
      });
    });
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
