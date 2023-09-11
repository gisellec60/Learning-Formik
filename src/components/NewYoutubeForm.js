import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup  from 'yup'

//handle form state
const initialValues = {
    name: 'Giselle',
    email: '',
    channel: ''
}

// handle form submission onSubmit and formik.handleSubmit
const onSubmit = values => {
  console.log('Form data', values)   
}

// Validation using Yup library
const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    email:Yup.string().email('invaled email format').required('E-mail is Required'),
    channel:Yup.string().required('Channel is Required')
})

function YoutubeForm() {
  return (
    //1. Import Formik and wrap entire form with Formick 
    <Formik 
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {onSubmit} >
        {/* 2. import and replace the form tag with Form */}
        <Form>
          <div className='form-control'>
            <label htmlFor ='name'>Name</label>
            {/* 3. import and replace input field with Field */}
            <Field type = 'text' id='name' name='name' />
            {/* 4. import ErrorMessage and replace error message code  */}
            <ErrorMessage name = 'name' />
          </div>

          <div className='form-control'>
            <label htmlFor ='email'>Email</label>
            <Field type = 'email' id='email' name='email' />
            <ErrorMessage name = 'email'/>
          </div>

          <div className='form-control'>
            <label htmlFor ='channel'>Channel</label>
            <Field type = 'text' id='channel' name='channel'/>
            <ErrorMessage name = 'channel' />
          </div>

          <button type = 'submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default YoutubeForm

