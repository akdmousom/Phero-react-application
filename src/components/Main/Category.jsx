import PropTypes from 'prop-types' 
const Category = ({e,handleClick}) => {
    return (
        <div>
            <button onClick={()=> handleClick(e.category_id)}  className="btn btn-active btn-secondary">{e.category}</button>
            
        </div>
    );
};

Category.propTypes = {
    e: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Category;