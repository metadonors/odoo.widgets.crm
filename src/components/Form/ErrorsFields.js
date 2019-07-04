import { h, Component } from "preact";
import "../../theme/style.scss";

export default class ErrorsFields extends Component {
    render() {

        const { value } = this.props;
        return (
            <div className="form-footer">{value.message}</div>
            );
    }
}
