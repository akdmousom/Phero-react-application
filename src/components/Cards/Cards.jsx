import Card from "./Card";
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types'

import 'react-toastify/dist/ReactToastify.css';


const Cards = ({ categoryDataByID, SortData }) => {
    const notify = () => toast.error("Something Wrong");
    if (categoryDataByID.length === 0) {

        return (
            <>

                <h1 className="text-4x">No Data Found</h1>
                <ToastContainer />
                {
                    notify()
                }

            </>
        )

    }

    return (
        <div className="grid grid-cols-4 my-4 gap-2">
            <Card SortData={SortData} categoryDataByID={categoryDataByID} />

        </div>
    );
};

Cards.propTypes = {
    categoryDataByID: PropTypes.array.isRequired,
    SortData : PropTypes.func
}

export default Cards;