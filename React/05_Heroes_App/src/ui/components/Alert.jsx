export function Alert( { name } ) {
    return (
        <div className="alert animate__animated animate__fadeInUp">
            <p className="alert-message">{ `There is no heroes named: ${ name }` }</p>
        </div>
    );
};
