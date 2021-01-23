import PropTypes from 'prop-types';
import { BiShowAlt } from 'react-icons/bi';
// import { AiOutlineEdit } from 'react-icons/ai';
// import { MdDelete } from 'react-icons/md';
import { IconContext } from 'react-icons';
import s from './ContactItem.module.css';
import IconButton from '../IconButton';

const ContactItem = ({ id, name, onDelete }) => {
  return (
    <li className={s.contact}>
      <p className={s.name}>{name}</p>

      <ul className={s.buttonList}>
        <li className={s.buttonItem}>
          <IconButton
            type="button"
            // onClick={() => onDelete(id)}
            aria-label="Кнопка 'Просмотреть контакт'"
            style={{ width: '30px', height: '30px', backgroundColor: ' rgb(85, 83, 83)' }}
          >
            <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
              <BiShowAlt />
            </IconContext.Provider>
          </IconButton>
        </li>
        {/* <li className={s.buttonItem}>
          <IconButton
            type="button"
            onClick={() => onDelete(id)}
            aria-label="Кнопка 'Удалить контакт'"
            style={{ width: '30px', height: '30px', backgroundColor: ' rgb(85, 83, 83)' }}>
            <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
              <AiOutlineEdit />
            </IconContext.Provider>
          </IconButton>
        </li>
        <li className={s.buttonItem}>
          <IconButton
            type="button"
            onClick={() => onDelete(id)}
            aria-label="Кнопка 'Удалить контакт'"
            style={{ width: '30px', height: '30px', backgroundColor: ' rgb(85, 83, 83)' }}>
            <IconContext.Provider value={{ className: `${s.reactIcons}` }}>
              <MdDelete />
            </IconContext.Provider>
          </IconButton>
        </li> */}
      </ul>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactItem;
