const Card = ({ categoryDataByID, }) => {




    return (
        categoryDataByID.map((card, idx) => <div key={idx} className="card inner-card bg-white shadow-xl">
            <figure><img src={card.thumbnail} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{card.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>)
    );
};

export default Card;