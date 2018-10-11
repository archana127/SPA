import React from 'react';
const newData={
data:'I am data from HOC'

}

const MyHoc=(ComposedComponent)=>
class extends React.component{

    componentDidMount(){
        this.setState({
            data:newData.data

        })

    }
render(){
    return<ComposedComponent{...this.props} {...this.state}/>;
}
};
class MyComponent extends React.Component{

    render()
    { retur(
        <div><h1>Testing HOS</h1>
        <h2>{this.props.data}</h2></div>
    )}
}
export default MyHoc(MyComponent)












