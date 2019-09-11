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

    const serverGroupManagers = ServerGroupManagerReader.getServerGroupManagersForApplication('kustomize');
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
    const { buildServerGroups } = this.state;
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: '25%' }}>Build Number</th>
            <th style={{ width: '25%' }}>Result</th>
            <th style={{ width: '25%' }}>Timestamp</th>
            <th style={{ width: '25%' }}>Server Groups</th>
          </tr>
        </thead>

        <tbody>
          {buildServerGroups.map(buildSG => {
            const build = buildSG.build;

            return (
              <tr key={build.number} className="clickable">
                <td>{build.number}</td>
                <td>{build.result}</td>
                <td>{build.timestamp.toDateString()}</td>
                <td>
                  {buildSG.serverGroups.map(serverGroup => {
                    return <p>{serverGroup.name}</p>;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}
