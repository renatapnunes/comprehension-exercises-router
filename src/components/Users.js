import React, { Component } from 'react';

class Users extends Component {
  render() {
    const { greetingsMessage } = this.props;
    // id terá o valor passado pela url localhost:3000/users/id_qualquer
    const { id} = this.props.match.params;
      return (
        <div>
          <h2>Users</h2>
          <p> { `${greetingsMessage} user ${id}` }, My awesome Users component </p>
        </div>
      )
  }
};

export default Users;
