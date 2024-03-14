import Card from "./Card"
import Task1 from "./tasks/Task1";
import { Link } from "react-router-dom";
export default function Home_test(){
    return (
        <>
       <div className="container-fluid ">
        <div className="row">
            <div className="col-md-4">
                <Card>
                    <Link to="/Task1">
                    <p>task</p>
                </Link>
                </Card>
            </div>
            <div className="col-md-4">
            <Card>
                <p>task</p>
            </Card>
            </div>
            <div className="col-md-4">
            <Card>
            <p>task</p>
            </Card>
            </div>
        </div>

       </div>
        </>
    )
}