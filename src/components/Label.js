import React from 'react'

/* Assets */
import './styles/Label.css'

function High({message}) {
    return (
        <section className="Label__container">
            <p className="Label__text Label__priority-high">{ message }</p>
        </section>
    )
}

function Medium({message}) {
    return (
        <section className="Label__container">
            <p className="Label__text Label__priority-medium">{ message }</p>
        </section>
    )
}

function Low({message}) {
    return (
        <section className="Label__container">
            <p className="Label__text Label__priority-low">{ message }</p>
        </section>
    )
}

function Label(props) {
    switch (props.priority) {
        case "high":
            return <High message={props.value} />;
        case "medium":
            return <Medium message={props.value} />;
        case "low":
            return <Low message={props.value} />;
        default:
            return null;
    }
}

export default Label