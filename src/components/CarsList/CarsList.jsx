import { useSelector } from "react-redux";
import { selectItemsCars } from "../../redux/selectors";

// import { ContactsList, ContactItem, Btn } from "./ContactList.styled";

const CarsList = () => {
  //   const dispatch = useDispatch();
  const itemsCars = useSelector(selectItemsCars);

  //   const handleDeleteContact = (contactId) => {
  //     dispatch(deleteContact(contactId));
  //   };

  return (
    <ul>
      {itemsCars.map(({ id, year, make, model }) => (
        <li key={id}>
          <span>{year}; </span>
          <span>{make}; </span>
          <span>{model}; </span>

          {/* <Btn type="button" onClick={() => handleDeleteContact(id)}>
            Delete
          </Btn> */}
        </li>
      ))}
    </ul>
  );
};

export default CarsList;
