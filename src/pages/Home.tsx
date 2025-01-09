import { useState } from "react";
import DragableModel from "../components/DragableModel";
import MouseControlModel from "../components/MouseControlModel";

const Home = () => {
    const [isDragable, setIsDragable] = useState(false);

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid justify-content-center">
                    <button
                        className="btn border-0"
                        style={
                            !isDragable ? { fontWeight: "bold" } : { fontWeight: "normal" }
                        }
                        onClick={() => {
                            setIsDragable(false);
                        }}
                    >
                        Mouse Control
                    </button>
                    <button
                        className="btn border-0"
                        style={
                            isDragable ? { fontWeight: "bold" } : { fontWeight: "normal" }
                        }
                        onClick={() => {
                            setIsDragable(true);
                        }}
                    >
                        Dragable
                    </button>
                </div>
            </nav>
            {isDragable ? <DragableModel /> : <MouseControlModel />}
        </div>
    );
};

export default Home;
