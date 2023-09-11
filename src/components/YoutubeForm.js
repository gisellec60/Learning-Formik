import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup  from 'yup'
import TextError from './TextError'

//handle form state
const initialValues = {
    name: 'Giselle',
    email: '',
    channel: '',
    comments: '',
    address: ''
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
    <Formik 
        initialValues = {initialValues}
        validationSchema = {validationSchema}
        onSubmit = {onSubmit} >
        <Form>
          <div className='form-control'>
            <label htmlFor ='name'>Name</label>
            <Field type = 'text' id='name' name='name' />
            {/* using the custom component TextError.js to make the message red */}
            <ErrorMessage name = 'name' component={TextError}/>
          </div>

          <div className='form-control'>
            <label htmlFor ='email'>Email</label>
            <Field type = 'email' id='email' name='email' />
            {/* instead of using the custom component as we did for name to change the color of the message
            we can use rendered props to change the color . */}
            <ErrorMessage name = 'email'>
               {
                (errorMsg) => <div className='error'>{errorMsg}</div>
               } 
            </ErrorMessage>    
          </div>

          <div className='form-control'>
            <label htmlFor ='channel'>Channel</label>
            <Field type = 'text' id='channel' name='channel'/>
            <ErrorMessage name = 'channel' component={TextError} />
          </div>

          <div className='form-control'>
            <label htmlFor ='comments'>Comments</label>
            <Field as = 'textarea' id='comments' name='comments'/>
            <ErrorMessage name = 'comments' />
          </div>

          <div className='form-control'>
            <label htmlFor ='address'>Address</label>
         {/* example of Rendered Props pattern used for more fine grade control over form */}
            <Field name='address'>
              {
                (props) => {
                   const {field, form, meta} = props
                   console.log('Render props', props)
                   return (
                    <div>
                      <input type = 'text' id='address' {...field} />
                      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                    </div>  
                   ) 
                     
                }
              }  
            </Field>    
            <ErrorMessage name = 'comments' />
          </div>

          <button type = 'submit'>Submit</button>
        </Form>
    </Formik>
  )
}

export default YoutubeForm
