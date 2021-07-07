// Import components, functions, types, and variables
import { Container } from 'react-bootstrap'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import MeetingsList from './components/meetings/MeetingsList'
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
                    <Route path="/players/" component={Home} exact />
                </Switch>
            </Container>
        </BrowserRouter>
    )
}
