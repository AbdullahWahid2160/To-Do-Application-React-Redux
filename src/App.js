import React from "react";
import { useSelector } from "react-redux";
import Header from "./Components/Header";
import Form from "./Components/Form";
import PendingTasks from './Components/PendingTasks';
import CompletedTasks from './Components/CompletedTasks';
import Footer from "./Components/Footer";

export default function App() {
    const Tasks = useSelector(state => state.Tasks);
    return (
        <div className="MainApp">
            <Header />
            <Form />
            <Footer />
        </div>
    );
}
