import React from "react";
import getData from "./api/api";



export default class List extends React.Component{
    render(){
        var returnval;
        if (this.props.value == ""){
            returnval =
            <ul>List of Products:
                {this.props.list.map(item => (
                <li key={item.id}>
                    <div>{item.id}</div>
                    <div>{item.name}</div>
                </li>
                ))}
            </ul>;
        }
        else{
            var chosenitems = [];
            for (var i = 0; i < this.props.list.length; i++){
                var item = this.props.list[i];
                if (this.props.value == item.category) {
                    chosenitems.push(item);
                }
            }
            console.log(chosenitems);
            returnval = 
            <ul>
                List of Products:
                {chosenitems.map(item => (
                    <li key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                    </li>
                ))}
            </ul>;
        }
        return returnval;
    }
}