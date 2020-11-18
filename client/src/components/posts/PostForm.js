import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import Image from './Image';
import ImageUploader from "react-images-upload";

const PostForm = ({ addPost, history }) => {

  const [pictures, setPictures] = useState([]);

  const onDrop = picture => {
    setPictures(picture);
    console.log(picture)
    for (let i = 0; i < pictures.length; i++) {
      formData.append('images[]', pictures[i], pictures[i].name)

    }

  };
  const [datos_Form, setdatos_FormData] = useState({
    text: "",
    name: "",
    titulo: "",
    ubicacion: "",
    tipo: "",
    frase: "",
    valor: "",
    servicios: "",
    categoria: ""

  });
  const formData = new FormData()
  const convertirDatosFormaData = () => {
    formData.append('text', datos_Form.text)
    formData.append('titulo', datos_Form.titulo)
    formData.append('tipo', datos_Form.tipo)
    formData.append('frase', datos_Form.frase)
    formData.append('valor', datos_Form.valor)
    formData.append('categoria', datos_Form.categoria)
    formData.append('servicios', datos_Form.servicios)
    formData.append('ubicacion', datos_Form.ubicacion)
  }

  // const obtenerImagen = (imagenes) => {
  //   for (let i = 0; i < imagenes.length; i++) {
  //     formData.append('images[]', imagenes[i], imagenes[i].name)
  //     console.log(imagenes[i], " aca el array con la info de las imagenes")
  //   }
  // }

  const onChange = (event) => {
    setdatos_FormData({
      ...datos_Form,
      [event.target.name]: event.target.value
    });
    console.log(setdatos_FormData, "aca los datos detiados")
  }
  return (

    <div className="container">
      <br />
      <form className="form"
        encType="multipart/form-data"
        onSubmit={e => {
          e.preventDefault();
          convertirDatosFormaData()
          var fileField = document.querySelector("input[type='file']")
          console.log(fileField.files, '')
          for (const file of fileField.files) {
            formData.append('images[]', file, file.name)
          }
          console.log(convertirDatosFormaData, "aca los datos")
          addPost(formData, history.push('/posts'));
        }}>
        <div className="row">
          <div className="col-md-4">
            <div className="card card-body">
              <div className="">
                <label htmlFor="">Ubicación</label>
                <input
                  type="text"
                  className="form-control"
                  name="ubicacion"
                  value={datos_Form.ubicacion}
                  onChange={onChange}
                  required
                />
              </div>

              <div className="">
                <label htmlFor="">Titulo de la Descripción</label>
                <input
                  type="text"
                  className="form-control"
                  name="titulo"
                  value={datos_Form.titulo}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="">Categoría</label>
                <input
                  type="text"
                  className="form-control"
                  name="categoria"
                  value={datos_Form.categoria}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="">
                <label htmlFor="">tipo</label>
                <input
                  type="text"
                  className="form-control"
                  name="tipo"
                  value={datos_Form.tipo}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="">
                <img src="api.png" alt="" />
              </div>
              <label htmlFor="">Tipo de transporte</label>
              <div className="form-group " style={{ borderStyle: "solid", borderColor: "#ebebeb", borderWidth: "1px" }}>
                <div className="container">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label">Carro</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" >Motocicleta</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" >Caballo  </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" >Avion </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" >Lancha </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                        <label className="form-check-label" >Carro</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                        <label className="form-check-label" >Motocicleta</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label" >Caballo  </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                        <label className="form-check-label">Avion </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <label htmlFor="" style={{ color: "rgb(18, 144, 162, 1)" }}>Frase Principal</label>
                <textarea
                  type="text"
                  className="form-control"
                  name="frase"
                  value={datos_Form.frase}
                  onChange={onChange}
                  required
                  placeholder="maximo 40 caracteres"
                ></textarea>
              </div> <br />
              <div className="" style={{ display: "flex" }}>
                <label htmlFor="" style={{ color: "rgb(18, 144, 162, 1)" }}>Valor plan por persona</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Usd"
                  name="valor"
                  value={datos_Form.valor}
                  onChange={onChange}
                  required
                />
              </div>

            </div>
          </div>
          <div className="col-md-8">
            <input
              type="file"
              name="images"
              multiple
            // withIcon={true}
            // imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            //onChange={onDrop}
            // maxFileSize={5242880} 
            />
            {/* <input
              type="file"
              multiple            
              onChange={obtenerImagen}         
            /> */}
            <div className="">
              <label htmlFor="" className="btnmi">Descripción</label>
              <textarea
                type="text"
                className="form-control"
                name="text"
                value={datos_Form.text}
                onChange={onChange}
                required
                placeholder="maximo 500 caracteres"
              ></textarea>
            </div>
            <br /> <br />
            <div className="">
              <label className="btnmi">Servicios ofrecidos</label>
              <textarea
                type="text"
                className="form-control"
                name="servicios"
                value={datos_Form.servicios}
                onChange={onChange}
                required
                placeholder="maximo 300 caracteres"
              ></textarea>
            </div>
          </div>
        </div>
        <br />
        <button type="submit" className="btnmi ">
          guardar
              </button>
      </form>

      <br />
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);

