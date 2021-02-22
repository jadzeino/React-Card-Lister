import React,{Component} from 'react'
class ErrorBoundary extends Component{
    constructor(props){
    super(props)
        this.state={hasError:false}
    }
    componentDidCatch(){
        this.setState({hasError: true})
    }
    render(){
        return (this.state.hasError ? (<h1>Ooops this is not good ,has some error</h1>) : <div>{this.props.children}</div>)
    }
}
export default ErrorBoundary