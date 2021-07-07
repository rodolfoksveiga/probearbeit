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
    handleToggleCreate?: Function
    handleToggleUpdate?: Function
    handleTriggerReload: Function
}

// Variables
const FormSchema = yup.object().shape({
    date_time: yup
        .string()
        .required('you must write something in your meeting.'),
    local: yup.string().required('you must write something in your meeting.'),
    mode: yup.string().required('you must write something in your meeting.'),
    team1: yup.string().required('you must write something in your meeting.'),
    team2: yup.string().required('you must write something in your meeting.')
})

// Component
export function MeetingForm({
    initialFormData,
    vertical,
    createMeeting,
    handleToggleCreate,
    handleToggleUpdate,
    handleTriggerReload
}: IMeetingFormProps) {
    function handleSubmit(formData: IMeetingForm) {
        if (handleToggleCreate) {
            createMeeting(formData)
            handleToggleCreate()
        }
        if (handleToggleUpdate) {
            createMeeting(formData)
            handleToggleUpdate()
        }
    }

    function handleCancel() {
        if (handleToggleCreate) {
            handleToggleCreate()
        }

        if (handleToggleUpdate) {
            handleToggleUpdate()
        }
    }

    return (
        <Formik
            initialValues={initialFormData}
            onSubmit={(form, { resetForm, setSubmitting }) => {
                handleSubmit(form)
                resetForm()
                setSubmitting(false)
                handleTriggerReload()
            }}
            validationSchema={FormSchema}
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
                            <Row className="mx-0">
                                <Col md={10} className="p-0">
                                    <Card.Header
                                        className="font-weight-bold py-1 px-3"
                                        as="h4"
                                    >
                                        <Form.Label>Meeting</Form.Label>
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
                                                isValid={
                                                    touched.local &&
                                                    !errors.local
                                                }
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
                                                placeholder="Local"
                                                onChange={handleChange}
                                                isInvalid={!!errors.mode}
                                                isValid={
                                                    touched.mode && !errors.mode
                                                }
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
                                                placeholder="Local"
                                                onChange={handleChange}
                                                isInvalid={!!errors.team1}
                                                isValid={
                                                    touched.team1 &&
                                                    !errors.team1
                                                }
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
                                                placeholder="Local"
                                                onChange={handleChange}
                                                isInvalid={!!errors.team2}
                                                isValid={
                                                    touched.team2 &&
                                                    !errors.team2
                                                }
                                            />
                                            <Form.Control.Feedback
                                                className="pl-2"
                                                type="invalid"
                                            >
                                                {errors.team2}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Card.Body>
                                </Col>
                                <Col
                                    md={2}
                                    className="d-flex border-top border-left py-1 py-md-0 my-0 text-center justify-content-center align-items-center"
                                >
                                    <ButtonGroup vertical={vertical}>
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
                                            onClick={handleCancel}
                                        >
                                            Cancel
                                        </Button>
                                    </ButtonGroup>
                                </Col>
                            </Row>
                        </Container>
                    </Card>
                </Form>
            )}
        </Formik>
    )
}

// Redux
export default connect(null, { createMeeting })(MeetingForm)
