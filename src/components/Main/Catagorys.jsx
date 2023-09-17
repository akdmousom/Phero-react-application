import Category from "./Category";
import PropTypes from 'prop-types'; // ES6

const Categorys = ({ category, handleClick, SortData }) => {




    return (
        <div className="flex gap-4 justify-center">

            {
                category.map((e) => <Category handleClick={handleClick} e={e} key={e.category_id} />)
            }

            <button onClick={SortData} className="btn btn-active btn-secondary">Sort</button>


        </div>
    );
};

Categorys.propTypes = {
    category: PropTypes.array,
    handleClick: PropTypes.func,
    SortData : PropTypes.func

}

export default Categorys;