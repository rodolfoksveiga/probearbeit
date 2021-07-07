// Import components, functions, types, and variables
import { Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import MeetingCreate from './components/meetings/MeetingCreate'
import MeetingsList from './components/meetings/MeetingsList'
import MeetingUpdate from './components/meetings/MeetingUpdate'
import NavigationBar from './components/NavigationBar'

// Component
export default function App() {
    return (
        <BrowserRouter>
            <Container>
                <NavigationBar />
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/meetings/" component={MeetingsList} exact />
                    <Route
                        path="/meetings/create/"
                        component={MeetingCreate}
                        exact
                    />
                    <Route
                        path="/meetings/update/"
                        component={MeetingUpdate}
                        exact
                    />
                    <Route path="/meetings/" component={MeetingsList} exact />

                    <Route path="/players/" component={Home} exact />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
