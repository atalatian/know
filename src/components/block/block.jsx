import React, {Component} from "react";
import Back from "./back";
import Bottom from "./bottom";
import Title from "./title";
import Enter from "./enter";
import "./css/styles.css";
import Item from "./item";
import Menu from "./menu";
import Background from "../../test/Background.png";


class Block extends Component{
    state = {
        render: { items: false, main: false },
        bottom_image: { url: null, alt: "bottom", class: "bottom_div"},
        title: { class: "title_div", text1: null, text2: null},
        enter: { class: "enter_div" },
        item : { id: null, url: null, alt: "item", food_name: null, price: null, options: [], description: null},
        items: [],
        menu: { image_url: null,
            description: null,
            image_alt: null,
            render: true,
            price: null,
            options: null,
            class: "item_menu_div close_item_menu"},
        classes: { class1: "options", class2: "icons_top" },
    }


    componentDidMount() {
        let item = {...this.state.item};
        let items = [...this.state.items];
        let new_items;
        fetch("http://3.138.193.87:3000/api/v1/get-foods-of-menu?menu_id=" + this.props.info.id)
            .then(response => response.json())
            .then(function (json) {
                json.data.map(() => items.push(item));
                let counter = 0;
                new_items = items.map(function (menu) {
                    let new_menu = {...menu};
                    new_menu.id = json.data[counter].food_id;
                    new_menu.url = json.data[counter].food_image;
                    new_menu.food_name = json.data[counter].food_name;
                    new_menu.price = json.data[counter].price;
                    new_menu.options = json.data[counter].options;
                    new_menu.description = json.data[counter].food_description;
                    counter++;
                    return new_menu;
                })
            }).then(()=> this.setState({ items: new_items }));

        let bottom_image = {...this.state.bottom_image};
        bottom_image.url = this.props.info.url;
        let title = {...this.state.title};
        title.text1 = this.props.info.name;
        this.setState({ title: title });
        this.setState({ bottom_image: bottom_image });
    }

    handleClick = () => {
        let bottom_image = {...this.state.bottom_image};
        let title = {...this.state.title};
        let enter = {...this.state.enter};
        let render = {...this.state.render};
        let classes = {...this.state.classes};
        bottom_image.class = "bottom_div arrange_bottom";
        title.class = "title_div arrange_title";
        enter.class = "enter_div arrange_enter";
        classes.class2 = "icons_top arrange_icons_top";
        classes.class3 = "icons_bottom arrange_icons_bottom";
        render.items = true;
        this.setState({ enter: enter });
        this.setState({ bottom_image: bottom_image });
        this.setState({ title: title });
        this.setState({ render: render });
        this.setState({ classes: classes });
    }

    handleItemClick = (item) => {
        let menu = {...this.state.menu};
        let render = {...this.state.render};
        let classes = {...this.state.classes};
        menu.image_url = item.url;
        menu.image_alt = item.alt;
        menu.price = item.price;
        menu.options = item.options;
        menu.description = item.description;
        menu.class = "item_menu_div open_item_menu";
        menu.render = true;
        if (item.options.length === 0){
            render.main = true;
            classes.class1 = "options none";
            this.setState({ classes: classes });
            this.setState({ render: render });
        }else if (item.options.length > 0){
            render.main = false;
            classes.class1 = "options";
            this.setState({ classes: classes });
            this.setState({ render: render });
        }
        this.setState({ menu: menu });
    }

    handleMenuClose =()=>{
        let menu = {...this.state.menu};
        menu.class = "item_menu_div close_item_menu";
        this.setState({ menu: menu });
    }

    renderMenu(){
        if (this.state.menu.render){
            return(
                <Menu onClick={ this.handleMenuClose } classes = { this.state.classes } render={ this.state.render } info={ this.state.menu }/>
            );
        }
    }

    renderItems = () =>{
        let state = {...this.state};
        let packs = [];
        let pack = [];
        let i = 0;
        if (state.items.length >= 2){
            state.items.map(function (item) {
                let new_item = {...item};
                pack.push(new_item);
                if (i % 2 !== 0){
                    packs.push(pack);
                    pack = [];
                }
                i++
            })
        }else{
            state.items.map(function (item) {
                let new_item = {...item};
                pack.push(new_item);
                packs.push(pack);
                pack = [];
            })
        }
        if (this.state.render.items){
            let state = {...this.state};
            let new_handleItemClick = this.handleItemClick;
            return(
                <div className="items_div">
                    {
                        packs.map(function (pack) {
                            return(
                                <div className="pack">
                                    { pack.map( item => <Item onClick={ new_handleItemClick } info={ item }/> ) }
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
    }

    render() {
        return(
            <div className="block_background">
                <div className="background_wrap">
                    <img className="background" src={ Background } alt="dinner"/>
                </div>
                <div className={ this.state.classes.class2 }>
                    <img src={ this.props.icons[1] } alt="icon"/>
                    <img src={ this.props.icons[2] } alt="icon"/>
                    <img src={ this.props.icons[3] } alt="icon"/>
                    <img src={ this.props.icons[4] } alt="icon"/>
                    <img src={ this.props.icons[5] } alt="icon"/>
                    <img src={ this.props.icons[6] } alt="icon"/>
                </div>
                <Back onClick={ this.props.onBackClick } />
                <div className="main">
                    <Bottom info={ this.state.bottom_image }/>
                    <Title info={ this.state.title }/>
                </div>
                <Enter onClick={ this.handleClick } info={ this.state.enter }/>
                { this.renderItems() }
                { this.renderMenu() }
            </div>
        );
    }
}

export default Block;