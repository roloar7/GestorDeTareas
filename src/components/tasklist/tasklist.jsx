import React from "react";

const TaskList = () => {


    return (
        <div className="container">
            <div className='task-list-box'>
                <div className='task-box'>
                    <h1 className='task'> Sacar al perro </h1>
                    <div className="container-edit-trash">
                        <div className="edit-trash-box">
                            <box-icon type='solid' name='edit'></box-icon>
                            <div className="line-a"></div>
                            <box-icon name='trash' type='solid' ></box-icon>
                        </div>
                    </div>
                </div>
                <div className='task-box'>
                    <h1 className='task'> Reunion de empresa </h1>
                    <div className="container-edit-trash">
                        <div className="edit-trash-box">
                            <box-icon type='solid' name='edit'></box-icon>
                            <div className="line-a"></div>
                            <box-icon name='trash' type='solid' ></box-icon>
                        </div>
                    </div>
                </div>
                <div className='task-box'>
                    <h1 className='task'> Estudiar</h1>
                    <div className="container-edit-trash">
                        <div className="edit-trash-box">
                            <box-icon type='solid' name='edit'></box-icon>
                            <div className="line-a"></div>
                            <box-icon name='trash' type='solid' ></box-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskList