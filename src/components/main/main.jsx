import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.css"
import "./css/styles.css";
import Logo from "./logo";
import LogoZoom from "./logo_zoom";
import Top from "./top";
import Center from "./center";
import Footer from "./footer";
import MenuButton from "./menu";
import Menu from "../menu";
import logo from '../../test/logo.png';
import top from "../../test/branch.png";
import center from "../../test/c.png";
import footer1 from "../../test/arm.png";
import footer2 from "../../test/arm.png";
import footer3 from "../../test/arm.png";

class Main extends Component{
    state = {
        main_background: { class: "main_background" },
        logo_image: { url: null, alt: "logo" , class: "logo_image_div"},
        top_image: { url: null, alt: "top" },
        center_image: { url: null, alt: "center" },
        footer_image:{
            img1: { url: null, alt: "footer1" },
            img2: { url: null, alt: "footer2" },
            img3: { url: null, alt: "footer3" },
        },
        menuButtonInfo: { class: "menu_div" },
        logo_zoom_image: { url: null, alt: "logo", class: "logo_zoom_image"}
    }

    componentDidMount() {
        let logo_image = {...this.state.logo_image};
        let top_image = {...this.state.top_image};
        let center_image = {...this.state.center_image};
        let footer_image = {...this.state.footer_image};
        let logo_zoom_image = {...this.state.logo_zoom_image};
        logo_image.url = logo;
        top_image.url = top;
        center_image.url = center;
        footer_image.img1.url = footer1;
        footer_image.img2.url = footer2;
        footer_image.img3.url = footer3;
        logo_zoom_image.url = logo;
        this.setState({ logo_image: logo_image });
        this.setState({ top_image: top_image });
        this.setState({ center_image: center_image });
        this.setState({ footer_image: footer_image });
        this.setState({ logo_zoom_image: logo_zoom_image });
    }

    handleClickOpen = () =>{
        let menuButtonInfo = {...this.state.menuButtonInfo};
        menuButtonInfo.class = "menu_div open_menu";
        this.setState({ menuButtonInfo: menuButtonInfo });
    }
    handleClickClose = () => {
        let menuButtonInfo = {...this.state.menuButtonInfo};
        menuButtonInfo.class = "menu_div close_menu";
        this.setState({ menuButtonInfo: menuButtonInfo });
    }
    handleEnter = () =>{
        let logo_zoom_image = {...this.state.logo_zoom_image};
        let main_background = {...this.state.main_background};
        main_background.class = "main_background arrange_background";
        logo_zoom_image.class = "logo_zoom_image arrange_logo";
        this.setState({ logo_zoom_image: logo_zoom_image });
        this.setState({ main_background: main_background });
    }


    render() {
        return(
            <React.Fragment>
                <LogoZoom info={ this.state.logo_zoom_image }/>
                <div className={ this.state.main_background.class }>
                    <div className="top_logo_wrap">
                        <Top info={ this.state.top_image }/>
                        <Logo onClick={ this.handleEnter } info={ this.state.logo_image } />
                    </div>
                    <div className="main">
                        <Center info={ this.state.center_image }/>
                        <Footer info={ this.state.footer_image }/>
                    </div>
                    <MenuButton onClick={ this.handleClickOpen }/>
                    <Menu onClick={ this.handleClickClose } info={ this.state.menuButtonInfo }/>
                </div>
            </React.Fragment>
        );
    }

}


export default Main;