const Header = () => {

    const arrayHeader = ['My cv'];

    return ( 
    <>
        {arrayHeader.map((header) => (
            <div className='div_link' key={header}>
                <a href={'#' + header}>{header}</a>
            </div>
        ))}

        
    </> 
    );
}
 
export default Header;