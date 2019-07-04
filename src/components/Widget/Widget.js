import { h, Component } from "preact";
import "../../theme/style.scss";
import LeadForm from "../Form/LeadForm";
import Thankyou from "../Thankyou/Thankyou";
import ErrorsFields from "../Form/ErrorsFields"

export default class Widget extends Component {
    state = {
        status: false,
        isLoading: false,
        isSubmitted: false,
        error: ""
    };

    postRequest = (url, data) => {
        console.log("DATA")
        console.log(data)

        return fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(response => response.json());
    };

    handleSubmit = async values => {
        console.log(values)
        this.setState({ isLoading: true });
        try {
            const response = await this.postRequest(
                "http://localhost/api/public/v1/leads/",
                values
            );
            this.setState({ isLoading: false, isSubmitted: true });
        } catch (e) {
            console.log(e);
            this.setState({ isLoading: false, error: e });

        }
    };

    render() {
        const { status, isLoading, isSubmitted, error } = this.state;
        return (
            <div className="odoo-widget">
                {!isSubmitted ? (
                    <div class="header">
                        <h1>Compile CRM Leads fields</h1>
                        <LeadForm
                            onSubmit={this.handleSubmit}
                            isLoading={this.state.isLoading}
                            requiredFields={
                                this.props.requiredFields
                                    ? this.props.requiredFields
                                    : []
                            }
                            theme={this.props.theme}
                            formDirection={this.props.formDirection}
                        />
                    </div>
                ) : (<Thankyou />)}
                {error ? (<ErrorsFields value={error}/>):null}
            </div>
        );
    }
}
