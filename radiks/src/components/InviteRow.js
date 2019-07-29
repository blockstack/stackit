import React, { Component } from 'react';
import '../styles/TableRow.css'
import { ok } from 'assert';

export default class InviteRow extends Component {

  render() {
    const blockPreviewModel = this.props.preview;
    console.log("made it to InviteRow");
    console.log(blockPreviewModel);
    //const { block, description, deadline, owner, invitationId, blockGroupId } = blockPreviewModel.attrs;
    const { block, description, deadline, owner } = blockPreviewModel.attrs;
    return (
      <tr>
        <td>{block}</td>
        <td>{description}</td>
        <td>{deadline}</td>
        <td>{owner}
        </td>
        <td>
          <a id="blackHref" href="#" onClick={() => this.props.acceptBlock(this.props.preview._id)}>Accept</a>
        </td>
      </tr>
    );
  }
}