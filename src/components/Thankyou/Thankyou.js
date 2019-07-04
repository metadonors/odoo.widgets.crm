import { h, Component } from "preact";
import "../../theme/style.scss";

export default class Thankyou extends Component {
    render() {
    const { theme } = this.props
        return (<div className={`thankyou-text ${theme === 'bootstrap3'?'display-1':''}`}>
            <h1>Thank You</h1>
            </div>);
    }
}
