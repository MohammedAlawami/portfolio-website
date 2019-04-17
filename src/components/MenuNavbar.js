import React, { Component } from "react";
import { Menu, Modal } from "semantic-ui-react";
import { Link, animateScroll as scroll } from "react-scroll";
import RenderPDF from "./RenderPDF";

class MenuNavbar extends Component {
  state = { activeItem: "Home" };

  handleItemClick = (e, { name }) =>
    this.setState({
      activeItem: name
    });
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary>
        {/* <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={this.handleItemClick}
        /> */}
        <Menu.Menu position="right">
          <Link
            to="About Me"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
          >
            <Menu.Item
              name="About Me"
              // active={activeItem === "About Me"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link
            to="Projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
          >
            <Menu.Item
              name="Projects"
              // active={activeItem === "Projects"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link
            to="Skills"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
          >
            <Menu.Item
              name="Skills"
              // active={activeItem === "Skills"}
              onClick={this.handleItemClick}
            />
          </Link>
          <Modal
            centered={false}
            basic
            size="small"
            trigger={<Menu.Item name="Resume" onClick={this.handleOpen} />}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            style={{ paddingLeft: "2em", paddingTop: "2.5em" }}
            closeIcon
          >
            <RenderPDF />
          </Modal>
        </Menu.Menu>
      </Menu>
    );
  }
}
export default MenuNavbar;
