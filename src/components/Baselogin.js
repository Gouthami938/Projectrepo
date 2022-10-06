import CustomNavbarlogin from "./CustomNavbarlogin";

const Baselogin=({title="welcome to website",children})=>{
    return(
        <div className="container-fluid">
            <CustomNavbarlogin/>
            {children}
           

        </div>
    );
};
export default Baselogin;