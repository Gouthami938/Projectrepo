import CustomNavbarMem from "./CustomNavbarMem";

const BaseMem=({title="welcome to website",children})=>{
    return(
        <div className="container-fluid">
            <CustomNavbarMem/>
            {children}
           

        </div>
    );
};
export default BaseMem;