const Wrapper = (props) => {
    return (
        <div className={props.classes}>
            {props.children}
        </div>
    );
};

export default Wrapper;