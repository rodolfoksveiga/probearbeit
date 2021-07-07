// Import components, functions, types, and variables
import { connect } from 'react-redux'
import { Formik } from 'formik'
import {
    Button,
    ButtonGroup,
    Card,
    Col,
    Container,
    Form,
    Row
} from 'react-bootstrap'
import * as yup from 'yup'

import createMeeting from '../../actions/createMeeting'
import { useHistory } from 'react-router-dom'

// Types and interfaces
export interface IMeetingForm {
    date_time: string
    local: string
    mode: number
    team1: string
    team2: string
}

interface IMeetingFormProps {
    initialFormData: IMeetingForm
    vertical: boolean
    createMeeting: Function
    handleTriggerReload: Function
}

// Variables
const FormSchema = yup.object().shape({
    date_time: yup.string().required('Required field'),
    local: yup.string().required('Required field'),
    mode: yup.string().required('Required field.'),
    team1: yup.string().required('Required field.'),
    team2: yup.string().required('Required field.')
})

// Component
export function MeetingCreate({
    vertical,
    createMeeting,
    handleTriggerReload
}: IMeetingFormProps) {
    const history = useHistory()

    function handleSubmit(formData: IMeetingForm) {
        createMeeting(formData)
    }

    return (
        <Formik
            initialValues={{
                date_time: '',
                local: '',
                mode: 0,
                team1: '',
                team2: ''
            }}
            onSubmit={(form, { resetForm, setSubmitting }) => {
                handleSubmit(form)
                resetForm()
                setSubmitting(false)
                handleTriggerReload()
            }}
            validationSchema={FormSchema}
            validateOnChange={false}
        >
            {({
                values,
                touched,
                errors,
                handleSubmit,
                handleChange,
                handleReset
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Card className="my-2 mx-5 shadow">
                        <Container fluid className="p-0">
                            <Card.Header
                                className="font-weight-bold py-1 px-3"
                                as="h4"
                            >
                                <Form.Label>Create Meeting</Form.Label>
                            </Card.Header>
                            <Card.Body className="p-0">
                                <Form.Group controlId="date_time">
                                    <Form.Control
                                        className="border-0"
                                        value={values.date_time}
                                        type="text"
                                        placeholder="Date/Time"
                                        onChange={handleChange}
                                        isInvalid={!!errors.date_time}
                                        isValid={
                                            touched.date_time &&
                                            !errors.date_time
                                        }
                                    />
                                    <Form.Control.Feedback
                                        className="pl-2"
                                        type="invalid"
                                    >
                                        {errors.date_time}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="local">
                                    <Form.Control
                                        className="border-0"
                                        value={values.local}
                                        type="text"
                                        placeholder="Local"
                                        onChange={handleChange}
                                        isInvalid={!!errors.local}
                                        isValid={touched.local && !errors.local}
                                    />
                                    <Form.Control.Feedback
                                        className="pl-2"
                                        type="invalid"
                                    >
                                        {errors.local}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="mode">
                                    <Form.Control
                                        className="border-0"
                                        value={values.mode}
                                        type="text"
                                        placeholder="Game mode"
                                        onChange={handleChange}
                                        isInvalid={!!errors.mode}
                                        isValid={touched.mode && !errors.mode}
                                    />
                                    <Form.Control.Feedback
                                        className="pl-2"
                                        type="invalid"
                                    >
                                        {errors.mode}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="team1">
                                    <Form.Control
                                        className="border-0"
                                        value={values.team1}
                                        type="text"
                                        placeholder="Team 1"
                                        onChange={handleChange}
                                        isInvalid={!!errors.team1}
                                        isValid={touched.team1 && !errors.team1}
                                    />
                                    <Form.Control.Feedback
                                        className="pl-2"
                                        type="invalid"
                                    >
                                        {errors.team1}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="team2">
                                    <Form.Control
                                        className="border-0"
                                        value={values.team2}
                                        type="text"
                                        placeholder="Team 2"
                                        onChange={handleChange}
                                        isInvalid={!!errors.team2}
                                        isValid={touched.team2 && !errors.team2}
                                    />
                                    <Form.Control.Feedback
                                        className="pl-2"
                                        type="invalid"
                                    >
                                        {errors.team2}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Card.Body>
                            <ButtonGroup
                                className="self-align-center"
                                vertical={vertical}
                            >
                                <Button variant="success" type="submit">
                                    Save
                                </Button>
                                <Button
                                    variant="secondary"
                                    type="reset"
                                    onClick={handleReset}
                                >
                                    Clear
                                </Button>
                                <Button
                                    variant="danger"
                                    onClick={() => history.push('/meetings/')}
                                >
                                    Cancel
                                </Button>
                            </ButtonGroup>
                        </Container>
                    </Card>
                </Form>
            )}
        </Formik>
    )
}

// Redux
export default connect(null, { createMeeting })(MeetingCreate)
