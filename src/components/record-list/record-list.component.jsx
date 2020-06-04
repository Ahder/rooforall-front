import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ListSubheader from '@material-ui/core/ListSubheader';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import { getUserInformations } from '../../providers/api/users/UserProvider';
import './record-list.styles.scss';

class RecordList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
    };
  }

  componentDidMount(): void {
    getUserInformations().then((res) => {
      this.setState({ records: [...res.records] });
    });
  }

  render() {
    const { records } = this.state;
    console.log(records);
    return (
      <>
        <div className="home-record-item">
          <div>
            <GridList
              style={{ height: 'auto', marginTop: '0', marginLeft: '30px', width: '700px' }}
              cellHeight={180}
            >
              <GridListTile key="Subheader" cols={2} style={{ height: '100px', width: '900px' }}>
                <ListSubheader component="div" />
              </GridListTile>
              {records.map((record, index) => (
                <GridListTile key={record.id} style={{ marginLeft: '10px', height: '100px' }}>
                  <GridListTileBar
                    title={record.habitatType}
                    subtitle={<span>Ville: {record.town}</span>}
                  />
                </GridListTile>
              ))}
            </GridList>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(RecordList);
