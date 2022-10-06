import React, {Component} from 'react'

class Userdata extends Component{
    constructor(props){
        super(props)
        this.state={
            show:true,
            count:0,
            Price:10000
        };
        this.increasePrice=this.increasePrice.bind(this);
        }
increasePrice(){
    this.setState({price:this.state.Price+10000});
}
componentDidMount(){
    console.log('');
}
componentDidUpdate(){
    console.log('');
}
render(){
    let myheader;
    if(this.state.show){
        myheader=<Child/>;
    };
    return(
        <div>
            <th>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkg7BZwNw2VGM_RgX5coRxM2PZ3HA5wv9fxp0ZhwUdpJjsaffFRoYZQhCxLBu9BCNPmIs&usqp=CAU" alt=""></img>
            </th>
            <center>
                <th>
                {myheader}
                <button type="button" onClick={this.delHeader}>Accept</button>
                {/* <h3>count:{this.state.count}</h3> */}  <h3> </h3>
                <button onClick={()=>this.setState({Price:this.state.Price+10000})}>NotAccept</button>
                </th>
            </center>
        </div>
    );
}
}
class Child extends Component{
    componentWillUnmount(){
        console.log("componentWillUnmount method")
    }
    render(){
        return(
            <p> Name:'Micka'</p>
        );
    }
    }
    export default Userdata;












