import { useState } from 'react';
import { Input, StyledForm, FormButton } from "./styled";
import { theme } from "../theme";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();
        if (!trimmedNewTaskContent) {
            setNewTaskContent("");
            return;
        }

        addNewTask(trimmedNewTaskContent);
        setNewTaskContent("");
    };

    return (
        <StyledForm
            theme = {theme}
            onSubmit={onFormSubmit}
        >
            <Input
                theme={theme}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <FormButton
                theme={theme}
            >
                Dodaj zadanie
            </FormButton>
        </StyledForm>
    );
};

export default Form;