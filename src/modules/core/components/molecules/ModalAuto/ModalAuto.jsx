import './style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

ModalAuto.propTypes = {
  search: PropTypes.string,
  modalAuto: PropTypes.func,
  closeModal: PropTypes.bool
};

function ModalAuto({ search, modalAuto, closeModal }) {
  const [estado1, setestado1] = useState(true);
  const openModalAuto1 = () => {
    if (estado1 == true) {
      setestado1(false);
    } else {
      setestado1(true);
    }
  };

  const name = ['hola', 'buenos dias'];
  console.log(name);
  function modalAutoModal(a) {
    if (search.length > 0) {
      modalAuto(a);
    }
  }

  return (
      <div className={`modalAuto ${closeModal && 'modalAuto-open'}`}>
        <ul className="listaM">
          {name.filter((item) =>
            item.toLowerCase().includes(search.trim().toLowerCase()))
            .slice(0, 5)

            .map((item) => (
              <li
                className="listaMa"
                key={item}
                onClick={() => modalAutoModal(item)}
                onChange={openModalAuto1}>
                <span className="item">{item}</span>
              </li>
            ))}
        </ul>
      </div>
  );
}

export default ModalAuto;
