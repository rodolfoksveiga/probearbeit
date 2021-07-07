// Import components, functions, types, and variables
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/Home'
// Component
export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
            </Switch>
        </BrowserRouter>
    )
}
