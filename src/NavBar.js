import React from 'react'
import {Menu} from 'semantic-ui-react'
class NavBar extends React.Component {
  constructor() {
    super();
    this.state = {
      activeItem: null
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e, {name}) {
    this.setState({activeItem: name})
  }
  render() {
    const activeItem = this.state.activeItem
    return (
      <Menu stackable>
        <Menu.Item>
          <img src='/favicon.ico' alt="Logo"/>
        </Menu.Item>
        <Menu.Item name="home" active={activeItem === "home"} onClick={this.handleClick}>
          Home
        </Menu.Item>
        <Menu.Item name="top" active={activeItem === "top"} onClick={this.handleClick}>
          Top Stories
        </Menu.Item>
      </Menu>
    )

  }
}

export default NavBar;
