import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Task1 from "../tasks/Task1";
import TasksHomePage from "../tasks/TasksHomePage";
import DeveloperRoutes from  './TasksRoutes/DeveloperRoutes'
export default function Routes2(){
    return(<>
    <DeveloperRoutes/>
    <Routes>
                        <Route
                            exact
                            path="/Task1"
                            element={<Task1 />}
                        >
                            
                        </Route>
                        <Route
                            exact
                            path="/TasksHomePage"
                            element={<TasksHomePage />}
                        >
                            
                        </Route>
                        
    </Routes>
    </>)
}