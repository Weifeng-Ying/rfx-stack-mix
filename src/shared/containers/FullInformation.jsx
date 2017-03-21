import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { inject, observer } from 'mobx-react';

// components
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import { Table, TableBody, TableHeader, TableFooter, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Divider from 'material-ui/Divider';
// import FontIcon from 'material-ui/FontIcon';

// form
// import postForm from '@/shared/forms/post';

@inject('store') @observer
export default class FullInformation extends Component {

  static fetchData({ store }) {
    // console.log(store);
    return store.fullInfor.getFullInfor('947941');
  }

  static propTypes = {
    store: React.PropTypes.object,
  };

  render() {
    const { fullInfor } = this.props.store;
    const addOrderListItem = order => (
      <ListItem
        primaryText={`${order.ORDER_NAME}' '${order.FREQU_CODE}`}
        secondaryText={`${new Date(order.START_TIME).toLocaleString()}
           =>  ${new Date(order.END_TIME).toLocaleString()}`}
      />
    );

    const addArrow = (flag) => {
      if (flag === 'l' || flag === 'cl' || flag === 'al') {
        return (
          <i className="fa fa-long-arrow-down" />
        );
      } else if (flag === 'h' || flag === 'ch' || flag === 'ah') {
        return (
          <i className="fa fa-long-arrow-up" />
        );
      }
      return '';
    };

    const addInspectionTable = inspection => (
      <div>
        <Divider />
        <Table
          height="300px"
          fixedHeader={true}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn
                colSpan="3"
                tooltip="Super Header"
                style={{ textAlign: 'center' }}
              >
                { inspection.TEST_ORDER_NAME }
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="">项目</TableHeaderColumn>
              <TableHeaderColumn tooltip="">结果</TableHeaderColumn>
              <TableHeaderColumn tooltip="">参考值</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
          >
            {inspection.items.map((row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{row.CHINESE_NAME}</TableRowColumn>
                <TableRowColumn>
                  {`${row.QUANTITATIVE_RESULT} `}
                  {addArrow(row.QUALITATIVE_RESULT)}
                </TableRowColumn>
                <TableRowColumn>{row.TEST_ITEM_REFERENCE}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableRowColumn
                colSpan="3"
                style={{ textAlign:'center' }}
              >
                Super Footer
              </TableRowColumn>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    );

    return (
      <div>
        <Helmet title="Patient Full Information View" />
        <List>
          <Subheader>病人基本信息</Subheader>
          <ListItem
            primaryText={`
              ${fullInfor.infor.patientID}
              ${fullInfor.infor.patientInformation.Name}
              ${fullInfor.infor.patientInformation.SEX}
              ${fullInfor.infor.patientInformation.CURR_BQ}
              ${fullInfor.infor.patientInformation.CURR_BED}床
              ${fullInfor.infor.patientInformation.ADMISS_DATE}
              ${fullInfor.infor.patientInformation.DIAG_NAME}
              `}
            secondaryText={`
              ${fullInfor.infor.patientInformation.HOME_TEL}
              ${fullInfor.infor.patientInformation.HOME_ADDRESS}
              `}
          />
        </List>
        <Divider />
        <List>
          <Subheader>医嘱</Subheader>
          {fullInfor.infor.order.data.map(addOrderListItem)}
        </List>
        <Divider />
        <List>
          <Subheader>检验</Subheader>
          {fullInfor.infor.inspections.map(addInspectionTable)}
        </List>
      </div>
    );
  }
}
