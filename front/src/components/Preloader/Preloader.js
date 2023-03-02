import './Preloader.css'

function Preloader() {
    return (
        <div className="preloader">
            <p className="preloader__warning">Идет обработка данных, подождите...</p>
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
    )
};

export default Preloader
