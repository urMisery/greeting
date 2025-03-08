export default function Button({onClick, children}){
    return(
        <button className="custom-button" onclick={onClick}>
            {children}
        </button>
    );
}