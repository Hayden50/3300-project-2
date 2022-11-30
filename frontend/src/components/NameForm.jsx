import {Formik, Field, Form} from 'formik';
import axios from 'axios';

const NameForm = props => {

    const initVals = {
        name1: '',
        name2: '',
    };

    const handleSubmit = (values) => {
        axios.post('/api/player', values).then(res => {
            console.log(JSON.stringify(res.data[0]));
            props.setPlayerOneData(res.data[0]);
            props.setPlayerTwoData(res.data[1]);
        }).catch(err => console.log(err));
    };

    return (
        <div>
            <p>Input Player Names</p>
            <Formik initialValues={initVals} onSubmit = {values => {handleSubmit(values)}}>
                <Form>
                    <Field id="name1" name="name1" placeholder="Ja Morant" />
                    <Field id="name2" name="name2" placeholder="Trae Young" />
                    <button type = "submit">Compare</button>
                </Form>
            </Formik>
        </div>
    )
}

export default NameForm;