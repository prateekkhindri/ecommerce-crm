import { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCategoryAction,
  getCategoriesAction,
} from "../../pages/categories/catAction";
import { toggleShowModal } from "../../pages/system-state/SystemSlice";
import { EditCatForm } from "../add-cat-form/EditCatForm";
import { CustomModal } from "../custom-modal/CustomModal";

export const CategoryTable = () => {
  const dispatch = useDispatch();

  //   Local state to delete
  const [catToDelete, setCatToDelete] = useState([]);

  // Local state to hold the selected category value
  const [selectedCat, setSelectedCat] = useState({});

  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoriesAction());
  }, []);

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;
    console.log(checked, value);

    if (value === "all") {
      // Add or remove all the ids

      checked
        ? setCatToDelete(categories.map((item) => item._id))
        : setCatToDelete([]);

      return;
    }

    // Individual item click
    if (checked) {
      // Check if the value exists in the parentCatId
      const hasChildCat = categories.filter(
        (item) => item.parentCatId === value
      );

      if (hasChildCat.length) {
        return alert(
          "This category has dependent child categories, please delete the child categories or reassign them to another parent category"
        );
      }

      // Add Value to the list
      setCatToDelete([...catToDelete, value]);
    } else {
      // Remove from the list

      setCatToDelete(catToDelete.filter((id) => id !== value));
    }
  };

  const handleOnDelete = () => {
    if (window.confirm("Are you sure you want to delete this category ?")) {
      dispatch(deleteCategoryAction({ ids: catToDelete }));
      setCatToDelete([]);
    }
  };

  const handleOnEdit = (catObj) => {
    dispatch(toggleShowModal(true));
    setSelectedCat(catObj);
  };

  const parentCats = categories.filter((item) => !item.parentCatId);
  const childCats = categories.filter((item) => item.parentCatId);
  console.log(parentCats, childCats);

  // console.log(catToDelete);
  return (
    <Row className="mt-5">
      <Col>
        <CustomModal title={"Update Category"}>
          <EditCatForm selectedCat={selectedCat} />
        </CustomModal>
        <p>{categories.length} categories found</p>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>
                <Form.Check onChange={handleOnSelect} value="all" />
              </th>
              <th>Status</th>
              <th> Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parentCats.map((item) => (
              <>
                <tr key={item._id} className="bg-warning">
                  <td>
                    {" "}
                    <Form.Check
                      value={item._id}
                      onChange={handleOnSelect}
                      checked={catToDelete.includes(item._id)}
                    />
                  </td>
                  <td>{item.status}</td>
                  <td>{item.name}</td>
                  <td>
                    <Button
                      variant="warning"
                      onClick={() => handleOnEdit(item)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
                {childCats.map(
                  (cat) =>
                    cat.parentCatId === item._id && (
                      <tr key={cat._id}>
                        <td>
                          {" "}
                          <Form.Check
                            value={cat._id}
                            onChange={handleOnSelect}
                            checked={catToDelete.includes(cat._id)}
                          />
                        </td>
                        <td> --- {cat.status}</td>
                        <td>{cat.name}</td>
                        <td>
                          <Button
                            variant="warning"
                            onClick={() => handleOnEdit(cat)}
                          >
                            Edit
                          </Button>
                        </td>
                      </tr>
                    )
                )}
              </>
            ))}
          </tbody>
        </Table>
        {catToDelete.length > 0 && (
          <Button variant="danger" onClick={handleOnDelete} className="mb-2">
            Delete selected {catToDelete.length} categories
          </Button>
        )}
      </Col>
    </Row>
  );
};
