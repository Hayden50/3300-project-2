import {Formik, Field, Form} from 'formik';
import axios from 'axios';
import "./NameForm.css";

const NameForm = props => {

    const initVals = {
        name1: '',
        name2: '',
    };

    const handleSubmit = (values) => {
        axios.post('https://3300-project-2-backend.vercel.app/api/player', values).then(res => {
            console.log(JSON.stringify(res.data[0]));
            props.setPlayerOneData(res.data[0]);
            props.setPlayerTwoData(res.data[1]);
            props.setDiffData(res.data[2]);
        }).catch(err => console.log(err));
    };

    return (
        <div>
            <p className='formik-title'>NBA Comparison Machine</p>
            <Formik initialValues={initVals} onSubmit = {values => {handleSubmit(values)}}>
                <Form className='formik-form'>
                    <Field className="formik-field" id="name1" name="name1" placeholder="Ja Morant" />
                    <button type = "submit" className='compare-button'>Compare</button>
                    <Field className="formik-field" id="name2" name="name2" placeholder="LeBron James" />
                </Form>
            </Formik>
        </div>
    )
}

export default NameForm;