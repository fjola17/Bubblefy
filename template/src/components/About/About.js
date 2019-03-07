import React from 'react';
class About extends React.Component{
    render(){
        return(
            <div className="text-center text-primary">
                <h1 className="font-weight-bold text-uppercase">About Bubblefy </h1>
                <div>
                    <p>Bubblefy is a website which makes all your bubble dreams/troubles become real</p>
                    <p>No matter how many bubbles you need, for whatever purpose and when you need them, we will take care of it and you'll be satified</p>
                    <p>Founded in 2018 in Iceland</p>
                </div>
                <p>This website was inspired by the famous and classic video game named Bubble Trouble</p>
                <p>The people behind Bubblefy</p>
                <div className="d-flex">
                    <div className="flex-column"><img className="w-50 h-50" src="http://run-3.online/upload/cache/upload/imgs/bubble-trouble-c400x300.png"/><p>Fjóla Sif Sigvaldadóttir</p></div>
                    <div className="flex-column"><img className="w-50 h-50" src="http://run-3.online/upload/cache/upload/imgs/bubble-trouble-c400x300.png"/><p>Viðar Sigurðsson</p> </div>
                    <div className="flex-column"><img className="w-50 h-50" src="http://run-3.online/upload/cache/upload/imgs/bubble-trouble-c400x300.png"/><p> Þorsteinn Sævar Kristjánsson</p> </div>
                </div>
            </div>
        )
    }
}
export default About;