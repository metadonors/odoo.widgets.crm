import { h, Component } from "preact";
import { Formik, Label } from "formik";
import "../../theme/style.scss";

class TextInput extends Component {


    render() {

        const { theme } = this.props
        console.log(theme)

        const { label, onChange, onBlur, value, name, required, error } = this.props;
        return (
            <div 
                className={`container-div ${theme === 'bootstrap3' ? 'form-group':''}`}
                style={`${this.props.direction === 'row'?'flex-direction:row':'flex-direction:column'}`}>
                <label className='input-label'>{label} {required?' *':''}</label>
                <div className="inner-field-container">
                        {this.props.textarea ? (
                            <textarea
                                className={`${theme === 'bootstrap3' ? 'form-control':''}`}
                                onChange={onChange}
                                onBlur={onBlur}
                                name={name}
                                value={value}>
                                </textarea>
                        ) : (
                            <input
                                className={`${theme === 'bootstrap3' ? 'form-control':''}`}
                                onChange={onChange}
                                onBlur={onBlur}
                                name={name}
                                value={value}
                            />
                        )}
                    <div>{error}</div>
                </div>
            </div>
        );
    }
}

export default TextInput