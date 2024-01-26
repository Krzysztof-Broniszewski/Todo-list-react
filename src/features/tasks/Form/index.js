import { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from '@reduxjs/toolkit';
import { Input, StyledForm, FormButton } from "./styled";
import { theme } from "../../../theme";
import { addTask } from '../taskSlice';

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const trimmedNewTaskContent = newTaskContent.trim();
        if (!trimmedNewTaskContent) {
            setNewTaskContent("");
            return;
        }

        dispatch(addTask({
            content: trimmedNewTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm
            theme = {theme}
            onSubmit={onFormSubmit}
        >
            <Input
                ref={inputRef}
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