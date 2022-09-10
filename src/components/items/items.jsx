import React, {Component} from "react";
import MenuButton from "./menu";
import Item from "./item";
import "./css/styles.css";
import Back from "./back";
import Menu from "../menu";
import Block from "../block/block";
import Background from "../../test/Background.png";
import dinner1 from "../../test/dinner/sub-dinner1.png";import dinner2 from "../../test/dinner/sub-dinner2.png";
import dinner3 from "../../test/dinner/sub-dinner3.png";import dinner4 from "../../test/dinner/sub-dinner4.png";
import dinner5 from "../../test/dinner/sub-dinner5.png";import dinner6 from "../../test/dinner/sub-dinner6.png";
import lunch1 from "../../test/lunch/sub-lunch1.png";import lunch2 from "../../test/lunch/sub-lunch2.png";
import lunch3 from "../../test/lunch/sub-lunch3.png";import lunch4 from "../../test/lunch/sub-lunch4.png";
import lunch5 from "../../test/lunch/sub-lunch5.png";import lunch6 from "../../test/lunch/sub-lunch6.png";
import icecream1 from "../../test/ice-cream/sub-icecream1.png";import icecream2 from "../../test/ice-cream/sub-icecream2.png";
import icecream3 from "../../test/ice-cream/sub-icecream3.png";import icecream4 from "../../test/ice-cream/sub-icecream4.png";
import icecream5 from "../../test/ice-cream/sub-icecream5.png";import icecream6 from "../../test/ice-cream/sub-icecream6.png";
import breakfast1 from "../../test/breakfast/sub-breakfast1.png";import breakfast2 from "../../test/breakfast/sub-breakfast2.png";
import breakfast3 from "../../test/breakfast/sub-breakfast3.png";import breakfast4 from "../../test/breakfast/sub-breakfast4.png";
import breakfast5 from "../../test/breakfast/sub-breakfast5.png";import breakfast6 from "../../test/breakfast/sub-breakfast6.png";
import lunch from "../../test/lunch.jpg";
import dinner from "../../test/dinner.jpg";
import breakfast from "../../test/breakfast.jpg";
import icecream from "../../test/ice-cream.jpg";


class Items extends Component{
    state = {
        render: {block: false, menu: true},
        items: [
            {id: "breakfast", name: "Breakfast", image: breakfast, alt: "breakfast",
             category: "breakfast", foods_count: 1, class: "card_wrapper"},
             {id: "lunch", name: "Lunch", image: lunch, alt: "lunch",
             category: "lunch", foods_count: 1, class: "card_wrapper"},
             {id: "dinner", name: "Dinner", image: dinner, alt: "dinner",
             category: "dinner", foods_count: 1, class: "card_wrapper"},
             {id: "icecream", name: "Ice Cream", image: icecream, alt: "icecream",
             category: "ice cream", foods_count: 1, class: "card_wrapper"},
        ],
        clicked: {},
        classes: ["primary",
            "warning",
            "success",
            "danger",
            "light",
            "info",
        ],
        menuButtonInfo: { class: "menu_div" },
        clickedItem: null,
        icons: { 1:null, 2:null, 3:null, 4:null, 5:null, 6:null, 7:null, 8:null, 9:null, 10:null, 11:null, 12:null },
    }

    componentWillMount() {
        let items = [...this.state.items];
        items.map(item => item.class = "card_wrapper");
        this.setState({ items: items });
    }


    componentDidMount() {       
            let items = [...this.state.items];
            let counter = 0;
            let internal = setInterval(() =>{
                let items = [...this.state.items];
                if (counter < items.length){
                    items[counter].class = "card_wrapper switch";
                    this.setState({ items: items });
                    counter++;
                }else{
                    clearInterval(internal);
                }
            }, 200);
        };

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

    handleItemClick = (item)=>{
        let new_item = {...item};
        let clicked = {...this.state.clicked};
        let render = {...this.state.render};
        let icons = {...this.state.icons};
        this.setState({clickedItem: item.id});
        clicked = new_item;
        if (clicked.category === "dinner"){
            icons[1] = dinner1;icons[2] = dinner2;
            icons[3] = dinner3;icons[4] = dinner4;
            icons[5] = dinner5;icons[6] = dinner6;
            this.setState({ icons: icons });
        }else if (clicked.category === "lunch"){
            icons[1] = lunch1;icons[2] = lunch2;
            icons[3] = lunch3;icons[4] = lunch4;
            icons[5] = lunch5;icons[6] = lunch6;
            this.setState({ icons: icons });
        }else if (clicked.category === "ice cream"){
            icons[1] = icecream1;icons[2] = icecream2;
            icons[3] = icecream3;icons[4] = icecream4;
            icons[5] = icecream5;icons[6] = icecream6;
            this.setState({ icons: icons });
        }else if (clicked.category === "breakfast"){
            icons[1] = breakfast1;icons[2] = breakfast2;
            icons[3] = breakfast3;icons[4] = breakfast4;
            icons[5] = breakfast5;icons[6] = breakfast6;
            this.setState({ icons: icons });
        }
        render.block = true;
        render.menu = false;
        this.setState({ clicked: clicked });
        this.setState({ render: render });
    }

    handleBackClick = () =>{
        let render = {...this.state.render};
        render.block = false;
        render.menu = true;
        let items = [...this.state.items];
        items.map(item => item.class = "card_wrapper");
        this.setState({ items: items });
        this.setState({ render: render });
        let counter = 0;
        let internal = setInterval(() =>{
            let items = [...this.state.items];
            if (counter < items.length){
                items[counter].class = "card_wrapper switch";
                this.setState({ items: items });
                counter++;
            }else{
                clearInterval(internal);
            }
        }, 200);
    }

    render(){
        if (this.state.render.menu){
            return(
                <div className="items_background">
                    <div className="background_wrap">
                        <img className="background" src={ Background } alt="background"/>
                    </div>
                    <Back/>
                    <div className="container">
                        <div className="row">
                            {
                                this.state.items.map((item)=>{
                                    return(
                                        <div key={ item.id } className="col-lg-3">
                                            <Item onClick={ this.handleItemClick } info={ item }/>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                    <MenuButton onClick={ this.handleClickOpen }/>
                    <Menu onClick={ this.handleClickClose } info={ this.state.menuButtonInfo }/>
                </div>
            );
        }else if (this.state.render.block){
            return(
                <Block clickedItem={this.state.clickedItem} icons={ this.state.icons }
                       onBackClick={ this.handleBackClick } info={ this.state.clicked }/>
            );
        }
    }
}

export default Items;