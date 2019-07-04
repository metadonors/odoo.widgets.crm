import { h, Component } from "preact";
import { Formik, Label } from "formik";
import TextInput from './TextInput';
import "../../theme/style.scss";

class LeadForm extends Component {
    render() {
        const { requiredFields, theme, formDirection } = this.props

        return (
            <div>
                <Formik
                    onSubmit={this.props.onSubmit}
                    initialValues={initialValues}
                    validate={validate(this.props)}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                    }) => (
                        <form onSubmit={handleSubmit}>
                                <TextInput
                                    theme={theme}
                                    direction={formDirection}
                                    label={"Name"}
                                    name={"name"}
                                    required
                                    onChange={handleChange('contact_name')}
                                    onBlur={handleBlur('contact_name')}
                                    error={errors.contact_name && touched.contact_name ? errors.contact_name : null}
                                    value={values.contact_name}
                                    />
                                
                                <TextInput
                                    theme={theme}
                                    direction={formDirection}
                                    label={"Email **"}
                                    name={"email"}
                                    required={requiredFields.indexOf('email') >= 0}
                                    onChange={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    error={errors.email && touched.email ? errors.email : null}
                                    value={values.email}
                                    />

                                
                                <TextInput
                                    theme={theme}
                                    direction={formDirection}
                                    label={"Phone **"}
                                    name={"phone"}
                                    required={requiredFields.indexOf('phone') >= 0}
                                    onChange={handleChange('phone')}
                                    onBlur={handleBlur('phone')}
                                    error={errors.phone && touched.phone ? errors.phone : null}
                                    value={values.phone}
                                    />
                                
                                <TextInput
                                    theme={theme}
                                    direction={formDirection}
                                    label={"Mobile **"}
                                    name={"mobile"}
                                    required={requiredFields.indexOf('mobile') >= 0}
                                    onChange={handleChange('mobile')}
                                    onBlur={handleBlur('mobile')}
                                    error={errors.mobile && touched.mobile ? errors.mobile : null}
                                    value={values.mobile}
                                    />

                                <TextInput
                                    theme={theme}
                                    direction={formDirection}
                                    label={"Job"}
                                    name={"job"}
                                    required={requiredFields.indexOf('job') >= 0}
                                    onChange={handleChange('job')}
                                    onBlur={handleBlur('job')}
                                    error={errors.job && touched.job ? errors.job : null}
                                    value={values.job}
                                    />
                                
                                <TextInput
                                    theme={theme}
                                    direction={formDirection}
                                    label={"Company name"}
                                    name={"company_name"}
                                    required={requiredFields.indexOf('company_name') >= 0}
                                    onChange={handleChange('company_name')}
                                    onBlur={handleBlur('company_name')}
                                    error={errors.company_name && touched.company_name ? errors.company_name : null}
                                    value={values.company_name}
                                    />
                                
                                <TextInput
                                    theme={theme}
                                    direction={formDirection}
                                    label={"Website"}
                                    name={"website"}
                                    required={requiredFields.indexOf('website') >= 0}
                                    onChange={handleChange('website')}
                                    onBlur={handleBlur('website')}
                                    error={errors.website && touched.website ? errors.website : null}
                                    value={values.website}
                                    />

                                <TextInput
                                    theme={theme}
                                    direction={formDirection}
                                    label={"Subject"}
                                    name={"subject"}
                                    required={requiredFields.indexOf('subject') >= 0}
                                    onChange={handleChange('subject')}
                                    onBlur={handleBlur('subject')}
                                    error={errors.subject && touched.subject ? errors.subject : null}
                                    value={values.subject}
                                    />

                                <TextInput
                                    theme={theme}
                                    direction={formDirection}
                                    label={"Message"}
                                    name={"message"}
                                    textarea
                                    required={requiredFields.indexOf('message') >= 0}
                                    onChange={handleChange('message')}
                                    onBlur={handleBlur('message')}
                                    error={errors.message && touched.message ? errors.message : null}
                                    value={values.message}
                                    />
                                
                                <div className="form-footer">
                                {!this.props.isLoading ? (
                                <button className={`${theme === 'bootstrap3'?'btn btn-primary':''}`} type="submit" onClick={this.handleLoadingButton}>Submit</button>)
                                :
                                (<button className={`${theme === 'bootstrap3'?'btn btn-primary':''}`} type="submit" disabled>Submit</button>)
                            }
                            </div>

                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}

const initialValues = {
    subject: "",
    message: "",
    contact_name: "",
    email: "",
    function: "",
    phone: "",
    mobile: "",
    company_name: "",
    website: ""
}

const validate = (props) => (values) => {
    const errors = {}
    const { requiredFields } = props;
    if (!values.email && !values.mobile && !values.phone){
        errors['email'] = "This field is requested by the server"
        errors['phone'] = "This field is requested by the server"
        errors['mobile'] = "This field is requested by the server"
        return errors
    }

    if(requiredFields.indexOf('subject') >= 0  && !values.subject) {
        errors['subject'] = "This field is required"
    }
    if(requiredFields.indexOf('message') >= 0  && !values.message) {
        errors['message'] = "This field is required"
    }
    if(requiredFields.indexOf('contact_name') >= 0  && !values.contact_name) {
        errors['contact_name'] = "This field is required"
    }
    if(requiredFields.indexOf('email') >= 0  && !values.email) {
        errors['email'] = "This field is required"
    }
    if(requiredFields.indexOf('job') >= 0  && !values.job) {
        errors['job'] = "This field is required"
    }
    if(requiredFields.indexOf('phone') >= 0  && !values.phone) {
        errors['phone'] = "This field is required"
    }
    if(requiredFields.indexOf('mobile') >= 0  && !values.mobile) {
        errors['mobile'] = "This field is required"
    }
    if(requiredFields.indexOf('company_name') >= 0  && !values.company_name) {
        errors['company_name'] = "This field is required"
    }
    if(requiredFields.indexOf('website') >= 0  && !values.website) {
        errors['website'] = "This field is required"
    }
    // TODO Finire la validazione

    return errors
}

export default LeadForm;
