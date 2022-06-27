import React, {useEffect, useState} from "react";
import List from "./List";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "../../store/actions/actions";

function PageTodoList() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    let borderError: string = '2px solid red';

    const errorInput: React.RefObject<HTMLDivElement> = React.createRef();
    const inputTitle: React.RefObject<HTMLInputElement> = React.createRef();
    const inputDescription: React.RefObject<HTMLTextAreaElement> = React.createRef();

    const dispatch = useDispatch();
    const list = useSelector((store: any) => store.list.list);

    const handleOnChange = (e: (React.ChangeEvent<HTMLElement>)) => {
        if (errorInput.current) errorInput.current.style.cssText = `opacity: 0; z-index:-1`;
        if (e.target.constructor.name === 'HTMLInputElement') {
            inputTitle.current!.style.border = '';
            if ((e.target as HTMLInputElement).value.match(/\d/) && errorInput.current) {
                errorInput.current.style.cssText = `opacity: 1; z-index:10`;
                setTimeout(() => {
                    if (errorInput.current) errorInput.current.style.cssText = `opacity: 0; z-index:-1`;
                }, 3000)
                return;
            }
            setTitle((e.target as HTMLInputElement).value);
        }
        if (e.target.constructor.name === 'HTMLTextAreaElement') {
            setDescription((e.target as HTMLTextAreaElement).value);
            inputDescription.current!.style.border = '';
        }
    }

    const handleOnClickBtn = () => {
        if (/\S/.test(title) && /\S/.test(description)) {
            dispatch(actions.addNumberTasks());
            dispatch(actions.createList({title, description}));
            setTitle('');
            setDescription('');
        } else if ((!title || /\s/.test(title)) && /\S/.test(description)) {
            inputTitle.current!.style.border = borderError;
        } else if ((!description || /\s/.test(description)) && /\S/.test(title)) {
            inputDescription.current!.style.border = borderError;
        } else {
            inputTitle.current!.style.border = borderError;
            inputDescription.current!.style.border = borderError;
        }
    }

    useEffect(() => {
        dispatch(actions.timeFirstTasks({list}))
    }, [list[0]])

    useEffect(() => {
        if (JSON.stringify(list) != localStorage.getItem('list')!) {
            dispatch(actions.timeLastTasks({list}));
        }
    }, [list[list.length - 1]])

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list));
    }, [list])

    return (
        <div className='wrap_todolist'>
            <h1 className='title'>Запишите свои задачи</h1>
            <div className="inputs">
                <div>
                    <input ref={inputTitle} className="input_title" type="text" value={title}
                           placeholder="Название"
                           onChange={(e) => handleOnChange(e)}/>
                    <textarea ref={inputDescription} className="input_description"
                              value={description}
                              placeholder="Описание задачи"
                              onChange={(e) => handleOnChange(e)}/>
                </div>
                <div>
                    <input className="btn" type="submit" value='' onClick={() => handleOnClickBtn()}/>
                </div>
            </div>
            <div ref={errorInput} className="error_input">Ошибка! В названии задачи нельзя использовать
                цифры.
            </div>
            <List errorInput={errorInput}/>
        </div>
    )
}

export default PageTodoList;