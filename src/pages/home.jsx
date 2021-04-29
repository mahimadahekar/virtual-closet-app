import React from 'react';
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button
} from 'framework7-react';

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    {/* <Navbar large sliding={false}>
      <NavLeft>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="left" />
      </NavLeft>
      <NavTitle sliding>Virtual Closet</NavTitle>
      <NavRight>
        <Link iconIos="f7:menu" iconAurora="f7:menu" iconMd="material:menu" panelOpen="right" />
      </NavRight>
      <NavTitleLarge>Virtual Closet</NavTitleLarge>
    </Navbar> */}

    <div class="navbar">
        <div class="navbar-bg"></div>
        <div class="navbar-inner">
            <div class="left"></div>
            <div class="title">Style Matcher</div>
            <div class="right"></div>
        </div>
    </div>

    {/* Page content */}

    <div class="fab fab-center-center">
        <a href="#">
            <i class="icon f7-icons if-not-md">photo</i>
            <i class="icon f7-icons if-not-md">photo_fill</i>
            <i class="icon material-icons md-only">add</i>
            <i class="icon material-icons md-only">close</i>
        </a>
        <div class="fab-buttons fab-buttons-center">
            {/*<a href="">1</a>*/}
            <form id="get_match_form" method="POST" action="https://iith-virtual-closet.et.r.appspot.com/get_matches">
                <input name="input_image_gallery" id="file_input_gallery" type="file" style={{ display:"none" }} accept="image/*"/>
                <a href=""><i id="choose_file" class="icon f7-icons">photo_fill_on_rectangle_fill</i></a>

                {/*<a href="">3</a>*/}

                <input name="input_image_click" id="file_input_camera" type="file" style={{ display:"none" }} accept="image/*" capture/>
                <a href=""><i id="click_photo" class="icon f7-icons">camera_fill</i></a>
            </form>
        </div>
    </div>

    {/* <div class="block-title">Preloader Buttons</div> */}
    <div class="block" style={{ position:"absolute" , bottom:"20%", width:"100%" }}>
        <button id="find_look" class="button button-large button-fill button-preloader">
            <span class="preloader"></span>
            <span>Find Me A Look</span>
        </button>
    </div>

    <button class="popup-open" data-popup=".popup-match-results" id="match_results_open" style={{display:"none"}}></button>
    <div class="popup popup-match-results">
        <div class="block">
            <div class="block-title">Here Are Your Matching Styles</div>

            <div class="block">
                <div class="row" id="match_results_container">
                    <p>We could not find any matching items from your closet</p>
                </div>
            </div>

            <a id="closet_item_add_image_close" class="button popup-close" href="#">Close</a>
        </div>
    </div>


    {/*<Block strong>
      <p>This is an example of tabs-layout application. The main point of such tabbed layout is that each tab contains independent view with its own routing and navigation.</p>

      <p>Each tab/view may have different layout, different navbar type (dynamic, fixed or static) or without navbar like this tab.</p>
    </Block>
    <BlockTitle>Navigation</BlockTitle>
    <List>
      <ListItem link="/about/" title="About"/>
      <ListItem link="/form/" title="Form"/>
    </List>

    <BlockTitle>Modals</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised popupOpen="#my-popup">Popup</Button>
        </Col>
        <Col width="50">
          <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
        </Col>
      </Row>
    </Block>

    <BlockTitle>Panels</BlockTitle>
    <Block strong>
      <Row>
        <Col width="50">
          <Button fill raised panelOpen="left">Left Panel</Button>
        </Col>
        <Col width="50">
          <Button fill raised panelOpen="right">Right Panel</Button>
        </Col>
      </Row>
    </Block>

    <List>
      <ListItem
        title="Dynamic (Component) Route"
        link="/dynamic-route/blog/45/post/125/?foo=bar#about"
      />
      <ListItem
        title="Default Route (404)"
        link="/load-something-that-doesnt-exist/"
      />
      <ListItem
        title="Request Data & Load"
        link="/request-and-load/user/123456/"
      />
    </List>*/}
  </Page>
);
export default HomePage;