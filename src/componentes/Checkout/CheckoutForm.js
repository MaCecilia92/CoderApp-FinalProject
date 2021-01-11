import React, {useState, useEffect} from 'react';
import { useForm } from "react-hook-form";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import './Checkout.css'

export default function Checkout({onSubmit, orderId, submittedData, borrarTodo, cartItems, count, buyprice}) {

        const { register, handleSubmit, errors, getValues, formState, reset } = useForm({
            mode:"onBlur",
        });
    
        const {isSubmitSuccessful} = formState
    
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    
        useEffect(() => {
            if (isSubmitSuccessful) {
               reset({...submittedData})
           }
        }, [isSubmitSuccessful, submittedData, reset])


    return ( <div>
                <form className="ContainerColumn" onSubmit={handleSubmit(onSubmit)} style={{ width: '20rem' }}>
                    <div className="form-group">
                        <input className="form-control" name="firstName" ref={register({
                            required: {
                                value: true,
                                message: 'Por favor ingresa un nombre'
                            },
                            minLength: {
                                value: 2,
                                message: 'Es requerido más de dos carácteres'
                            },
                            maxLength: {
                                value: 60,
                                message: 'El Nombre tiene más de 60 carácteres'
                            }
                            
                        })} placeholder="Nombre" />
                        <small className="text-danger text-small d-block mb-2">
                            {errors.firstName && errors.firstName.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="lastName" ref={register({
                            required: {
                                value: true,
                                message: 'Por favor ingresa tu apellido'
                            },
                            minLength: {
                                value: 2,
                                message: 'Es requerido más de dos carácteres'
                            },
                            maxLength: {
                                value: 60,
                                message: 'El Apellido tiene más de 60 carácteres'
                            }

                        })} placeholder="Apellido" />
                        <small className="text-danger text-small d-block mb-2">
                            {errors.lastName && errors.lastName.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="email" id="email" ref={register({
                            required: {
                                value: true,
                                message: 'Ingresa una dirección de email'
                            },
                            pattern: {
                                value: /([a-z0-9.\-_]){1,60}@(gmail|hotmail|outlook|yahoo)\.(com|com\.ar)/i,
                                message: 'Formato de email inválido'
                            }
                        })} placeholder="Email" />
                        <small className="text-danger text-small d-block mb-2">
                            {errors.email && errors.email.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="emailRepeat" ref={register({
                            required: {
                                value: true,
                                message: 'Ingresa nuevamente tu dirección de email'
                            },
                            pattern: {
                                value: /([a-z0-9.\-_]){1,60}@(gmail|hotmail|outlook|yahoo)\.(com|com\.ar)/i,
                                message: 'Formato de email inválido'
                            },
                            validate: (value) => value === getValues("email")|| 'Debe ingresar el mismo email'
                        })} placeholder="Repetir email" />
                        <small className="text-danger text-small d-block mb-2">
                            {errors.emailRepeat && errors.emailRepeat.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="direccion" ref={register({
                            required: {
                                value: true,
                                message: 'Ingresar una dirección'
                            }
                        })} placeholder="Dirección" />
                        <small className="text-danger text-small d-block mb-2">
                            {errors.direccion && errors.direccion.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="provincia" ref={register({
                            required: {
                                value: true,
                                message: 'Ingresa una provincia'
                            }
                        })} placeholder="Provincia" />
                        <small className="text-danger text-small d-block mb-2">
                            {errors.provincia && errors.provincia.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="ciudad" ref={register({
                            required: {
                                value: true,
                                message: 'Ingresa una Ciudad'
                            }
                        })} placeholder="Ciudad" />
                        <small className="text-danger text-small d-block mb-2">
                            {errors.ciudad && errors.ciudad.message}
                        </small>
                    </div>
                    <div className="form-group">
                        <input className="form-control" name="telefono" ref={register({
                            required: {
                                value: true,
                                message: 'Ingresa nuevamente tu dirección de email'
                            },
                            pattern: {
                                value: /\+?\d{10,14}/,
                                message: 'Número de teléfono inválido'
                            }
                            
                        })} placeholder="Teléfono" />
                        <small className="text-danger text-small d-block mb-2">
                            {errors.telefono && errors.telefono.message}
                        </small>
                    </div>

                    <Button type="submit" className="btn btn-primary btn-lg btn-block" disabled={!formState.isValid} onClick={handleShow} >Realizar compra</Button>
            </form>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                        <Modal.Title>
                            <small>¡La orden se ha generado exitosamente!</small>
                        </Modal.Title>
                        </Modal.Header>
                            <Modal.Body><h3>ID: {orderId }</h3></Modal.Body>
                        <Modal.Footer>
                        <Link exact to="/Catalogo">
                            <Button variant="success" onClick={()=>borrarTodo()}>
                                        Close
                            </Button> 
                        </Link>
                                           
                        </Modal.Footer>
                    </Modal>
       </div>
    )
}
