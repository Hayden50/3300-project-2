import {Formik, Field, Form} from 'formik';
import axios from 'axios';

const NameForm = () => {

    return (
        <div>
            <p>Input Player Names</p>
            <Formik 
                initialValues={{
                    pName1: '',
                    pName2: '',
                }}
                onSubmit = {values=> {
                    console.log(values)
                }}
            >
                <Form>
                    <Field id="pName1" name="pName1" placeholder="Ja Morant" />
                    <Field id="pName2" name="pName2" placeholder="Trae Young" />
                    <button type = "submit">Compare</button>
                </Form>
            </Formik>


            
        </div>
    )
}

export default NameForm;