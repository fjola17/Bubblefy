import React from 'react';
const getBubbles = () =>{
    return {products : [        {
        id: 1,
        name: "Plain bubbles",
        description: "These are the plain bubbles! They are as plain as they get!",
        price: 499,
        image: "https://i.imgur.com/ZiNsJOp.png"
    },
    {
        id: 2,
        name: "Wild bubbles",
        description: "These are the wild bubbles! They form various shapes as found in the wild! Look out! It's a bubble bear!",
        price: 799,
        image: "https://i.imgur.com/w9Usvcd.png"
    },
    {
        id: 3,
        name: "Triple bubbles",
        description: "These are the triple bubbles! A guarantee of three bubbles each blow and it never fails! Never!",
        price: 599,
        image: "https://i.imgur.com/5ugrK8x.png"
    },
    {
        id: 4,
        name: "Bubblegum bubba-bubbles",
        description: "The infamous Bubblegum bubba-bubbles! They smell like bubblegum and they even taste like bubblegum! If you manage to catch them, you can eat them and they will turn into bubblegum! Amazing!",
        price: 999,
        image: "https://i.imgur.com/XoA1hDZ.png"
    },
    {
        id: 5,
        name: "Dark matter",
        description: "The Dark Matter bubbles are unique and a new hit! They are black as the night and heavy as well, so they don't float! They sink!",
        price: 899,
        image: "https://i.imgur.com/3kIIn3i.png"
    },
    {
        id: 6,
        name: "Christmas bubbles",
        description: "The seasonal Christmas bubbles are right around the corner! They come in white, green and red!",
        price: 699,
        image: "https://i.imgur.com/UoqLLcB.png"
    }]}
}
class ProductItem extends React.Component{
    
    componentDidMount() {
        /*ATH: VIRKAR EKKI OG ÞARF AÐ LAGA
        var productItem = getBubbles.find((item)=> item.id =this.props.match.params.product);
        console.log(productItem);
        this.setState({productItem:productItem});*/
    }
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    render(){
        console.log("hallo");
        return (
        
        <div><p>No products can be seen right now, I'm just a placeholder </p>
        <button>Add to cart</button>
        </div>
        )
    }
}
export default ProductItem;
