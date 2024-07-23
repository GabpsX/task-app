import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlus, faEdit, faTrash, faFloppyDisk, faXmark } from '@fortawesome/free-solid-svg-icons';


const NewTask = () => {
     return (
          <dialog className="modal-create-task" >
               <div className="wrapper-dialog">
                    <div className="wrapper-text-area">
                         <textarea placeholder="Digite aqui!"></textarea>
                    </div>
                    <div className="wrapper-action-modal-button">
                         <button className="modal-save-task">
                              <FontAwesomeIcon icon={faFloppyDisk} /> Salvar
                         </button>
                         <button className="modal-cancel-task">
                              <FontAwesomeIcon icon={faXmark} /> Cancelar
                         </button>
                    </div>
               </div>
          </dialog>
     )
}
export default NewTask;