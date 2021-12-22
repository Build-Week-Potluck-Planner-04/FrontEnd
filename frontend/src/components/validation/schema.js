import * as yup from 'yup'

const schema = yup.object().shape({
    username: yup.string().trim().required('Host Name is required!'), 
    event_name: yup.string().required('Event Name is required!'),
    time: yup.string().required('Event Time is required!'),
    date: yup.string().required('Event Date is required!'),
    location: yup.string().required('Event Location is required!'),
    guests: yup.string().required('Guests must be invited!'),
    food: yup.string().required('Event Foods must be added!'),

})

export default schema;