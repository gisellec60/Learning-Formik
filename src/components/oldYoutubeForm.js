import React from 'react'
import {useFormik} from 'formik'
import * as Yup  from 'yup'

// 1. pass in property called initial values which is an object
const initialValues = {
    name: 'Giselle',
    email: '',
    channel: ''
}

// 4. add onSubmit property method that automatically receives the forms's
//     state as it arguments.
const onSubmit = values => {
  console.log('Form data', values)   
}
// 5. Validate the input  or use validationSchema below
// const validate = values => {
//    let errors = {}

//    if(!values.name) {
//         errors.name = 'Required'
//     }

//     if(!values.email) {
//         errors.email = 'Required'
//     }else if (!/^[A-z0-9._%+-]+@[A-z0-9.-]+\.[A-z]{2,4}$/i.test(values.email)) {
//         errors.email = 'invalid email format'
//     }
    
//     if(!values.channel) {
//         errors.channel = 'Required'
//     }

//     return errors
//  }
 
const validationSchema = Yup.object({
    name: Yup.string().required('Name is Required'),
    email:Yup.string().email('invaled email format').required('E-mail is Required'),
    channel:Yup.string().required('Channel is Required')
})

function YoutubeForm() {

  const formik = useFormik({
       initialValues,
       onSubmit, 
    //    validate
       validationSchema
  })  
  
     console.log('Visited fields', formik.touched)
//   console.log('Form errors', formik.errors)
//   console.log('Form errors', formik.errors)

  return (
    //  2. add the onchange and value prompt for each of the form fields
    <div>
    {/* 3. add the onSubmit handler to the form tag     */}
      <form onSubmit={formik.handleSubmit}>
        <div className='form-control'>
        <label htmlFor ='name'>Name</label>
        <input 
            type = 'text' 
            id='name' 
            name='name' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.name} />
        {/* check if field has been visited and an error exist */}
        {formik.touched.name && formik.errors.name ?  
        <div className='error'>{formik.errors.name}</div> : null}
        </div>

        <div className='form-control'>
        <label htmlFor ='email'>Email</label>
        <input 
            type = 'email' 
            id='email'
            name='email'
            onChange={formik.handleChange} 
            // onBlur stores information on whether a field has been visited.
            onBlur={formik.handleBlur}
            value={formik.values.email} />
        {formik.touched.email && formik.errors.email ? 
        <div className='error'>{formik.errors.email}</div> : null}
        </div>

        <div className='form-control'>
        <label htmlFor ='channel'>Channel</label>
        <input 
            type = 'text' 
            id='channel' 
            name='channel' 
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            value={formik.values.channel}/>
        {/* 6. check if we have an error message?     */}
        {formik.touched.channel && formik.errors.channel ? 
        <div className='error'>{formik.errors.channel}</div> : null}
        </div>

        <button type = 'submit'>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
