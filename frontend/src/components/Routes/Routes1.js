
import Task1 from "../tasks/Task1";
import Home from "../Home";
import Admin from   '../admin/Admin'
import Profile from "../Profile";
import Help from "../Help";
import About from "../About";
import Login from '../authentication/Login'
import Register from "../authentication/Register";
import Alumini from "../alumini/Alumini"
import Counter from '../counter/Counter'
import { AluminiData } from "../alumini/AluminiData";
import TodoList from "../TodoList/TodoList";
import Routes2 from "./Routes2";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminProtectedRoute from './AdminProtectedRoute'
import { Provider } from 'react-redux'
export default function Routes1(){
    return (
        <div className="container-fluid h-100">
           
        <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Home />}
                        >
                            
                        </Route>
                        

                        <Route
                            exact
                            path="/About"
                            element={<About />}
                        >
                            
                        </Route>
                        

                        <Route
                            exact
                            path="/Profile"
                            element={
                                <ProtectedRoute>
                            <Profile />
                             </ProtectedRoute>
                        }

                        >
                            
                        </Route>
                        
                        <Route
                            exact
                            path="/Help"
                            element={<Help />}
                        >

                        </Route>
                        <Route
                            exact
                            path="/Register"
                            element={<Register />}
                        >
                            
                        </Route>
                        <Route
                            exact
                            path="/Login"
                            element={<Login />}
                        >
                            
                        </Route>
                        <Route
                            exact
                            path="/Alumini"
                            element={<Alumini />}
                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/Counter"
                            element={<Counter />}
                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/Admin"
                            element={
                                <AdminProtectedRoute>
                            <Admin />
                             </AdminProtectedRoute>
                        }

                        >
                            
                        </Route>

                        <Route
                            exact
                            path="/AluminiData"
                            element={
                               
                            <AluminiData />
                            
                        }

                        >
                            
                        </Route>
                        <Route
                            exact
                            path="/TodoLIst"
                            element={
                                <ProtectedRoute>
                            <TodoList />
                            </ProtectedRoute>
                                }
                        >
                            
                        </Route>


                        
                    </Routes>
                    </div>
    )
}